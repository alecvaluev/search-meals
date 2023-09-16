<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import  useStore  from '../store/store'
import MealList from '../components/MealList.vue';

const store = useStore()
const keyword = ref('')
const meals = computed(() => store.searchedMeals)
const route = useRoute()

watch(keyword, (newKeyword) => {
    store.searchMeal(keyword.value)
})

onMounted(() => {
    keyword.value  = route.params?.name || ''
    store.searchMeal('chicken')
})
</script>

<template>
    <div class="p-8">
        <input 
            type="text" 
            placeholder="Search for meals" 
            class="rounded border-2 border-gray-200 w-full"
            v-model="keyword"
            />
    </div>
    <MealList :meals="meals" />
</template>