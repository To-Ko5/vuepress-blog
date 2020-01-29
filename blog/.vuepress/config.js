module.exports = {
    title: 'VuePress Blog demonstration', 
    description: 'VuePress Blog demonstration',
    theme: '@vuepress/theme-blog',
    base: '/vuepress-blog/',
    dest: 'docs/',
    locales: {
        '/': {
          lang: 'ja'
        }
      },
    themeConfig: {
        dateFormat: 'YYYY-MM-DD',
        nav: [
            { text: 'Blog', link: '/' },
            { text: 'Tags', link: '/tag/' },
          ],
        footer: {
            copyright: [
              {
                text: 'Privacy Policy',
                link: '',
              },
              {
                text: 'Contact',
                link: '',
              },
            ],
        },
    }
}
