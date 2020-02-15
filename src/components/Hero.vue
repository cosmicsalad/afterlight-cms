<template>
    <div class="text-center w-full max-w-full my-0 mx-auto relative overflow-hidden h-screen mb-20 bg-purple-700">
      <div class="hero-intro rounded-lg w-full">
        <PageHeader 
          title="Filter. Texture. Create."
          subtitle="The only iOS Photo Editor you need."
        />
      </div>
      <!-- <img 
          src="../../static/herobg.jpg"
          class="herobg"
      /> -->
    </div>
</template>

<script>
import PageHeader from "@/components/PageHeader"

export default {
  components: {
    PageHeader
  },
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
</script>

<style>

.hero:after {
  display: block;
  content: "";
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.75);
}

.hero-intro {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9;
  transform: translate3d(-50%,-50%,0);
}

.herobg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.hero-title {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0 0 2rem 0;
}
.hero-title p,
.hero-subtitle p {
    margin: 0;
    padding: 0;
}
.hero-subtitle {
    font-size: 1.15em;
    font-weight: 400;
    line-height: 1.68;
    padding: 0;
    margin: 0;
    opacity: 0.6;
}
</style>
