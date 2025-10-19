import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

export type WrappedMarkdownProps = {
  text: string;
};

export const WrappedMarkdown = ({ text }: WrappedMarkdownProps) => {
  const cleanText = text
    .replace(/<\/?script>/g, 'Naughty!')
    .replace(/<\/?style>/g, 'Naughty!');
  return (
    <Markdown
      remarkPlugins={[remarkGfm, [remarkToc, { tight: false }]]}
      rehypePlugins={[rehypeRaw]}
      disallowedElements={['input']}
    >
      {cleanText}
    </Markdown>
  );
};
