<template>
  <div class="container">
    <header class="site-header">
      <NuxtLink to="/" class="site-title">my-posts</NuxtLink>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer class="site-footer">
      © {{ new Date().getFullYear() }} e-tat-98
    </footer>
  </div>
</template>
