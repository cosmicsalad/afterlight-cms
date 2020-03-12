<template>
  <Layout>
    <div class="tutorial">
      <div class="tutorial-container">

        <div class="container">
          <div class="tutorial-header pt-10">
            <h1 v-html="$page.post.title" class="tutorial-title" />
            <div class="tutorial-meta">
              <!-- <div class="tutorial-author">
                <span class="label">Author</span>
                <span class="author-name" v-text="$page.post.author" />
              </div> -->
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
        </div>

        <div class="tutorial-banner">
          <img :src="$page.post.featured_image" />
        </div>

        <div class="container">
          <TutorialContent :content="$page.post.content" />
        </div>

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
.tutorial-banner {
  display: block;
  width: 100%;
  height: 550px;
  max-height: 550px;
  overflow: hidden;
  position: relative;
  margin-bottom: 50px;
}

.tutorial-banner img {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.tutorial-container {
  /* max-width: 840px; */
}
.tutorial-header {
  padding: 10rem 0 4rem 0;
}
.tutorial-title {
  font-size: 4rem;
  margin: 0 0 1rem 0;
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
