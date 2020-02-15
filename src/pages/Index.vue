<template>
  <Layout>
    <div class="home">
      <Hero />
      <div class="container">
        <ProjectsGrid :projects="$page.projects.edges" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
      }
    }
  },
  tutorials: allTutorialPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import ProjectsGrid from "@/components/ProjectsGrid"
import LatestTutorials from "@/components/LatestTutorials"

export default {
  components: {
    Hero,
    ProjectsGrid,
    LatestTutorials
  }
}
</script>