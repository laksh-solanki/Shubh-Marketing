<template>
  <v-app-bar app height="70" light elevation="2">
    <v-container class="d-flex align-center">
      <v-toolbar-title>
        <router-link class="navbar-brand w-100" to="/"
          ><img src="@/assets/main_logo.png" class="rounded-4" width="100" alt="Accurx Logo"
        /></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-none d-md-flex align-center">
        <v-tabs v-model="activeTab" :show-arrows="false" class="w-100">
          <v-tab to="/" value="home">Home</v-tab>
          <v-tab to="/about" value="about">About</v-tab>
          <v-tab to="/services" value="services">Services</v-tab>
          <v-tab to="/contact" value="contact">Contact</v-tab>
          <v-tab to="/Tile" value="Tile">Tile</v-tab>
        </v-tabs>
      </div>
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary left>
    <v-list nav dense>
      <v-list-item to="/" @click="drawer = false">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item to="/about" @click="drawer = false">
        <v-list-item-icon>
          <v-icon>mdi-information-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>About</v-list-item-title>
      </v-list-item>
      <v-list-item to="/services" @click="drawer = false">
        <v-list-item-icon>
          <v-icon>mdi-tools</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Services</v-list-item-title>
      </v-list-item>
      <v-list-item to="/contact" @click="drawer = false">
        <v-list-item-icon>
          <v-icon>mdi-email-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Contact</v-list-item-title>
      </v-list-item>
      <v-list-item to="/Tile" @click="drawer = false">
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Tile</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
  name: 'AppNavbar',
  components: {
    SearchBar,
  },
  data() {
    return {
      drawer: false,
    }
  },
  computed: {
    activeTab: {
      get() {
        return this.$route.path.substring(1) || 'home'
      },
      set() {},
    },
    isMobile() {
      return this.$vuetify.display.mdAndDown
    },
  },
  watch: {
    isMobile(newVal) {
      if (!newVal) {
        this.drawer = false
      }
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

.navbar-brand {
  margin-left: 12px;

  & img {
    max-width: 100%;
    height: auto;
  }
}

.nav-link {
  font-family: 'Rubik', sans-serif;
  color: #fff !important;
  font-weight: 500;
  margin-right: 1rem;
  text-transform: none;
}
</style>
