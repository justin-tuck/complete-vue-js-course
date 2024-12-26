<template>
    <div>
        <app-header />
        <div class="container">
            <Directives />
        </div>
      
    </div>
     
     
</template>

<script setup>
  import Directives from './components/Directives/index.vue';

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