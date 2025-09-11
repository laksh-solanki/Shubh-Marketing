<script>
export default {
  name: 'SearchBar',
  props: {
    loading: Boolean,
  },
  data: () => ({
    loaded: false,
    searchText: '',
    isFocused: false,
    isOpen: false,
  }),
  methods: {
    onInput() {
      this.$emit('search-input', this.searchText)
    },
    onFocus() {
      this.isFocused = true
    },
    onBlur() {
      this.isFocused = false
    },
    toggleSearch() {
      if (this.isOpen) {
        // Closing search bar - reset search text and emit empty string to reset cards
        this.searchText = ''
        this.$emit('search-input', '')
      }
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<template>
  <v-card class="search-bar-container justify-item-end" max-width="400">
    <v-card-text class="d-flex">
      <v-btn icon="mdi-magnify" size="small" @click="toggleSearch" class="magnify-btn" elevation="2"></v-btn>
      <div class="search-input-container" :class="{ 'search-open': isOpen }">
        <v-text-field v-if="isOpen" v-model="searchText" :loading="loading" density="compact" label="Search Tiles ..."
          variant="outlined" type="search" hide-details single-line :class="{ focused: isFocused }" @input="onInput"
          @focus="onFocus" @blur="onBlur"></v-text-field>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.v-card {
  background-color: transparent !important;
  box-shadow: none !important;
}

.search-bar-container {
  overflow: hidden;
}

.search-input-container {
  width: 0;
  opacity: 0;
  transition: all 0.3s ease;
  margin-left: 8px;
}

.search-input-container.search-open {
  width: 300px;
  opacity: 1;
}

.magnify-btn {
  border: 1px solid #ccc;
  transition: transform 0.2s ease;
}

.magnify-btn:hover {
  transform: scale(1.1);
}

.v-text-field :deep(.v-label) {
  transition: all 0.3s ease;
}

.v-text-field.focused :deep(.v-label) {
  transform: translateY(-10px) scale(0.8);
  color: #1976d2;
}
</style>
