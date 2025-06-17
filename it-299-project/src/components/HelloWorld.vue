<template>
  
  <v-container class="fill-height" max-width="1200">
    
    <div>
      <v-img
        class="mb-4"
        height="800"
        
        src="@/assets/pexels-pixabay-206359.jpg"
      />

      

      <v-row>
        <v-col cols="12">
          <v-card
            class="py-4"
            color="surface-variant"
            image=""
            prepend-icon="mdi-rocket-launch-outline"
            rounded="lg"
            variant="tonal"
          >
            

            <template #title>
              <h2 class="text-h5 font-weight-bold">
                Welcome!
              </h2>
            </template>

            
              <div  class="ma-4">
               <p> vehicula nunc, at vulputate turpis. Fusce ut mattis quam. Fusce eu massa ac velit facilisis dapibus. Aliquam nec bibendum odio. Nulla eget nibh felis. Suspendisse ac sem ullamcorper, dignissim risus vitae, dignissim nisi. Nunc aliquam ex ac lorem finibus dapibus. Integer mattis quis nunc vitae suscipit. In nec neque eget neque imperdiet facilisis.
              </p>
              </div>
            
          </v-card>
        </v-col>

        
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
  const links = [
    {
      href: 'https://vuetifyjs.com/',
      icon: 'mdi-text-box-outline',
      subtitle: 'Learn about all things Vuetify in our documentation.',
      title: 'Documentation',
    },
    {
      href: 'https://vuetifyjs.com/introduction/why-vuetify/#feature-guides',
      icon: 'mdi-star-circle-outline',
      subtitle: 'Explore available framework Features.',
      title: 'Features',
    },
    {
      href: 'https://vuetifyjs.com/components/all',
      icon: 'mdi-widgets-outline',
      subtitle: 'Discover components in the API Explorer.',
      title: 'Components',
    },
    {
      href: 'https://discord.vuetifyjs.com',
      icon: 'mdi-account-group-outline',
      subtitle: 'Connect with Vuetify developers.',
      title: 'Community',
    },
  ]
</script>
