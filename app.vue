<script setup>
const colorMode = useColorMode();

onMounted(() => {
  const theme = 'forest';
  if (theme) {
    colorMode.preference = theme;
  }
});
</script>
<template>
  <div class="h-screen">
    <div class="m-auto">
      <NuxtPage />
    </div>
  </div>
</template>
