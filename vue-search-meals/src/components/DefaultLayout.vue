<script setup>
import Navbar from './Navbar.vue'

</script>

<template>
    <Navbar/>
    
    <main class="bg-gradient-to-br from-stone-50 to-amber-200 min-h-[90vh]">
        <router-view />
    </main>
</template>