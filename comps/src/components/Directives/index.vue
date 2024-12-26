<template>
    <div v-awesome:red.big="text">    </div>
    <!-- <div v-awesome:blue.small="text">    </div>
    <div v-awesome="text"> -->

   <button @click="text = 'something else! ok!'">Trigger Update</button>

   <hr />
   <div v-user-lastName="lastName"></div>
</template>

<script setup>
import {   ref } from 'vue';

    const lastName = ref('Tuck')
    const text = ref('some text')
    
    const vUserLastName = {
        beforeMount(el, binding) {
            el.innerHTML = binding.value;
            el.style.color = binding.arg ? binding.arg : 'green';
        }
    }
</script>