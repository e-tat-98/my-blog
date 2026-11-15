export default defineNuxtConfig({
  compatibilityDate: '2026-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', 'nuxt-studio'],
  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: { default: 'github-light', dark: 'github-dark' },
        },
      },
    },
  },

  studio: {
    // Vercel ではリポジトリ情報は自動検出されるが、ローカル確認用に明示しておく
    repository: {
      provider: 'github',
      owner: 'e-tat-98',
      repo: 'my-posts',
      branch: 'main',
    },
  },

  // 記事ページは事前生成して高速化（Studio 用のサーバールートは SSR のまま動く）
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },
})
