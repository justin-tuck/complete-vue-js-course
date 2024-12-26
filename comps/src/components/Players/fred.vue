<template>
    <h3>Fred is on</h3>
</template>

<script setup>
    import { onActivated, onDeactivated, onUnmounted } from 'vue';

    onUnmounted(()=>{
        console.log('Fred  Unmounted')
    })

    onActivated(()=>{
        console.log('Fred  onActivated')
    })
    onDeactivated(()=>{
        console.log('Fred  onDeactivated')
    })
</script>