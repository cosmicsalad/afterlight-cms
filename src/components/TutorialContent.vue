<template>
    <div 
        class="tutorial-content"
        v-html="content"
    />
</template>

<script>
export default {
    props: {
        content: String
    }
}
</script>

<style>
p {
    line-height: 1.75;
    font-size: 1.15rem;
    padding: 0.75rem 0;
}
h1 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
}
h2 {
    font-size: 2rem;
}
h3 {
    font-size: 1.5rem;
}
h4, h5, h6 {
    font-size: 1.15rem;
}
p img {
    padding: 60px 0;
}
video {
    max-height: 450px;
    margin: 1rem 0;
    background: #111;
    padding: 20px;
    border-radius: 10px;
    width: auto;
}
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
  max-height: 550px !important;
  border-radius: 5px;
  // box-shadow: 0 5px 10px 10px rgba(0,0,0,1.0);
}
.tutorial-step p {
  text-align: left;
  width: 100%;
  padding: 1rem 0 0 3rem;
}
</style>
