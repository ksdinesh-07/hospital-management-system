<template>
  <div class="stats-card">
    <h3>{{title}}</h3>
    <h1>{{value}}</h1>
  </div>
</template>

<script setup>

defineProps({
  title:String,
  value:[String,Number]
})

</script>

<style scoped>

.stats-card{
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width:220px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,.1);
}

</style>