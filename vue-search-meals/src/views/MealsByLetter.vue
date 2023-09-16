<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import useStore  from '../store/store'
import { useRoute } from 'vue-router'
import MealList from '../components/MealList.vue';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const store = useStore()
const route = useRoute()

const meals = computed(() => store.mealsByLetter)
const pageLetter = ref('')

function updateMeal(newLetter){
    store.searchMealsByLetter(newLetter)
    pageLetter.value = newLetter
}
watch(route, ()=>{
    updateMeal(route.params.letter)
})
onMounted(() => {
    updateMeal(route.params?.letter || 'A')
})
</script>

<template>
    <div class="flex justify-center gap-4 py-7 text-xl font-medium">
        <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter in letters" :class="(letter == pageLetter)? 'font-bold underline' : ''">{{ letter }}</router-link>
    </div>
    <MealList :meals="meals" />
</template>