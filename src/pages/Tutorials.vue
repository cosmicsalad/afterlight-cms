<template>
  <Layout>

    <PageHeader
      title="Tutorials."
      subtitle="Educational posts about how to make the most of Afterlight's powerful tools and content."
    />

    <g-link 
      :to="item.node.path"
      v-for="item in $page.posts.edges" 
      :key="item.node.id"
      class="tutorial-post overflow-hidden text-center bg-purple-600"
    >
        <h2 class="tutorial-title">{{ item.node.title }}</h2>
        <p class="tutorial-excerpt">{{ item.node.excerpt }}</p>
        <!-- <g-image :src="item.node.featured_image" class="absolute top-0 left-0 z-50 w-full h-full" /> -->
        <!-- <div class="w-full h-full absolute top-50 left-50 z-50 bg-fixed bg-cover bg-red-500"></div> -->
      
    </g-link>
      
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
  display: block;
  padding: 2rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
}
.tutorial-post > * {
  transition: transform 0.5s ease;
}
.tutorial-post:hover {
  background-color: var(--color-base-1);
}
.tutorial-post:hover > * {
  transform: translateZ(4rem) scale3d(1.1,1.1,1.1);
}
.tutorial-post h1,
.tutorial-post h2 {
  margin: 0;
  padding: 0;
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
    padding: 3rem 0;
  }
}

@media (min-width: 860px) {
  .tutorial-post {
    padding: 5rem 0;
  }
}
</style>
