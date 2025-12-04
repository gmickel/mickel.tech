import rehypePrettyCode from 'rehype-pretty-code';

export const mdxOptions = {
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

