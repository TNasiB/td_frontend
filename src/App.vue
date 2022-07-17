<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppWorkplace from "./components/AppWorkplace.vue";
</script>

<template>
  <div id="app">
    <AppHeader />
    <AppWorkplace />
  </div>
</template>

<style lang="scss">
@import "sanitize.css";
@import "sanitize.css/forms.css";
@import "sanitize.css/typography.css";
* {
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
