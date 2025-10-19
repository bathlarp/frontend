import { DirectiveDescriptor, NestedLexicalEditor } from '@mdxeditor/editor';
import type { TextDirective } from 'mdast-util-directive';

export const RestrictedDirectiveDescriptor: DirectiveDescriptor = {
  name: 'restricted',
  testNode(node) {
    return node.name === 'restricted';
  },
  hasChildren: true,
  attributes: [],
  type: 'textDirective',
  Editor: () => (
    <span className="block w-fit text-success">
      <NestedLexicalEditor<TextDirective>
        getContent={(node) => node.children}
        getUpdatedMdastNode={(node, children) => ({ ...node, children })}
      />
    </span>
  ),
};
