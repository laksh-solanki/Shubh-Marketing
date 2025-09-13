<script>
import AboutContent from '../components/AboutContent.vue'
import AboutCompany from '@/components/AboutCompany.vue';
import AboutTeam from '@/components/AboutTeam.vue'

export default {
  name: 'AboutView',
  components: {
    AboutContent,
    AboutCompany,
    AboutTeam,
  },
}
</script>

<template>
  <div class="about-container">
    <AboutContent />
    <AboutCompany />
    <AboutTeam />
  </div>
</template>

<style scoped>
.about-container {
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
}
</style>
