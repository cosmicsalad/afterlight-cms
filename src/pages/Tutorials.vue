<template>
  <Layout>

    <PageHeader
      title="Tutorials."
      subtitle="Educational content about how to be super cool and how not to suck at taking really cool photos because you're using Afterlight and it's impossible if you use Afterlight that's definitely not true."
    />

    <div class="flex flew-row flex-wrap justify-center content-center">
      <g-link 
        :to="item.node.path"
        v-for="item in $page.posts.edges" 
        :key="item.node.id"
        class="tutorial-post relative text-center bg-black-900 px-18 py-2 m-5 flex flex-col justify-center content-center overflow-hidden"
      >
          <h2 class="tutorial-title pb-3 px-8 z-10 w-full block">{{ item.node.title }}</h2>
          <p class="tutorial-excerpt px-10 z-10 w-full block">{{ item.node.excerpt }}</p>
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
  align-items: center;
  overflow: hidden;
  width: 30rem;
  height: 20rem;
  padding: 2rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
  border-radius: 7px;
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
  opacity: 0.1;
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
  font-size: 2.5rem;
  color: var(--color-contrast);
}
.tutorial-excerpt {
  color: var(--color-contrast-1);
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
