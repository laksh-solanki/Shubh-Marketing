<script setup>
import { ref, computed } from 'vue'
defineOptions({
  name: 'TileCards',
})
import TileCards from '@/components/Tilecards.vue'
import TileNavbar from '@/components/TileNavbar.vue'

const emit = defineEmits(['loading-state'])

function onNameSelected(name) {
  loading.value = true
  selectedName.value = name
  emit('loading-state', loading.value)
  setTimeout(() => {
    loading.value = false
    emit('loading-state', loading.value)
  }, 1000)
}

const selectedName = ref(null)
const loading = ref(false)

const cards = [
  {
    imageSrc: '/Photos/Til-1.jpeg',
    title: 'Elegant Ceramic Tiles',
    description: 'Wall & Floor',
    Instock: 'In Stock',
    price: '₹150/- sqft',
    Size: '200 × 200',
  },
  {
    imageSrc: '/Photos/Til-11.webp',
    title: 'Elegant Ceramic Tiles',
    description: 'Wall',
    Instock: 'In Stock',
    price: '₹150/- sqft',
    Size: '200 × 200',
  },
  {
    imageSrc: '/Photos/Til-2.avif',
    title: 'Durable floor Porcelain Tiles',
    description: 'Floor',
    Instock: 'In Stock',
    price: '₹120/- sqft',
    Size: '200 × 300',
  },
  {
    imageSrc: '/Photos/Til-3.webp',
    title: 'Comfortable Vinyl Flooring',
    description: 'Floor',
    Instock: 'In Stock',
    price: '₹130/- sqft',
    Size: '200 × 500',
  },
  {
    imageSrc: '/Photos/Til-4.jpg',
    title: 'Modern Laminate Flooring',
    description: 'Wall & Floor',
    Instock: 'In Stock',
    price: '₹140/- sqft',
    Size: '200 × 300',
  },
  {
    imageSrc: '/Photos/Til-5.jpg',
    title: 'Natural Stone Wall Tiles',
    description: 'Wall',
    Instock: 'In Stock',
    price: '₹160/- sqft',
    Size: '200 × 200',
  },
  {
    imageSrc: '/Photos/Til-6.webp',
    title: 'Eco-friendly Bamboo Flooring',
    description: 'Floor',
    Instock: 'In Stock',
    price: '₹170/- sqft',
    Size: '200 × 100',
  },
  {
    imageSrc: '/Photos/Til-7.jpg',
    title: 'Classic Marble wall & floor Tiles',
    description: 'Wall & Floor',
    Instock: 'In Stock',
    price: '₹180/- sqft',
    Size: '400 × 400',
  },
  {
    imageSrc: '/Photos/Til-8.webp',
    title: 'Rustic Terracotta Tiles',
    description: 'Floor',
    Outstock: 'Out of stock',
    price: '₹190/- sqft',
    Size: '200 × 200',
  },
  {
    imageSrc: '/Photos/Til-9.avif',
    title: 'Sleek Glass wall Tiles',
    description: 'Wall',
    Instock: 'In Stock',
    price: '₹200/- sqft',
    Size: '10 × 10',
  },
  {
    imageSrc: '/Photos/Til-10.avif',
    title: 'Textured Concrete Tiles',
    description: 'Floor',
    Instock: 'In Stock',
    price: '₹210/- sqft',
    Size: '200 × 200',
  },
  {
    imageSrc: '/Photos/Til-13.avif',
    title: 'Patterned Cement Tiles',
    description: 'Floor',
    Instock: 'In Stock',
    price: '₹220/-sqft',
    Size: '200 × 200',
  },
  {
    imageSrc: '/Photos/Til-12.webp',
    title: 'Wood-look Porcelain Tiles',
    description: 'Wall & Floor',
    Instock: 'In Stock',
    price: '₹230/-sqft',
    Size: '200 × 200',
  },
]

const filteredCards = computed(() => {
  if (!selectedName.value) return cards
  const searchText = selectedName.value.toLowerCase()
  return cards.filter((card) => card.title.toLowerCase().includes(searchText))
})
</script>

<template>
  <TileNavbar @name-selected="onNameSelected" :loading="loading" />
  <section class="Tile-section">
    <v-row class="cards-grid">
      <v-col cols="12" md="3" sm="4" xs="12" v-for="n in 12" :key="n" v-if="loading">
        <v-skeleton-loader type="card, article" class="rounded-4" />
      </v-col>
      <v-col
        v-else
        cols="12"
        md="3"
        sm="4"
        xs="12"
        v-for="(card, index) in filteredCards"
        :key="index"
      >
        <TileCards v-bind="card" :selectedName="selectedName" />
      </v-col>
    </v-row>
    <v-empty-state
      icon="mdi-magnify"
      v-if="!loading && filteredCards.length === 0"
      text="Try adjusting your search terms or filters. Sometimes less specific terms or broader queries can help you find what you're looking for."
      title="We couldn't find a match."
    ></v-empty-state>
  </section>
</template>

<style>
.Tile-section {
  padding: 1.6rem;
}
</style>
