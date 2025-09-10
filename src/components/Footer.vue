<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="indigo-lighten-1">
    <div class="d-flex ga-3">
      <a v-for="item in icons" :key="item.href" :href="item.href" target="_blank" class="mx-2">
        <font-awesome-icon :icon="item.icon" size="2x" />
      </a>
    </div>

    <v-divider thickness="2" width="50"></v-divider>

    <div class="text-caption font-weight-regular opacity-60">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo
      interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa
      consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
      lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.
      Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus.
    </div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>Accurx</strong></div>
  </v-footer>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faFacebook, faTwitter, faLinkedin, faInstagram)

const icons = [
  { icon: faFacebook, href: 'https://www.facebook.com/share/172vnzY76W/' },
  { icon: faXTwitter, href: 'https://www.twitter.com' },
  { icon: faLinkedin, href: 'https://www.linkedin.com/in/tej-patel-b104432b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { icon: faInstagram, href: 'https://www.instagram.com/_tej_patel_7179_?igsh=enNnMng0YTgyMW5u' }
]
</script>

<script>
export default {
  name: 'AppFooter',
  components: {
    FontAwesomeIcon
  }
}
</script>
