<template>
  <v-app-bar app elevation="2" height="70" light class="tile-navbar">
    <v-container class="d-flex align-center">
      <div class="d-none d-md-flex align-center w-75">
        <!-- All Tiles Tab -->
        <v-tabs class="nav-link mx-2" :class="{ 'active-link': $route.path === '/Tile' }">
          <v-tab @click="$emit('name-selected', null)">All Tiles</v-tab>
        </v-tabs>

        <!-- Ceramic Tiles Dropdown -->
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ props }">
            <v-btn text v-bind="props" class="nav-link mx-2">
              Ceramic Tiles
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in ceramicItems" :key="index"
              @click.stop="$emit('name-selected', item.title)">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Porcelain Tiles Dropdown -->
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ props }">
            <v-btn text v-bind="props" class="nav-link mx-2">
              Porcelain Tiles
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in porcelainItems" :key="index"
              @click.stop="$emit('name-selected', item.title)">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Flooring Types Dropdown -->
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ props }">
            <v-btn text v-bind="props" class="nav-link mx-2">
              Flooring Types
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in flooringItems" :key="index"
              @click.stop="$emit('name-selected', item.title)">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Natural Stone Dropdown -->
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ props }">
            <v-btn text v-bind="props" class="nav-link mx-2">
              Natural Stone
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in stoneItems" :key="index" @click="$emit('name-selected', item.title)">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <search-bar :loading="loading" width="300" @search-input="onSearchInput"></search-bar>
    </v-container>
  </v-app-bar>
  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer v-model="drawer" app temporary right>
    <v-list nav dense :activatable="true" :active-class="'active-link'">
      <v-list-item @click="$emit('name-selected', null)">
        <v-list-item-title>All Tiles</v-list-item-title>
      </v-list-item>

      <v-list-group value="Ceramic Tiles">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Ceramic Tiles"></v-list-item>
        </template>
        <v-list-item v-for="(item, index) in ceramicItems" :key="index" @click="$emit('name-selected', item.title)">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group value="Porcelain Tiles">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Porcelain Tiles"></v-list-item>
        </template>
        <v-list-item v-for="(item, index) in porcelainItems" :key="index" @click="$emit('name-selected', item.title)">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group value="Flooring Types">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Flooring Types"></v-list-item>
        </template>
        <v-list-item v-for="(item, index) in flooringItems" :key="index" @click="$emit('name-selected', item.title)">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group value="Natural Stone">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Natural Stone"></v-list-item>
        </template>
        <v-list-item v-for="(item, index) in stoneItems" :key="index" @click="$emit('name-selected', item.title)">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
  name: 'TileNavbar',
  components: {
    SearchBar,
  },
  props: {
    loading: Boolean,
  },
  data() {
    return {
      drawer: false,
      activeTab: null,
      ceramicItems: [
        { title: 'Elegant Ceramic Tiles', to: '/Tile#ceramic' },
        { title: 'Patterned Ceramic', to: '/Tile#patterned-ceramic' },
        { title: 'Glazed Ceramic', to: '/Tile#glazed-ceramic' },
        { title: 'Unglazed Ceramic', to: '/Tile#unglazed-ceramic' },
      ],
      porcelainItems: [
        { title: 'Durable Porcelain Tiles', to: '/Tile#porcelain' },
        { title: 'Wood-look Porcelain', to: '/Tile#wood-porcelain' },
        { title: 'Stone-look Porcelain', to: '/Tile#stone-porcelain' },
        { title: 'Polished Porcelain', to: '/Tile#polished-porcelain' },
      ],
      flooringItems: [
        { title: 'Comfortable Vinyl Flooring', to: '/Tile#vinyl' },
        { title: 'Modern Laminate Flooring', to: '/Tile#laminate' },
        { title: 'Eco-friendly Bamboo', to: '/Tile#bamboo' },
        { title: 'Textured Concrete', to: '/Tile#concrete' },
      ],
      stoneItems: [
        { title: 'Classic Marble Tiles', to: '/Tile#marble' },
        { title: 'Natural Stone Tiles', to: '/Tile#natural-stone' },
        { title: 'Rustic Terracotta', to: '/Tile#terracotta' },
        { title: 'Sleek Glass Tiles', to: '/Tile#glass' },
      ],
    }
  },
  computed: {
    isMobile() {
      return this.$vuetify?.display?.mdAndDown || false
    },
  },
  methods: {
    onSearchInput(searchText) {
      this.$emit('name-selected', searchText)
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

.tile-navbar {
  margin-bottom: 20px;

  & .nav-link {
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    text-transform: none;
    font-size: 14px;
    min-width: 120px;

    & .nav-link:hover {
      background-color: rgb(31, 137, 92);
    }
  }
}

.nav-link .active-link {
  background-color: rgba(255, 255, 255, 0.2) !important;
  border-bottom: 2px solid #fff;
}

.v-menu__content {
  border-radius: 8px;
}

.v-list-item {
  min-height: 40px;
  background-color: #000000;
}

.v-list-item-title {
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;
}
</style>
