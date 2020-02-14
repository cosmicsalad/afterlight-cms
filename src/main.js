import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

import "@/assets/code-highlight.css"
import "@/assets/typekit.css"

export default function (Vue, { head }) {
  head.link.push({
    rel: 'stylesheet',
    url: 'https://use.typekit.net/enb7kaf.css'
  })
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
