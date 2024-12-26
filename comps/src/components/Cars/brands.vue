<template>
    <div class="car_brands">
        <h3>Car brands</h3>
        <slot name="brands"></slot>
        <slot name="other"></slot>
        <slot></slot>
    </div>
</template>

<style scoped>
    .car_brands {
        border: 1px solid #2196F3;
        padding: 10px 20px; 
    }
</style>