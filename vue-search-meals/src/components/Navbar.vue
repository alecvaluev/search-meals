<script setup>
const navRoutes = [
    {
        to: 'byName',
        text: 'Search Meal'
    },
    {
        to: 'byLetter',
        text: 'By Letter'
    },
    {
        to: 'ingredients',
        text: 'By Ingredients'
    },
]
</script>

<template>
    <nav class="bg-white shadow h-fit md:h-16 flex flex-col md:flex-row justify-between">
        <router-link to="/" class="inline-flex items-center px-5 h-full font-bold text-2xl">> Home</router-link>
        
        <div class="flex flex-col md:flex-row items-center gap-1">
            <router-link 
                :to="{name: link.to}"
                v-for="link of navRoutes" 
                class="w-full md:w-auto py-3 md:py-1 inline-flex items-center justify-center px-5 h-full hover:bg-amber-200 text-md font-medium ease-in-out duration-300">{{ link.text }}</router-link>
        </div> 
    </nav>
</template>