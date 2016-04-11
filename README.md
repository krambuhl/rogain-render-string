# rogain-render-string

Render a Rogain tree into html using string concatination.  Useful for server rendering.

## Example

```js
import tree from './template.json';
import data from './data.json';

document.body.innerHTML = renderToString(resolveTree(tree, data, options));
```

## renderToString(tree, props, options)

Renders a tree with a given set of properies.

___tree___

Object in Rogain tree format.

___props___

Object. 

___options___

`options.components` optional `rogain-registry` instance. defines components used in resolution.

## Install 

With [npm](https://www.npmjs.com) do:

```
npm install rogain-render-string
```

## License

MIT