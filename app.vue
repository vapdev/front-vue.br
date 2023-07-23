<script setup>
const colorMode = useColorMode();

colorMode.preference = "mytheme";
</script>
<template>
  <div class="h-screen">
    <div class="m-auto">
      <NuxtPage />
    </div>
  </div>
</template>
