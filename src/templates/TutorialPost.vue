<template>
  <Layout>
    <div class="tutorial">
      <div class="container tutorial-container">

        <div class="tutorial-header pt-10">
          <img v-src="$page.post.featured_image" />
          <h1 v-html="$page.post.title" class="tutorial-title" />
          <div class="tutorial-meta">
            <div class="tutorial-author">
              <span class="label">Author</span>
              <span class="author-name" v-text="$page.post.author" />
            </div>
            <div class="tutorial-date">
              <span class="label">Date</span>
              <div v-text="$page.post.date"/>
            </div>
            <div class="tutorial-time">
              <span class="label">Time</span>
              <span>{{ $page.post.timeToRead }} min read</span>
            </div>
          </div>          
        </div>

        <TutorialContent :content="$page.post.content" />

      </div>
    </div>
  </Layout>
</template>

<page-query>
query TutorialPost ($path: String!) {
  post: tutorialPost (path: $path) {
    title
    author
    date (format: "D. MMMM YYYY")
    timeToRead
    content
    featured_image
  }
}
</page-query>

<script>
import TutorialContent from "@/components/TutorialContent"

export default {
  components: {
    TutorialContent
  },
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style scoped>
.tutorial-container {
  /* max-width: 840px; */
}
.tutorial-header {
  padding: 10rem 0 4rem 0;
}
.tutorial-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.tutorial-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.tutorial-meta > div {
  margin-right: 4rem;
}
.tutorial-meta > div:last-of-type {
  margin: 0;
}
</style>
