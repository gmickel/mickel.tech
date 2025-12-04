import type { CompileOptions } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';

export const mdxOptions: CompileOptions = {
  rehypePlugins: [
    [
      rehypePrettyCode,
      {
        theme: 'night-owl',
        keepBackground: false,
      },
    ],
  ],
};
