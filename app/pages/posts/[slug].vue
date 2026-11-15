<script setup lang="ts">
const route = useRoute()
// Studio にログイン中だけ付く Cookie（nuxt-studio が設定する）。下書きのプレビュー用
const isStudioSession = String(useCookie('studio-session-check').value) === 'true'

const { data: post } = await useAsyncData(route.path, () =>
  queryCollection('posts').path(route.path).first(),
)

if (!post.value || (post.value.draft && !isStudioSession)) {
  throw createError({ statusCode: 404, statusMessage: '記事が見つからない', fatal: true })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
  robots: post.value.draft ? 'noindex, nofollow' : undefined,
})
</script>

<template>
  <article v-if="post" class="post">
    <div class="post-meta">
      <time :datetime="post.date">{{ formatDate(post.date) }}</time>
      <span v-for="tag in post.tags" :key="tag" class="tag">#{{ tag }}</span>
    </div>
    <ContentRenderer :value="post" class="prose" />
  </article>
</template>
