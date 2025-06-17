<template>
  <v-app>
    <Navigation />
    <v-main>
      
      <router-view />
    </v-main>
    <v-footer id="footer" class="justify-center">
      <router-link class="ma-1" text="Employees" to='/emplogin'/>
      <router-link class="ma-1" text="Site Map" to='/sitemap' />
    </v-footer>
  </v-app>
</template>

<script >
  //

</script>

<style>
.main-con{
  max-width: 1200px
}
.form {
  max-width: 800px;
}

#footer {
  max-height: 2rem;
  
}

</style>