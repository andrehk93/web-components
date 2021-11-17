<template>
  <footer style="background: #3d3d3d; color: white; padding: 2rem; text-align: left; margin-top: auto">
    <p style="font-size: 2rem; margin: 0; font-weight: 500" class="footer__main-title">{{ title }}</p>
    <p style="font-size: 1.125rem; margin: 0" class="footer__sub-title">{{ subtitle }}</p>
    <p>Nof times clicked: {{ clicked }}</p>
    <button @click="click">Increase counter</button>
  </footer>
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
      default: "This is a Vue Web Component"
    }
  },
  data: () => ({
    clicked: 0,
  }),
  methods: {
    click: function () { this.clicked += 1; }
  }

};
</script>

<style>

footer {
  background: #3d3d3d;
  color: white;
}

.footer__main-title {
  font-size: 3rem;
}

.footer__sub-title {
  font-size: 1.5rem;
}

</style>
