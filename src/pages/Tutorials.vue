<template>
  <Layout>

    <div class="container">
      <div class="tutorial-hero">
        <h1 class="tutorial-header">
          some sort of heading here.
        </h1>
      </div>
    </div>

    <g-link 
      :to="item.node.path"
      v-for="item in $page.posts.edges" 
      :key="item.node.id"
      class="tutorial-post"
    >
      <div class="container tutorial">
        <h2 class="tutorial-title">{{ item.node.title }}</h2>
        <p class="tutorial-excerpt">{{ item.node.excerpt }}</p>
      </div>
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
      }
    }
  }
}
</page-query>

<script>
export default {
}
</script>

<style scoped>
.container.tutorial {
  max-width: 720px;
}
.tutorial-hero {
  padding: 4rem 0;
  text-align: center;
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
  transform: translateX(4rem);
}
.tutorial-post h1,
.tutorial-post h2 {
  margin: 0;
  padding: 0;
}
.tutorial-title {
  font-size: 2rem;
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
