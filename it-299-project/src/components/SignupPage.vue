<script setup>
import { useAuthStore } from '@/stores/auth'
const auth = useAuthStore()

const firstName = defineModel('firstName')
const lastName = defineModel('lastName')
const userName = defineModel('userName')
const email = defineModel('email')
const password = defineModel('password')

const handleSignup = async () => {
  
  //link the register logic here
  await auth.register(firstName.value, lastName.value, userName.value, email.value, password.value )
  console.log(firstName.value, lastName.value, userName.value, email.value, password.value)
}
</script>

<template>
    <v-container v-if="auth.isAuthenticated">
        Welcome {{ auth.getUser }}
    </v-container>
    <v-container v-else class="fill-height main-con" max-width="900">
        <v-row>
            <v-col cols="12">
                <v-form @submit.prevent="handleSignup">
                    <v-container class="form">
                        <v-row>
                            <v-col  cols="6">
                                <v-text-field v-model="firstName" label="First Name"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="lastName" label="Last Name"></v-text-field>
                            </v-col>
                            <v-col cols="12">

                                <v-text-field v-model="userName" label="Username" required></v-text-field>
                                <v-text-field v-model="email" label="Email" required></v-text-field>
                                <v-text-field v-model="password" type="password" label="Password" required></v-text-field>
                                <v-text-field type="password" label="Confirm Password" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                
                                <v-btn block size="x-large" class="my-2 bg-blue" type="submit">SIGN UP</v-btn>
                                <v-btn block size="x-large" class="my-2 bg-success" to="/login">Login</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>



<style>

</style>