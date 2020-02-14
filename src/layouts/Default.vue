<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
      <div class="view">
        <main class="main">
          <slot/>
        </main>
      </div>
  </div>
</template>

<script>

</script>


<style>

</style>
