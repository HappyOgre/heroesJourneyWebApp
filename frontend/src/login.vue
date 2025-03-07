<template>
    <v-dialog v-model="loginDialog" persistent max-width="400px">
      <v-card>
        <v-card-title class="headline">Login</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="username"
              label="Username"
              required
              outlined
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              required
              outlined
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="login">Login</v-btn>
          <v-btn text @click="cancel">Abbruch</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const loginDialog = ref(true)
  const username = ref('')
  const password = ref('')
  const valid = ref(false)
  const router = useRouter()
  
  const login = async () => {
    if (valid.value) {
      try {
        // Hier würdest du eine API-Anfrage zum Backend senden
        // z.B. POST /api/login mit dem Benutzernamen und Passwort
        const response = await fetch('http://localhost:3001/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username.value,
            password: password.value,
          }),
        })
        const data = await response.json()
  
        if (data.token) {
          localStorage.setItem('authToken', data.token) // Token im LocalStorage speichern
          router.push('/admin') // Weiterleitung zum Adminbereich
          loginDialog.value = false // Schließt das Dialog
        } else {
          alert('Invalid credentials')
        }
      } catch (error) {
        console.error('Login failed:', error)
        alert('Login failed. Please try again.')
      }
    }
  }
  
  const cancel = () => {
    loginDialog.value = false
  }
  </script>