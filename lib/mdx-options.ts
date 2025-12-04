import rehypePrettyCode from 'rehype-pretty-code';

export const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'night-owl',
          keepBackground: false,
        },
      ],
    ],
  },
};
