<template>
  <div class="wallpaper-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <div class="wallpaper-links">
      <a :href="mobile" target="_blank" rel="noreferrer">Mobile</a>
      <a :href="desktop" target="_blank" rel="noreferrer">Desktop</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  mobile: String,
  desktop: String,
})
</script>

<style scoped>
.wallpaper-card {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
}
.wallpaper-card h3 {
  margin: 0 0 8px;
}
.wallpaper-links {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}
</style>
