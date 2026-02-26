<script setup lang="ts">
import { ScaleLoader } from "vue3-spinner";
defineProps<{
    overlay: boolean;
}>();
</script>
<template>
    <v-overlay
        opacity="80%"
        persistent
        :model-value="overlay"
        class="justify-center align-center"
    >
        <ScaleLoader
            :loading="overlay"
            color="var(--color-app-primary-dark)"
            height="80px"
            width="30px"
        />
    </v-overlay>
</template>
