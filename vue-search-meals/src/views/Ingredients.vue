<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import useStore from '../store/store'
const store = useStore()
const ingredients = computed(() => store.ingredients)
const filteredIngredients = ref([])
const searchIngredient = ref("")

watch(searchIngredient, () => {
    if(searchIngredient != ""){
        const word = searchIngredient.value.toLowerCase()
        filteredIngredients.value = ingredients.value.filter(item => item.strIngredient.toLowerCase().includes(word))
        console.log('f', filteredIngredients.value) 
    }
    else {
        filteredIngredients.value = ingredients.value
    }
})
watch(ingredients, () => {
    filteredIngredients.value = ingredients.value
})
onMounted(() => {
    store.getAllIngredients() 
})
</script>

<template>
    <div class="p-8">
        <input 
            type="text" 
            placeholder="Search for an ingredient" 
            class="rounded border-2 border-gray-200 w-full"
            v-model="searchIngredient"
            />
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-[1100px]:grid-cols-4 gap-5 md:gap-7 p-8">
            <router-link 
                :to="{
                    name: 'byIngredients', 
                    params: {
                        ingredient: ingredient.strIngredient
                        }
                    }"
                    v-for="ingredient of filteredIngredients" :key="ingredient.idIngredient"
                    class="bg-white rounded p-4 mb-2 shadow w-[30h]"
                    >
                    <div class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</div>    
            </router-link>
        </div>
    </div>
</template>