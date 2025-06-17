<template>
    <div class="">
        <img ref="image" :src="src"/>
    </div>
</template>

<script setup>
import Cropper from 'cropperjs'
import {ref, onMounted, useTemplateRef } from 'vue'
const src = ref('')
const cropper = ref({})
const destination = ref({})
const image = ref({})

onMounted(() => {
    
    image.value = useTemplateRef('image');
    cropper.value = new Cropper(image.value, {
        zoomable: false,
        scalable: false,
        aspectRatio: 1
    })
    console.log(image.value)
})
</script>

<style></style>