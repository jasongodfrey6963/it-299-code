<template>
<v-app-bar :elevation="2">
  <template v-slot:prepend>
    <v-app-bar-nav-icon @click="ok=!ok"></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title class="text-style-italicize">Sly Styles Studios</v-app-bar-title>
</v-app-bar>
<v-navigation-drawer v-model="ok" temporary>
  <v-sheet class="d-flex-inline text-start align-start">
    <v-list-item><v-btn class="" to="/" block>Home</v-btn></v-list-item>
  <v-list-item><v-btn to="/about" block>About</v-btn></v-list-item>
  <v-list-item><v-btn to="/contact" block>Contact</v-btn></v-list-item>
  <v-list-item><v-btn to="/blog" block>Blog</v-btn></v-list-item>
  <v-list-item><v-btn to="/gallery" block>Gallery</v-btn></v-list-item>
  <v-list-item><v-btn to="/cropper" block>Cropper</v-btn></v-list-item>
  </v-sheet>  
  <template v-slot:append>
          <div class="pa-2">
            <v-btn class="bg-success" to="/login" block>
              Login
            </v-btn>
          </div>
        </template>
</v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      ok: false
    }
  }
}
</script>

<style>

</style>