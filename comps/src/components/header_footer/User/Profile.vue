<template>
    <div class="user_profile">
        <h3>User Information</h3>
        <ul>
            <li><span>Name:</span> {{  name }}</li>
            <li><span>Last Name:</span> {{ userLastName }}</li>
            <li><span>Known As:</span> {{ alsoKnownAs }}</li>
            <li><span>Age:</span> {{ userAge }}</li>
           
        </ul>
        <h3>Parents</h3>
        <ul>
            <li v-for="(value, key, index) in userParents" :key="index">
                <span> {{  key  }}</span> {{ value }}
            </li>
        </ul>
        <hr />
        <button @click="emit('update-lastName',  'Kurtz-Tuck')">Change Last Name from Child</button>
        <button @click="sayHello">Say Hello!</button>
        <button @click="updateAge('37')">Update Age</button>
    </div>
</template>

<script setup>
    const emit = defineEmits(['update-lastName', 'say-hello'])
    const props = defineProps({
        alsoKnownAs: {
            type:String,
            required: true,
            default:'N/A'
        }, 
        userLastName: {
            type: String,
            validator(value) {
               return value === 'Tuck'
            }
        }, 
        userAge: [Number, String], 
        userParents: Object,
        updateAge: Function
    });
    const name = 'Justin'
    const sayHello = () => {
        emit('say-hello')
    }
    const updateLastName = () => {
     
       
      
    }

</script>
<style scoped>
    span {
        font-weight: 800;
    }
    .user_profile {
        border: 1px solid #2196F3;
        padding: 10px;
    }
</style>