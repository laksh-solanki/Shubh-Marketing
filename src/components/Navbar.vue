<template>
  <v-app-bar app height="70" light elevation="2">
    <v-container class="d-flex align-center">
      <v-toolbar-title>
        <router-link class="navbar-brand w-100" to="/"
          ><img src="@/assets/Main_logo.jpeg" class="rounded-4" width="110" alt="Shubh marketing"
        /></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-none d-lg-flex align-center">
        <v-tabs v-model="activeTab" :show-arrows="false" class="w-100">
          <v-tab to="/" value="home">Home</v-tab>
          <v-tab to="/about" value="about">About</v-tab>
          <v-tab to="/services" value="services">Services</v-tab>
          <v-tab to="/contact" value="contact">Contact</v-tab>
          <v-tab to="/Tile" value="Tile">Tile</v-tab>
        </v-tabs>
      </div>
      <div
        class="hamburger-menu d-lg-none d-flex align-center"
        :class="{ 'is-active': drawer }"
        @click="drawer = !drawer"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary location="right">
    <v-list nav dense>
      <v-list-item to="/" @click="drawer = false">
        <v-list-item-title class="d-flex flex-row align-center"
          ><v-icon class="mr-2">mdi-home</v-icon>Home</v-list-item-title
        >
      </v-list-item>
      <v-list-item to="/about" @click="drawer = false">
        <v-list-item-title class="d-flex flex-row align-center"
          ><v-icon class="mr-2">mdi-information-outline</v-icon>About</v-list-item-title
        >
      </v-list-item>
      <v-list-item to="/services" @click="drawer = false">
        <v-list-item-title class="d-flex flex-row align-center"
          ><v-icon class="mr-2">mdi-tools</v-icon>Services</v-list-item-title
        >
      </v-list-item>
      <v-list-item to="/contact" @click="drawer = false">
        <v-list-item-title class="d-flex flex-row align-center"
          ><v-icon class="mr-2">mdi-email-outline</v-icon>Contact</v-list-item-title
        >
      </v-list-item>
      <v-list-item to="/Tile" @click="drawer = false">
        <v-list-item-title class="d-flex flex-row align-center"
          ><v-icon class="mr-2">mdi-view-dashboard</v-icon>Tile</v-list-item-title
        >
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

.v-list-item {
  padding-left: 16px;
}

.v-list-item-title {
  font-size: medium !important;
}

.nav-link {
  font-family: 'Rubik', sans-serif;
  color: #fff !important;
  font-weight: 500;
  margin-right: 1rem;
  text-transform: none;
}

.hamburger-menu {
  width: 30px;
  height: 25px;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger-menu span {
  display: block;
  height: 4px;
  width: 100%;
  background-color: #333;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  transform-origin: left center;
}

.hamburger-menu.is-active span:nth-child(1) {
  transform: rotate(43deg);
  width: 32px;
}

.hamburger-menu.is-active span:nth-child(2) {
  opacity: 0;
  transform: translateX(-10px);
}

.hamburger-menu.is-active span:nth-child(3) {
  transform: rotate(-43deg);
  width: 32px;
}
</style>
