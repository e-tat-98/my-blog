<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () =>
  queryCollection('posts')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .select('title', 'description', 'date', 'tags', 'path')
    .all(),
)

useSeoMeta({ title: 'my-posts' })
</script>

<template>
  <section>
    <h1>記事一覧</h1>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.path">
        <NuxtLink :to="post.path" class="post-link">
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          <h2>{{ post.title }}</h2>
          <p v-if="post.description">{{ post.description }}</p>
        </NuxtLink>
      </li>
    </ul>
    <p v-if="!posts?.length">まだ記事がないよ。</p>
  </section>
</template>
