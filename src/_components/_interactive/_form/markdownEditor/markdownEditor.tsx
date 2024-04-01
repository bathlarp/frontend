'use client';

import React, { forwardRef } from 'react';
import { MDXEditorMethods } from '@mdxeditor/editor';
import dynamic from 'next/dynamic';

import { MarkdownEditorProps } from './mdxEditor';

const MdxEditor = dynamic(
  () => import('./mdxEditor').then((mod) => mod.MdxEditor),
  {
    ssr: false,
  },
);

export const MarkdownEditor = forwardRef<MDXEditorMethods, MarkdownEditorProps>(
  (props, ref) => <MdxEditor {...props} editorRef={ref} />,
);

MarkdownEditor.displayName = 'MarkdownEditor';
