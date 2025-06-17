<template>
    <div v-if="auth.isAuthenticated">
        <h1>Welcome {{ auth.getUser }}</h1>
        <v-btn @click="auth.logout">Logout</v-btn>
    </div>
    <div v-else>
   <SignupPage />
   </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
const auth = useAuthStore()
</script>