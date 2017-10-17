(function () {
  class Observer {
    constructor(paths, value, scope) {
      this.listeners = new Set();
      this.paths = paths;
      this.path = paths.join(`.`);
      this.value = value;
      this.scope = scope;

      console.log(paths);
    }

    subscribe(listener) {
      this.listeners.add(listener);
    }

    notify(value) {
      const paths = this.paths.slice();
      const key = paths.pop();
      let obj = this.scope;
      for (const path of paths) {
        obj = obj[path];
      }
      obj[key] = value;
      value = obj[key];

      for (const listener of this.listeners) {
        if (listener.path === this.path) {
          listener.update(value);
        }
      }
    }

    update(entity) {
      if (entity.path === this.path) {
        this.value = entity.value;
        this.notify(this.value);
      }
    }
  }

  const Replacement = {
    START: `\${`,
    END: `}`
  };

  const parse = (text) => {
    const start = text.indexOf(Replacement.START);
    const end = text.indexOf(Replacement.END);
    return text.substring(start + Replacement.START.length, end);
  };

  class Entity {
    constructor(node, path) {
      this.node = node;
      this.path = path;

      this.update(``);
    }

    update(value) {
    }

    get value() {
    }
  }

  class TextEntity extends Entity {
    constructor(node, path) {
      super(node, path);
    }

    update(value) {
      this.node.textContent = value;
    }

    get value() {
      return this.node.textContent;
    }

    static create(node) {
      const text = node.textContent;
      return new TextEntity(node, parse(text));
    }
  }

  class InputEntity extends TextEntity {
    constructor(node, path) {
      super(node, path);

      this.node.addEventListener(`input`, () => this.onUpdate(this));
    }

    update(value) {
      this.node.value = value;
    }

    onUpdate(entity) {

    }

    get value() {
      return this.node.value;
    }

    static create(node) {
      const text = node.value;
      return new InputEntity(node, parse(text));
    }
  }

  class Binder {
    constructor() {
      this.readers = [];
      this.writers = [];
      this.observers = [];
    }

    compile(template) {
      const wrapper = document.createElement(`div`);
      wrapper.innerHTML = template;
      return this.process(wrapper);
    }

    process(content) {
      const traverse = (node, inspect) => {
        if (!node) {
          return;
        }

        if (node.childNodes.length) {
          for (const child of node.childNodes) {
            traverse(child, inspect);
          }
        } else {
          inspect(node);
        }
      };

      const visitor = (node) => {
        const value = node.textContent;
        if (value && value.indexOf(Replacement.START) >= 0) {
          this.readers.push(TextEntity.create(node.parentNode));
        } else if (node.tagName === `INPUT`) {
          const input = InputEntity.create(node);
          this.writers.push(input);
          this.readers.push(input);
        }
      };

      traverse(content, visitor);

      return content;
    }

    bind(scope) {
      const traverseObject = (value, visit, paths = []) => {
        if (!(typeof value === `object`)) {
          visit(paths.slice(), value)
        } else {
          for (const [k, v] of Object.entries(value)) {
            paths.push(k);
            traverseObject(v, visit, paths);
            paths.pop();
          }
        }
      };

      const visitor = (paths, value) => {
        this.observers.push(new Observer(paths, value, scope));
      };
      traverseObject(scope, visitor);

      for (const observer of this.observers) {
        for (const writer of this.writers) {
          writer.onUpdate = (entity) => observer.update(entity);
        }
        for (const reader of this.readers) {
          observer.subscribe(reader);
        }
        observer.notify(observer.value);
      }
    }
  }

  window.mvvm = {
    Binder
  }
})();

