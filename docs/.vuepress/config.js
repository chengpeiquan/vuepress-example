const IS_DEV = process.env.NODE_ENV === 'development' ? true : false;

module.exports = {
  base: '/vuepress-example/',
  title: 'Vuepress Example',
  description: 'An example for vuepress.',
  head: [
    [
      'link', 
      {
        rel: 'icon',
        href: 'https://chengpeiquan.com/favicon.ico'
      }
    ]
  ],
  // host: IS_DEV ? '192.168.0.88' : '',
  port: IS_DEV ? '2000' : '',
  dest: './dist',
  themeConfig: {
    nav: [
      {
        text: '博客首页',
        link: 'https://chengpeiquan.com/'
      }
    ],
    sidebar: [
      '/',
      'test',
      'customer'
    ],
    sidebarDepth: 2,
    smoothScroll: true,
    repo: 'chengpeiquan/vuepress-example',
    docsDir: 'docs',
    docsBranch: 'main',
    lastUpdated: true,
    editLinks: true
  },
  configureWebpack: (config, isServer) => {
    if ( IS_DEV ) {
      return {
        resolve: {
          alias: {
            '@img': '/public/img'
          }
        }
      }
    }
    // 生产环境，部署到cdn
    else {
      return {
        output: {
          publicPath: 'https://cdn.jsdelivr.net/gh/chengpeiquan/vuepress-example@gh-pages/'
        },
        resolve: {
          alias: {
            '@img': '/public/img'
          }
        }
      }
    }
  },
  plugins: []
}