<template>
    <v-card text="">
        <div v-if="submitted"><h1 class="bg-green ms-2 py-1 px-2 rounded">Request Submitted</h1></div>
        <v-card-title><h1>Welcome, {{ auth.getfirstName }}!</h1></v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field v-model="formText" label="Make a new request!!"></v-text-field>
            </v-form>
        </v-card-text>
        <v-btn class="bg-green ma-4" @click="makeRequest" text='Submit Request'></v-btn>
    </v-card>

<v-btn class="bg-red ma-4" @click="handleLogout">Logout</v-btn>

</template>

<script setup>
import {useAuthStore} from '@/stores/auth'
import { useRouter} from 'vue-router'
import axios from 'axios'
import { ref, onMounted } from 'vue'

const jobs = ref([])
const router = useRouter()
const auth = useAuthStore()
const submitted = ref(Boolean)
const formText = defineModel('formText')
submitted.value = false


const handleLogout = () => {
    auth.logout()
    router.push('/login')
}

const makeRequest = async () => {
    try {

        await axios.post('http://localhost:3001/jobs', {userId: auth.getId, text: formText.value})
    } catch (error) {

    } finally {
        submitted.value = true
        
    }
}

onMounted(async () => {
    try{ 
        
        id.value = auth.getId
        console.log(id)
        const res = await axios.get(`http://localhost:3001/jobs/user`, {userId: id}).then(response => (jobs.value = response.data))
    } catch (error) {

    }
})

</script>

<style>

</style>