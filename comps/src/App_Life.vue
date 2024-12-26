<template>
    <div>
        <app-header />
        <div class="container">
          <Life v-if="showIt"/>
          <hr />
          <button @click="showIt = !showIt">Toggle</button>
        </div>
       
    </div>
     
     
</template>

<script setup>
    import Life from '@/components/Life/index.vue';
    import { ref } from 'vue';

    const showIt = ref(true);


</script>

<style>
    body {
        padding:  0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
    .container {
        min-height: 84vh;
        box-sizing: border-box;
        padding: 20px;
        
    }
</style>