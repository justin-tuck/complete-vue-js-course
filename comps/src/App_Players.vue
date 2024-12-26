<template>
    <div>
        <app-header />
        <div class="container">
            <button @click="activeComp = Mike">Mike</button>
            <button @click="activeComp = Steve">Steve</button>
            <button @click="activeComp = Fred">Fred</button>

            <keep-alive include="mike,fred" exclude="steve">
                <component :is="activeComp"></component>
            </keep-alive>
        </div>
       <div id="dialog_here"></div>
    </div>
     
     
</template>

<script setup>
    import Mike from './components/Players/mike.vue';
    import Steve from './components/Players/steve.vue';
    import Fred from './components/Players/fred.vue';

    import { shallowRef } from 'vue';

    const activeComp = shallowRef(Mike);

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