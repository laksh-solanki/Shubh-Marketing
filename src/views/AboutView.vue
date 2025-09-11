<script setup>
import TileGallery from '@/components/TileGallery.vue'
import { ref } from 'vue'

const tileCategories = ref([
  {
    name: 'Ceramic Tiles',
    image: './Photos/Til-2.png',
    description: 'Durable and versatile tiles perfect for indoor applications',
  },
  {
    name: 'Porcelain Tiles',
    image: './Photos/Til-3.webp',
    description: 'Premium quality tiles suitable for both indoor and outdoor use',
  },
  {
    name: 'Designer Tiles',
    image: './Photos/Til-4.jpg',
    description: 'Exclusive patterns and designs for unique spaces and versatile tiles',
  },
])

const installationSteps = ref([
  {
    title: 'Consultation',
    description: 'Free site visit and requirements analysis',
    color: 'primary',
  },
  {
    title: 'Planning',
    description: 'Detailed layout and material planning',
    color: 'info',
  },
  {
    title: 'Installation',
    description: 'Professional installation by certified experts',
    color: 'success',
  },
  {
    title: 'Quality Check',
    description: 'Final inspection and quality assurance',
    color: 'warning',
  },
])

defineOptions({
  name: 'AboutPage',
  components: {
    TileGallery,
  },
})
</script>

<template>
  <div class="about-page">
    <!-- Hero Section -->
    <v-row justify="center" align="center" class="hero-section">
      <v-col cols="12" md="7">
        <h1 class="hero-title">Premium Tile Solutions</h1>
        <p class="hero-subtitle">
          Your trusted partner for exclusive ceramic, porcelain, and designer tiles
        </p>
      </v-col>
    </v-row>

    <!-- Tile Experience Section -->
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="experience-card" elevation="2">
          <v-card-title class="text-h4">20+ Years in Tile Excellence</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4" class="text-center">
                <v-icon size="48" color="primary">mdi-package-variant-closed</v-icon>
                <h3 class="stat-number">10000+</h3>
                <p class="stat-label">Tiles Delivered</p>
              </v-col>
              <v-col cols="12" md="4" class="text-center">
                <v-icon size="48" color="primary">mdi-account-group</v-icon>
                <h3 class="stat-number">5000+</h3>
                <p class="stat-label">Happy Customers</p>
              </v-col>
              <v-col cols="12" md="4" class="text-center">
                <v-icon size="48" color="primary">mdi-store</v-icon>
                <h3 class="stat-number">50+</h3>
                <p class="stat-label">Showrooms</p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Tile Categories -->
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="categories-card" elevation="4">
          <v-card-title class="text-h4 mb-3">Our Tile Categories</v-card-title>
          <v-row>
            <v-col v-for="category in tileCategories" :key="category.name" cols="12" md="4">
              <v-card class="category-item" elevation="2">
                <v-img :src="category.image" height="200" cover></v-img>
                <v-card-title>{{ category.name }}</v-card-title>
                <v-card-text>{{ category.description }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Tile Installation Guide -->
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="guide-card" elevation="4">
          <v-card-title class="text-h4">Installation Services</v-card-title>
          <v-card-text>
            <v-timeline density="compact">
              <v-timeline-item v-for="step in installationSteps" :key="step.title" :dot-color="step.color" size="small">
                <div class="installation-step">
                  <h3>{{ step.title }}</h3>
                  <p>{{ step.description }}</p>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Product Showcase -->
    <v-row justify="center">
      <v-col cols="12" md="10" sm="12">
        <v-card class="showcase-card" elevation="2">
          <TileGallery />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.about-page {
  font-family: 'Rubik', sans-serif;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 0;
  text-align: center;
  margin: 1rem;
  margin-bottom: 2rem;
  border-radius: 12px;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
}

.experience-card,
.categories-card,
.guide-card,
.showcase-card {
  margin-bottom: 3rem;
  padding: 2rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
  color: #6a11cb;
}

.stat-label {
  font-size: 1.1rem;
  color: #666;
}

.category-item {
  transition: transform 0.3s ease;
}

.category-item:hover {
  transform: translateY(-5px);
}

.installation-step {
  padding: 0.5rem 0;
}

.installation-step h3 {
  color: #6a11cb;
  margin-bottom: 0.5rem;
}
</style>
