
const binder = new window.mvvm.Binder();

const template = `
<div>
  <span>Name:</span><span>\${user.name}</span>
</div>
<div>
  <label>Name:<input value="\${user.name}"></label>
</div>
`;

const element = binder.compile(template);

let username = `Alice`;

const model = {
  user: {
    get name() {
      return username;
    },

    set name(newName) {
      console.log(newName);
      username = newName;
    }
  }
};

binder.bind(model);
document.body.appendChild(element);

