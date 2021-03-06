# hig-vanilla
The HIG Web implementation consists of `html`, `css` and `js`. You can opt to only consume the `html` and `css` part and write the wrapper against the `interface.json` yourself (hard) or opt to use our `js` wrapper directly (easy).

## Install

We use [Yarn](https://yarnpkg.com) for development.

```bash
yarn
yarn lib # compiles library into lib/
```

## Consuming Basic Example: Button
```javascript
var Button = new Hig.Button({
    "title": "just a button",
    "link": "http://autodesk.com"
});

Button.mount("body");

Button.onClick(function(e){
    e.preventDefault();
    console.log("Button CLICK")
});
```

more advanced button examples can be found in [the components tests dir](src/components/button/tests/tests-button.html)

## Contribute

Please see [DEVELOPING.md](./DEVELOPING.md).
