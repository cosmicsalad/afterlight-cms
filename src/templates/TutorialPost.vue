<template>
  <Layout class="single-tutorial">
    <div class="tutorial">
      <div class="tutorial-container">

        <div class="tutorial-header pt-10">
          <div class="container">
            <div class="tutorial-details">
              <h1 v-html="$page.post.title" class="tutorial-title" />
              <div class="tutorial-meta">
                <!-- <div class="tutorial-author">
                  <span class="label">Author</span>
                  <span class="author-name" v-text="$page.post.author" />
                </div> -->
                <div class="tutorial-date">
                  <span class="label">Date</span>
                  <div class="detail" v-text="$page.post.date"/>
                </div>
                <div class="tutorial-time">
                  <span class="label">Time</span>
                  <span class="detail">{{ $page.post.timeToRead }} min read</span>
                </div>
              </div>
            </div>
          </div>

          <div class="tutorial-banner">
            <img :src="$page.post.featured_image" />
          </div>     
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

<style scoped lang="scss">

.tutorial-step {
  background: red;
}

.tutorial-container {
  // margin-top: 150px;
}

.tutorial-header {
  // overflow: hidden;
  padding: 0;
  position: relative;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 550px;
  margin-bottom: 60px;
  .container {
    height: inherit;
  }
  .tutorial-details {
    display: inline-block;
    position: relative;
    top: 50%;
    left: 0;
    transform: translate3d(0,-50%,0);
    z-index: 9999;
    background: rgba(0,0,0,0.9);
    padding: 2.5em 4em;
    border-radius: 5px;
    max-width: 650px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.9);
  }
  .tutorial-banner {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    img {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
  .tutorial-title {
    font-size: 3.5rem;
    margin: 0 0 25px 0;
    padding: 0;
    line-height: 1.2;
  }
  .tutorial-meta {
    display: flex;
    flex-wrap: wrap;
    font-family: Calibre, sans-serif;
    font-weight: 200;
    font-size: 1rem;
  }
  .tutorial-date .detail, .tutorial-time .detail {
    color: #888;
  }
  .tutorial-meta > div {
    margin-right: 4rem;
  }
  .tutorial-meta > div:last-of-type {
    margin: 0;
  }
}

</style>
