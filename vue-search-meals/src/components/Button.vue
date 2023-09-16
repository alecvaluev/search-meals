<script setup>
    const props = defineProps({
        href: String,
    })
</script>

<template>
    <a :href="href" target="_blank" class="px-3 py-2 rounded border border-red-600 border-2 hover:bg-red-600 hover:text-white transition-colors">
        <slot></slot>
    </a>
</template>