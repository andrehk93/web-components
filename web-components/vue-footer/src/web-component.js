import Vue from "vue";
import wrap from "@vue/web-component-wrapper";

import Footer from "./footer.vue";

const footerElement = wrap(Vue, Footer);

window.customElements.define("vue-footer", footerElement);