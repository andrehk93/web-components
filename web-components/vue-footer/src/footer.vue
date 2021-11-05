<template>
  <div style="text-align: center; font-family: sans-serif">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Hello WC World!"
    },
    subtitle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
div {
  background: red;
}
</style>