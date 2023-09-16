<script setup>
import MealItem from './MealItem.vue';


const props = defineProps({
    meals: Array
})
</script>

<template>
    <div v-if="meals" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-[1100px]:grid-cols-4 gap-5 md:gap-7 p-8">
        <div v-for="meal of meals" :key="meal.idMeal">
            <MealItem :meal="meal"/>
        </div>
    </div>
    <div v-else class="flex items-center justify-center h-[60vh]">
        <div class="flex flex-col p-10 bg-white/60 backdrop-blur-sm border border-1 border-white/50 rounded-3xl">
            <p class="font-bold text-xl">There are no meals <span class="underline">at this</span> moment, sorry :(</p>
            <p class="font-bold text-xl">We'll try to add more</p>
            <router-link 
                to="/"
                class="border rounded-md border-black border-2 px-3 py-3 font-bold hover:bg-amber-500 hover:text-white hover:border-transparent ease-in duration-300 mt-5">
                Go to Home
            </router-link>
        </div>
    </div>
</template>