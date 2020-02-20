<template>
    <div class="py-12 text-center">
        <h1 class="p-0 text-6xl mb-7">{{ title }}</h1>
        <div class="w-1/2 leading-relaxed mx-auto text-2xl leading-tight mb-5 opacity-50">{{ subtitle }}</div>
    </div>
</template>

<script>
export default {
    props: ['title', 'subtitle']
}
</script>