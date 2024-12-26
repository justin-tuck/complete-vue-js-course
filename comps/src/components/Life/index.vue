<template>
    <h1>Life</h1>
    {{ text }}
    <button @click="text = 'Changed... Text!'"> Change Text</button>
</template>

<script setup>
    import { onBeforeMount, onMounted, ref, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
    
    const text = ref('Some Text')

    onBeforeMount(()=>{
        console.log('1-On Before Mount')
    })

    onMounted(()=>{
        console.log('2-On Mount')
    })

    onBeforeUpdate(()=>{
        console.log('x-onBeforeUpdate')
    })

    onUpdated(()=>{
        console.log('x-onUpdated')
    })

    onBeforeUnmount(()=>{
        console.log('a-onBeforeUnmount')
    })

    onUnmounted(()=>{
        console.log('b-onUnmounted')
    })
</script>