<template>
  <Layout class="tutorials">

    <PageHeader
      title="Tutorials."
      subtitle="Educational content about how to be super cool and how not to suck at taking really cool photos because you're using Afterlight and it's impossible if you use Afterlight that's definitely not true."
    />

    <div class="flex flew-row flex-wrap justify-center content-center">
      <g-link 
        :to="item.node.path"
        v-for="item in $page.posts.edges" 
        :key="item.node.id"
        class="tutorial-post relative bg-black-900 px-18 py-2 m-3 flex flex-col justify-center content-center overflow-hidden"
      >
          <h2 class="tutorial-title pb-3 px-8 z-10 w-full block text-center">{{ item.node.title }}</h2>
          <p class="tutorial-excerpt px-10 z-10 w-full block text-center">{{ item.node.excerpt }}</p>
          <g-image :src="item.node.featured_image" class="bgimg absolute top-50 left-0 z-0" />
        
      </g-link>
    </div>
      
  </Layout>
</template>

<page-query>
query Tutorial {
	posts: allTutorialPost {
    edges {
      node {
        id
        path
        title
        excerpt
        featured_image
      }
    }
  }
}
</page-query>

<script>
import PageHeader from "@/components/PageHeader"
export default {
  components: {
    PageHeader
  },
  computed: {
    style() {
      return 'background-image: url(' + item.node.featured_image + ') cover no-repeat';
    }
  }
}
</script>

<style scoped>
.container.tutorial {
  /* max-width: 720px; */
}
.tutorial-hero {
  padding: 4rem 0;
  color: var(--color-base-1);
}
.tutorial-header {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
}
.tutorial-post {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  width: 25%;
  height: 15rem;
  padding: 2rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
  border-radius: 2px;
  border-radius: 4px;
}
.tutorial-post > * {
  transition: all 0.5s ease;
}
.tutorial-post:hover {
  /* background-color: var(--color-base-1); */
}
.tutorial-post:hover > * {
  transform: translateZ(4rem) scale3d(1.1,1.1,1.1);
  perspective: 1000;
}
.tutorial-post:hover .bgimg {
  opacity: 0.5;
}
.tutorial-post h1,
.tutorial-post h2 {
  line-height: 1;
}
.bgimg {
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
  opacity: 0.2;
}
.tutorial-title {
  font-size: 30px;
  font-family: DomaineItalic;
  color: var(--color-contrast);
}
.tutorial-excerpt {
  font-family: Calibre;
  font-weight: normal;
  font-size: 0.9rem;
  line-height: 1.2;
  color: var(--color-contrast-1);
}

.tutorial-step {
  background: rgba(11,11,11,0.2);
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 50px 0;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  padding: 2rem;
}

/* probably should remove if works */
.tutorial-step .count {
  background: #151515;
  position: absolute;
  top: -25px;
  left: -25px;
  font-family: Domaine;
  font-size: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  text-align: center;
  line-height: 54px;
}
.tutorial-step img {
    width: auto !important;
  max-height: 550px !important;
  border-radius: 5px;
}
.tutorial-step p {
  text-align: left;
  width: 100%;
  padding: 1rem 0 0 3rem;
}

@media (min-width: 560px) {
  .tutorial-post {
    /* padding: 3rem 2rem; */
  }
}

@media (min-width: 860px) {
  .tutorial-post {
    /* padding: 5rem 2rem; */
  }
}
</style>
