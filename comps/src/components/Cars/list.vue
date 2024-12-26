<template>
    <div>
        <ul>
            <li v-for="car in cars" :key="car.model">
                <span>{{ car.brand }}</span>: {{ car.model }}
            </li>
        </ul>
        <button @click="updateCar">Update a Car from Child</button>
    </div>
</template>

<script setup>
import { inject } from 'vue';

   const {cars, updateCar}= inject('cars')
</script>