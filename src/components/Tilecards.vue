<script>
export default {
  name: 'TileCards',
  props: {
    imageSrc: {
      type: String,
      default: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png', // Default image if none provided
    },
    price: {
      type: String,
      default: '$0.0/-sqft', // Default price if none provided
    },
    title: {
      type: String,
      default: 'Default Title',
    },
    description: {
      type: String,
      default: 'Wall & Floor',
    },
    Instock: {
      type: String,
      default: null,
    },
    Outstock: {
      type: String,
      default: null,
    },
    Size: {
      type: String,
    },
    lowNetwork: {
      type: Boolean,
      default: false,
    },
    selectedName: {
      type: String,
      default: null,
    },
  },
}
</script>

<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="mx-auto rounded-4"
        color="grey-lighten-4"
        min-height="400"
        v-bind="props"
        :class="{ 'selected-card': title === selectedName }"
        elevation="1"
        max-width="360"
      >
        <v-img :aspect-ratio="16 / 9" :src="imageSrc" cover>
          <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex bg-white v-card--reveal text-h2"
              style="height: 100%"
            >
              {{ price }}
            </div>
          </v-expand-transition>
        </v-img>

        <v-card-text class="pt-6">
          <v-row>
            <v-col cols="12" class="text-h4 font-weight-light text-blue py-2">
              {{ title }}
            </v-col>
            <v-col cols="12" class="font-weight-light text-grey text-h6 py-2">
              {{ description }}
            </v-col>
            <v-col cols="12" v-if="Instock" class="font-weight-light text-h6 text-success py-2">
              {{ Instock }}
            </v-col>
            <v-col cols="12" v-if="Outstock" class="font-weight-light text-h6 text-danger py-2">
              {{ Outstock }}
            </v-col>
            <v-col cols="12" class="font-weight-light text-h6 text-dark py-2">
              {{ Size }}
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  color: black;
  position: absolute;
  width: 100%;
}

.selected-card {
  border: 2px solid #1976d2;
  box-shadow: 0 0 10px #1976d2;
}
</style>
