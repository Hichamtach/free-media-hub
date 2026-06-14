import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Free Media Hub',
  description: 'Free Media Hub — The largest collection of free stuff on the internet! Stream, download, torrent, and explore AI, gaming, books, and more.',
  titleTemplate: '%s | Free Media Hub',
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://freemediahub.net',
  },
  head: [
    ['meta', { name: 'theme-color', content: '#0a0a0f' }],
    ['meta', { name: 'og:title', content: 'Free Media Hub' }],
    ['meta', { name: 'og:description', content: 'The largest collection of free stuff on the internet! Stream, download, torrent, and explore AI, gaming, books, and more.' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Free Media Hub' }],
    ['meta', { name: 'twitter:description', content: 'The largest collection of free stuff on the internet!' }],
    ['link', { rel: 'icon', href: '/fmhy.ico' }],
  ],
  themeConfig: {
    logo: '/fmhy.ico',
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Changelog', link: '/posts/changelog-sites' },
      { text: 'Glossary', link: 'https://rentry.org/The-Piracy-Glossary' },
      { text: 'Backups', link: '/other/backups' },
      {
        text: 'Ecosystem',
        items: [
          { text: 'Search', link: '/posts/search' },
          { text: 'FAQs', link: '/other/FAQ' },
          { text: 'Bookmarks', link: 'https://github.com/Hichamtach/bookmarks' },
          { text: 'SafeGuard', link: 'https://github.com/Hichamtach/free-media-hub-safeguard' },
          { text: 'Startpage', link: '/startpage' },
          { text: 'Selfhosting', link: '/other/selfhosting' },
          { text: 'Wallpapers', link: '/other/wallpapers' },
          { text: 'Feedback', link: '/feedback' },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Beginners Guide',
        link: '/beginners-guide',
      },
      {
        text: 'Posts',
        link: '/posts',
      },
      {
        text: 'Contribute',
        link: '/other/contributing',
      },
      {
        text: 'Wiki',
        collapsed: false,
        items: [
          { text: 'Adblocking / Privacy', link: '/privacy' },
          { text: 'Artificial Intelligence', link: '/ai' },
          { text: 'Movies / TV / Anime', link: '/video' },
          { text: 'Music / Podcasts / Radio', link: '/audio' },
          { text: 'Gaming / Emulation', link: '/gaming' },
          { text: 'Books / Comics / Manga', link: '/reading' },
          { text: 'Downloading', link: '/downloading' },
          { text: 'Torrenting', link: '/torrenting' },
          { text: 'Educational', link: '/educational' },
          { text: 'Android / iOS', link: '/mobile' },
          { text: 'Linux / macOS', link: '/linux-macos' },
          { text: 'Non-English', link: '/non-english' },
          { text: 'Miscellaneous', link: '/misc' },
        ],
      },
      {
        text: 'Tools',
        collapsed: false,
        items: [
          { text: 'System Tools', link: '/system-tools' },
          { text: 'File Tools', link: '/file-tools' },
          { text: 'Internet Tools', link: '/internet-tools' },
          { text: 'Social Media Tools', link: '/social-media-tools' },
          { text: 'Text Tools', link: '/text-tools' },
          { text: 'Gaming Tools', link: '/gaming-tools' },
          { text: 'Image Tools', link: '/image-tools' },
          { text: 'Video Tools', link: '/video-tools' },
          { text: 'Developer Tools', link: '/developer-tools' },
        ],
      },
      {
        text: 'More',
        collapsed: true,
        items: [
          { text: 'Unsafe Sites', link: '/unsafe' },
          { text: 'Storage', link: '/storage' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hichamtach/free-media-hub' },
    ],
    footer: {
      message: 'Made with ❤',
      copyright: '© 2026 Free Media Hub. This site does not host any files.',
    },
  },
})
