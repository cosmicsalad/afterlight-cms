<template>
    <div class="py-12 text-center">
        <h1 class="p-0 text-6xl mb-8">{{ title }}</h1>
        <div class="w-5/6 mx-auto text-3xl leading-tight mb-5">{{ subtitle }}</div>
    </div>
</template>

<script>
export default {
    props: ['title', 'subtitle']
}
</script>