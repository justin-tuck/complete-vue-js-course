<template>
    <div>
        <app-header />
        <div class="container">
            <Profile 
                :alsoKnownAs="data.name"
                :userLastName="data.lastName"
                :userAge="data.age"
                notReactiveLastName="Tuck"
                :userParents="data.parents"
                @update-lastName="data.lastName = $event"
                @say-hello="alertHello"
                :updateAge="updateAge"
                />
            <button @click="updateName">Update Known As</button>
        </div>
    </div>
     
     
</template>

<script setup>
    import  Profile from './components/header_footer/User/Profile.vue';
    import {reactive} from 'vue';

    const data = reactive({
        name: 'Tumbling',
        lastName: 'Tuck',
        age: 28,
        parents: {
            father: 'Paul',
            mother: 'Kim'
        }
    })

    const updateName = () => {
        data.name = 'Golden'
    }
    const alertHello = () => {
        alert('Hello!')
    }
    const updateAge = (value) => {
        data.age = value;
    }
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