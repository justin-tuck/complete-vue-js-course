<template>
    <h3>Mike is on</h3>
</template>

<script setup>
    import { onActivated, onDeactivated, onUnmounted } from 'vue';

    onUnmounted(()=>{
        console.log('Mike  Unmounted')
    })

    onActivated(()=>{
        console.log('Mike  onActivated')
    })
    onDeactivated(()=>{
        console.log('Mike  onDeactivated')
    })
</script>