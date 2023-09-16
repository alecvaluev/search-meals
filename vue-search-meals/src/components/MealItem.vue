<script setup>
import Button from './Button.vue';

const props = defineProps({
    meal: Object
})
</script>

<template>
    <div class="bg-white/60 backdrop-blur-sm border border-1 border-white/50 rounded-3xl shadow rounded-xl">
        <router-link :to="{name: 'mealDetails', params: { id: meal.idMeal}}">
            <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl w-full h-48 object-cover"/>
        </router-link>
        <div class="p-3">
            <h3 class="font-semibold text-xl">{{ meal.strMeal }}</h3>
            <p class="line-clamp-4 my-2">{{ meal.strInstructions}}</p>
            <div class="flex items-center justify-between mt-4">
                <Button :href="meal.strYoutube" >Youtube</Button>
            </div>
        </div>
    </div>
</template>