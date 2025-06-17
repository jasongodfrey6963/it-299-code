<template>
    
    <v-container class="fill-height main-con" max-width="900">
        <v-row>
            <v-col cols="12">
                <v-form @submit.prevent="handleLogin">
                    <v-container class="form">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="userName" placeholder="Username" required></v-text-field>
                                <v-text-field v-model="password" type="password" placeholder="Password" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-btn block size="x-large" class="my-2 bg-success" type="submit">LOGIN</v-btn>
                                <v-btn block size="x-large" class="my-2 bg-blue" to="/signup">SIGN UP</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = useAuthStore()
const userName = defineModel('userName')
const password = defineModel('password')

const handleLogin = async () => {
  console.log(userName.value, password.value)
    await auth.login( userName.value, password.value)
    router.push('/dashboard')
  
}
</script>

<style>

</style>