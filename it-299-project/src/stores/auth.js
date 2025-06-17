import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null,
        firstName: null,
        lastName: null,
        userId: null,
        loading: false,
        error: null 
    }),
    persist: true,
    getters: {
        isAuthenticated: (state) => !!state.token,
        getUser: (state) => state.user,
        getfirstName: (state) => state.firstName,
        getlastName: (state) => state.lastName,
        getId: (state) => state.userId
    },

    actions: {
        async register(firstName, lastName, userName, email, password) {
             this.loading = true
            this.error = null
            try {
                const res = await axios.post('http://localhost:3001/clients', { firstName, lastName, userName, email, password })
                this.token = res.data.token
                this.user = res.data.userName
                this.firstName = res.data.firstName
                this.lastName = res.data.lastName
                this.userId = res.data._id
                axios.defaults.headers.commmon['Authorization'] = `Bearer ${this.token}`
            } catch (error) {
                
            } finally {
                this.loading = false
            }
        },
        async login(userName, password) {
            this.loading = true
            this.error = null
            try {
                const res = await axios.post('http://localhost:3001/clients/login', {userName: userName, password: password})
                this.token = res.data.token
                this.user = res.data.userName
                this.firstName = res.data.firstName
                this.lastName = res.data.lastName
                this.userId = res.data._id
                axios.defaults.headers.commmon['Authorization'] = `Bearer ${this.token}`
            } catch (error) {
                
            } finally {
                this.loading = false
                
            }
        },
        
        logout() {
            this.token = null
            this.user = null
            this.firstName = null
            this.lastName = null
            this.userId = null
            delete axios.defaults.headers.common['Authorization']
        },
        
        async fetchUser() {
            if (!this.token) return
            try { 
                const res = await axios.get('http://localhost:3001/clients/user')
                this.user = res.data.userName
            } catch (error) {
                this.logout()
            }
        }
        
    }
})