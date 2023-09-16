<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Button from '../components/Button.vue';
import { axiosClient, GET_A_MEAL_URL } from '../axiosClient'

const route = useRoute()
const meal =  ref({})

onMounted(() => {
    axiosClient.get(`${GET_A_MEAL_URL}${route.params.id}`)
            .then(({data}) => {
                console.log('meal store', data)
                meal.value = data.meals[0]
            })
            .catch((err) => meal.value = {})
})
</script>

<template>
    <div class="md:w-[800px] mx-auto h-full py-10">
    <div class=" h-full bg-white/60 backdrop-blur-sm border border-1 border-white/50 rounded-3xl">
        <h1 class="text-5xl font-bold p-5 pt-10">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full rounded"/>
        <div class="m-10">
            <div class="grid grid-cols-1 sm:grid-cols-3">
            <div>
                <span class="font-bold text-xl">Category:</span> {{ meal.strCategory }}
            </div>
            <div>
                <span class="font-bold text-xl">Area:</span> {{ meal.strArea }}
            </div>
            <div v-if="meal.strTags">
                <span class="font-bold text-xl">Tags:</span> {{ meal.strTags }}
            </div>
        </div>

        <div class="my-7">
            {{ meal.strInstructions }}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 py-4">
            <div>
                <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
                <ul>
                    <template v-for="(el, i) of new Array(20)">
                        <li v-if="meal[`strIngredient${i + 1}`]">
                            {{i + 1}}. {{ meal[`strIngredient${i + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-3">Measures</h2>
                <ul>
                    <template v-for="(el, i) of new Array(20)">
                        <li v-if="meal[`strMeasure${i + 1}`]">
                            {{i + 1 }}. {{ meal[`strMeasure${i + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div class="mt-8">
                <Button :href="meal.strYoutube">Go to Youtube</Button>
                <a
                    :href="meal.strSource"
                    target="_blank"
                    class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                    >View Original Source</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>