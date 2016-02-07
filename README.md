# rogain-render-string

Render a Rogain tree into html using string concatination.  Useful for server rendering.

## Example

```js
import tree from './template.json';
import data from './data.json';

document.body.innerHTML = Rogain.renderToString(tree, data, config);
```

## renderToString(tree, props)

Renders a tree with a given set of properies.

___tree___

Object in Rogain tree format.

___props___

Object. 

## Install 

With [npm](https://www.npmjs.com) do:

```
npm install rogain-render-string
```

## License

MIT