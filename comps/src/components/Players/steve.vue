<template>
    <h3>Steve is on</h3>
    <Teleport to="#dialog_here">
        <Modal />
    </Teleport>

</template>


<script setup>
    import Modal from '../Utils/modal.vue';
    import { onUnmounted } from 'vue';
    onUnmounted(()=>{
        console.log('Steve  Unmounted');
    })

   
</script>