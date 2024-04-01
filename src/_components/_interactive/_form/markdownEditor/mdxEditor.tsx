'use client';

import type { ForwardedRef } from 'react';
import React from 'react';
import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  ButtonWithTooltip,
  CreateLink,
  directivesPlugin,
  headingsPlugin,
  imagePlugin,
  insertDirective$,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  ListsToggle,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
  quotePlugin,
  Separator,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  UndoRedo,
  usePublisher,
} from '@mdxeditor/editor';

import { RestrictedDirectiveDescriptor } from './markdownDirectives';

import '@mdxeditor/editor/style.css';
import styles from './mdxeditor.module.css';

export type MarkdownEditorProps = {
  hasError?: boolean;
} & MDXEditorProps;

export const MdxEditor = ({
  editorRef,
  hasError,
  ...props
}: {
  editorRef: ForwardedRef<MDXEditorMethods> | null;
} & MarkdownEditorProps) => {
  return (
    <div aria-invalid={hasError}>
      <MDXEditor
        className={styles.mdxeditorColors}
        contentEditableClassName={styles.contentEditable}
        plugins={[
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <UndoRedo />
                <Separator />
                <BoldItalicUnderlineToggles />
                <Separator />
                <ListsToggle />
                <Separator />
                <BlockTypeSelect />
                <Separator />
                <CreateLink />
                <InsertImage />
                <Separator />
                <InsertTable />
                <InsertThematicBreak />
                <Separator />
                <RestrictedButton />
              </>
            ),
          }),
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          linkPlugin(),
          linkDialogPlugin({
            linkAutocompleteSuggestions: ['https://www.bathlarp.co.uk/'],
          }),
          imagePlugin({
            imageAutocompleteSuggestions: ['https://www.bathlarp.co.uk/'],
          }),
          tablePlugin(),
          listsPlugin(),
          directivesPlugin({
            directiveDescriptors: [RestrictedDirectiveDescriptor],
          }),
        ]}
        {...props}
        ref={editorRef}
      />
    </div>
  );
};

const RestrictedButton = () => {
  // grab the insertDirective action (a.k.a. publisher) from the
  // state management system of the directivesPlugin
  const insertDirective = usePublisher(insertDirective$);

  return (
    <ButtonWithTooltip
      title={'Restricted content markup'}
      onClick={() =>
        insertDirective({
          name: 'restricted',
          type: 'textDirective',
        })
      }
    >
      Res
    </ButtonWithTooltip>
  );
};
