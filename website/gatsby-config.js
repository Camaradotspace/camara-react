module.exports = {
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: 'Camara Design System',
        description:
          'UI foundations for accessible, beautiful, and responsive interfaces.',
        siteUrl: 'https://camara.space',
        author: 'Presh Onyee',
        sections: ['Components'],
        navItems: [{ title: 'Docs', url: '/docs/' }],
        twitterAccount: 'preshonyee',
        githubRepositoryURL: 'https://github.com/camaradotspace/camara-react',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/fonts/`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
