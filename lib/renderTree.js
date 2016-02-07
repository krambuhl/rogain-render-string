import renderBranch from './renderBranch';
import renderFrame from './renderFrame';
import renderTag from './renderTag';
import renderComponent from './renderComponent';
import renderHelper from './renderHelper';
import renderTextnode from './renderTextnode';
import renderText from './renderText';
import renderVariable from './renderVariable';

export default function renderTree(tree, props, config) {
  if (tree === undefined) return;

  if (Array.isArray(tree)) {
    return renderBranch(tree, props, config);
  }

  switch (tree.type) {
    case 'frame': return renderFrame(tree, props, config);
    case 'tag': return renderTag(tree, props, config);
    case 'component': return renderComponent(tree, props, config);
    case 'helper': return renderHelper(tree, props, config);
    case 'data': return renderBranch(tree, props, config);
    case 'textnode': return renderTextnode(tree, props, config);
    case 'text': return renderText(tree, props, config);
    case 'variable': return renderVariable(tree, props, config);
  }
}