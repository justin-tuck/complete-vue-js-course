<template>
    <div>
        <app-header />
        <div class="container">
            <Cars />
            <hr />
            <CarBrands>
                Content At the top <br />
                <template v-slot:brands>
                    <ul>
                        <li v-for="(brand, index) in brands" :key="index">
                            {{ brand }}
                        </li>
                    </ul>
                </template>
                <template v-slot:other>
                    <div>Some other content</div>
                </template>
                <strong>Default Slot Bottom</strong>
            </CarBrands>
          
        </div>
       
    </div>
     
     
</template>

<script setup>
    import { reactive, provide } from 'vue';
    import Cars from './components/Cars/index.vue';
    import CarBrands from './components/Cars/brands.vue';

    const brands = reactive(['Mazda', 'Honda', 'Renault'])
    const cars = reactive([
        {model: 'F150', brand: 'Ford'},
        { model: 'Civic', brand: 'Honda' },
        {model: 'Corolla', brand: 'Toyota'}
        ])

    const updateCar = () => {
        cars[0].model = 'Mustang'
    }
    provide('cars', {cars, updateCar})
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