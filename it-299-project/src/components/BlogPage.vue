<template>
    <h1 class="ps-5">Blog</h1>
    <v-row class="justify-center" flex>
    <v-col v-for="blog in blogs" cols="8"> 

    <v-card id="container" class="pa-10 ma-4">
        <v-card-title id="container" class="bg-red-darken-3 mb-4"><h2>{{blog.title}}</h2></v-card-title>
        <v-card-text id="container" class="bg-grey-darken-2 py-2"><h3>{{blog.blogText}}</h3></v-card-text>
    </v-card>

</v-col>
</v-row>

</template>

<script setup>
import { ref } from 'vue'
const blogs = ref([
  {
    "title": "Mastering Light: Why Golden Hour is a Photographer’s Best Friend",
    "blogText": "Golden hour—those magical 60 minutes after sunrise and before sunset—is the secret weapon of many photographers. The soft, diffused light casts long shadows and a warm glow, perfect for portraits, landscapes, and city shots. I first discovered its power during a last-minute shoot at a local park. What was supposed to be a quick practice session turned into some of my favorite portraits to date.\n\nPro Tip: Use a wide aperture (f/2.8–f/4) and shoot into the sun for dreamy backlight.\n\n“Chase light, not likes.”"
  },
  {
    "title": "From Street to Story: Capturing Emotion in Urban Photography",
    "blogText": "Street photography isn’t about perfect exposure or symmetrical compositions—it’s about storytelling. That wrinkled smile, that sudden glance, the chaos of a busy crosswalk. These tiny moments tell the bigger picture of our urban lives.\n\nThe trick? Be patient. Blend in. And always ask for permission when needed—respect for your subjects is just as important as the photo.\n\nGear Used: Fujifilm X100V, 35mm fixed lens, no flash.\n\n“Sometimes the best image is one you almost didn’t take.”"
  },
  {
    "title": "Going Manual: Why You Should Stop Using Auto Mode Forever",
    "blogText": "Auto mode is a comfort zone—but photography lives outside of it. Switching to manual mode was intimidating at first, but it gave me full control over exposure, depth of field, and motion blur.\n\nUnderstanding the exposure triangle (ISO, shutter speed, aperture) is a game-changer. Once you get the hang of it, your photos stop being lucky and start being intentional.\n\nQuick Exercise: Try shooting the same subject with three different shutter speeds. Notice the difference? That’s the power of manual."
  },
  {
    "title": "Editing Is Not Cheating: The Art of Post-Processing",
    "blogText": "Let’s end the myth: editing isn’t cheating—it’s finishing. Ansel Adams manipulated contrast in the darkroom. Today, we use Lightroom and Photoshop. The key is subtlety. Don’t overdo the clarity slider or saturate skies until they scream.\n\nI edit every single photo I publish. Not to deceive, but to reveal the mood I saw when I clicked the shutter.\n\nFavorite Tools: Lightroom’s HSL panel and radial filters. Game changers for portraits and landscapes.\n\n“The camera captures the scene. The edit reveals the soul.”"
  }
]
)
</script>

<style scoped>
#container{
    border-radius: 10px;
}
</style>