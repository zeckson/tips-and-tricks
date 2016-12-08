Function range which helps you to iterare right in place.
Let's assume you need to show player lives in your template.
Like this:

Lives: &#9829;&#9829;&#9829;&#9829;&#9829;

So you need to fill array just in place and show it:

```
const html = `Lives: ${range(0, 5)(it => &#9829;).join()}
```