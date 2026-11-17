<template>
  <div class="container">
    <header class="site-header">
      <NuxtLink to="/" class="site-title">
        <img
          src="https://github.com/e-tat-98.png?size=80"
          alt="e-tat-98 の GitHub アイコン"
          class="site-avatar"
          width="40"
          height="40"
        />
        <span>My Blog</span>
      </NuxtLink>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer class="site-footer">
      © {{ new Date().getFullYear() }} e-tat-98
    </footer>
  </div>
</template>
