<template>
    <v-card>
        <v-card-title><h1>Welcome, {{ auth.getfirstName }}!</h1></v-card-title>
         <v-card-title><h2>Current Jobs:</h2></v-card-title>
        <v-card-text>
            
            <div v-for="job in jobs">
                <v-card>
                    <v-card-title>{{job.user}}</v-card-title>
                    <v-card-text>{{job.text}}</v-card-text>
                </v-card>
            </div>
        </v-card-text>
        
    </v-card>

<v-btn class="bg-red ma-1" @click="handleLogout">Logout</v-btn>

</template>

<script setup>
import {useAuthStore} from '@/stores/auth'
import { useRouter} from 'vue-router'
import axios from 'axios'
import { ref, onMounted } from 'vue'

const jobs = ref([])
const router = useRouter()
const auth = useAuthStore()
const id = ref('')



const handleLogout = () => {
    auth.logout()
    router.push('/login')
}

const makeRequest = async () => {
    try {
        await axios.post('http://localhost:3001/jobs', {userId: userId, text,text})
    } catch (error) {

    }
}

onMounted(async () => {
    try{ 
        
        id.value = auth.getId
        console.log(id)
        const res = await axios.get(`http://localhost:3001/jobs/`).then(response => (jobs.value = response.data))
    } catch (error) {

    }
})

</script>

<style>

</style>