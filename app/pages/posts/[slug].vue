<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(route.path, () =>
  queryCollection('posts').path(route.path).first(),
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: '記事が見つからない', fatal: true })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
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
