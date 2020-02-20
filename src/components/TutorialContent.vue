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
    line-height: 1.5;
    font-size: 1.15rem;
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
    padding: 2rem 0;
}
</style>
