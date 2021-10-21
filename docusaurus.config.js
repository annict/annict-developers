// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Annict Developers',
  tagline: 'AnnictのWeb APIを使ってアプリケーションを作ろう',
  url: 'https://developers.annict.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kiraka', // Usually your GitHub org/user name.
  projectName: 'annict-developers', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/kiraka/annict-developers/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/kiraka/annict-developers/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Developers',
        logo: {
          alt: 'Annict Developers',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'はじめに',
          },
          // {
          //   type: 'doc',
          //   docId: 'graphql-api',
          //   position: 'left',
          //   label: 'GraphQL API (β)',
          // },
          // {
          //   type: 'doc',
          //   docId: 'rest-api',
          //   position: 'left',
          //   label: 'REST API',
          // },
          {to: '/blog', label: 'ブログ', position: 'left'},
          // {
          //   type: 'doc',
          //   docId: 'community',
          //   position: 'left',
          //   label: 'コミュニティ',
          // },
          {
            href: 'https://github.com/kiraka/annict',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://annict.com',
            label: 'Annict',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'はじめに',
                to: '/docs/intro',
              },
              {
                label: 'GraphQL API (β)',
                to: '/docs/graphql-api',
              },
              {
                label: 'REST API',
                to: '/docs/rest-api',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/kiraka/annict',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/PVJRUKP',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/AnnictJP',
              },
              {
                label: 'Twitter (開発者向け)',
                href: 'https://twitter.com/AnnictDevJP',
              },
              {
                label: 'Annict Forum',
                href: 'https://annict.com/forum',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'ブログ',
                to: '/blog',
              },
              {
                label: 'Annict',
                href: 'https://annict.com',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Annict`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
