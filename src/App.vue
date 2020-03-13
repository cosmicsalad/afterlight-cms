<template>
  <div class="app">
      <Header :class="{sticky: scrollPosition > 0}" />
        <main>
          <router-view />
        </main>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
    data() {
      return {
        scrollPosition: null
      }
    },
    components: {
      Header,
      Footer
    },
    methods: {
      updateScroll() {
        this.scrollPosition = window.scrollY
      }
    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll);
    },
    metaInfo() {
        return {
        title: this.$static.metadata.siteName,
        meta: [
            {
            key: 'description',
            name: 'description',
            content: this.$static.metadata.siteDescription
            }
        ]
        }
    }
}
</script>

<style lang="scss">

@font-face {
  font-family: Domaine;
  src: url('assets/DomaineBold.otf');
  font-weight: normal;
}

@font-face {
  font-family: DomaineItalic;
  src: url('assets/DomaineBold-Italic.otf');
  font-weight: italic;
}

@font-face {
  font-family: Calibre;
  src: url('assets/calibre-regular.woff');
  font-weight: 400;
}

@font-face {
  font-family: CalibreMedium;
  src: url('assets/calibre-medium.woff');
  font-weight: 600;
}

@font-face {
  font-family: CalibreBold;
  src: url('assets/calibre-bold.woff');
  font-weight: 900;
}

* {
    box-sizing: border-box;
}
body {
  --color-base: rgb(255, 255, 255);
  --color-base-1: rgb(243, 243, 243);
  --color-contrast: rgb(0, 0, 0);
  --color-contrast-1: rgb(43, 43, 43);
  font-family: Calibre, sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.05rem;
  margin:0;
  padding: 0;
  font-size: 1em;
  background: var(--color-base);
  color: var(--color-contrast);
  transition: background 0.5s cubic-bezier(0.4, 0.25, 0.3, 1);
  width: 100%;
  overflow-x: hidden;
}

body.dark {
  --color-base: rgb(0, 0, 0);
  --color-base-1: rgb(43, 43, 43);
  --color-contrast: rgb(255, 255, 255);
  --color-contrast-1: rgb(243, 243, 243);
}

.layout:not(.home):not(.single-tutorial) {
  padding-top: 10em;
}

.layout.single-tutorial {
  padding-top: 0;
}

.tutorial-step {
  background: rgba(11,11,11,0.2);
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 60px;
  border: 1px solid rgba(11,11,11,0.9);
  border-radius: 10px;
  padding: 2rem;
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
  }
  img {
    max-height: 550px;
    border-radius: 5px;
    // box-shadow: 0 5px 10px 10px rgba(0,0,0,1.0);
  }
  p {
    text-align: left;
    width: 100%;
    padding: 1rem 0 0 3rem;
  }
}

h1 {
  font-family: Domaine, serif;
  letter-spacing: -0.01em;
}

h2 {
  font-family: CalibreBold, sans-serif;
}

.fade-enter-active {
  transition: all 1525ms cubic-bezier(0.4, 0.25, 0.3, 1);
  opacity: 1;
  /* transform: translateX(0); */
}

.fade-enter {
  opacity: 0;
  /* transform: translateX(-50%); */
  /* transform: translate3d(100px,0,0); */
}

.fade2-enter-active {
  transition: all 1525ms cubic-bezier(0.4, 0.25, 0.3, 1);
  opacity: 1;
  /* transform: translateX(0); */
  /* width: 100%; */
}

.fade2-enter {
  opacity: 0;
  /* transform: translateX(-30%); */
  /* width: 0; */
  /* transform: translate3d(100px,0,0); */
}

.view {
  width: 100%;
  transform: translate3d(0,0,0);
  overflow: hidden;
}

.layout {
  padding: 0rem 0 0 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}

a {
  color: inherit;
}

img {
  max-width: 100%;
}

.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

</style>
