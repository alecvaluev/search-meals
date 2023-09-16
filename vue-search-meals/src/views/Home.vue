<script setup>
import { ref, onMounted } from 'vue'
import axiosClient from '../axiosClient'

const screenStyle = "hover:font-bold text-white text-xl hover:text-5xl hover:text-amber-300 flex items-center justify-center w-full hover:md:w-[150vw] ease-in-out duration-300 grayscale-[40%] hover:filter-none min-h-[40vh]"
</script>

<template>
    <div class="flex flex-col md:flex-row w-full sm:min-h-[90vh]">
        <router-link :to="{name: 'byName'}" id='one' :class="screenStyle">
            <div>Meals</div>
        </router-link>
        <router-link :to="{name: 'byLetter'}" id='two' :class="screenStyle">
            <div>Letter Search</div>
        </router-link>
        <router-link :to="{name: 'ingredients'}" id='three' :class="screenStyle">
            <p class="shadow">Ingredients</p>
        </router-link>
    </div>
</template>