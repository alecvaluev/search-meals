<script setup>
import { computed, onMounted } from 'vue'
import useStore  from '../store/store'
import { useRoute } from 'vue-router'
import MealList from '../components/MealList.vue';

const store = useStore()
const route = useRoute()

const meals = computed(() => store.mealsByIngredient)

onMounted(() => {
    store.searchMealByIngredient(route.params.ingredient)
})
</script>

<template>
    <MealList :meals="meals" />
</template>