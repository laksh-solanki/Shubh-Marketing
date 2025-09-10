<template>
  <v-container fluid class="about-page">
    <!-- Hero Section -->
    <v-row justify="center" align="center" class="hero-section">
      <v-col cols="12" md="7">
        <h1 class="hero-title">About Accurx</h1>
        <p class="hero-subtitle">
          Leading provider of high-quality ceramic tiles for residential and commercial projects.
        </p>
      </v-col>
    </v-row>

    <!-- About Us Section -->
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="about-card" elevation="4">
          <v-card-title class="text-h4">Our Story</v-card-title>
          <v-card-text>
            <p>
              At Accurx, we have been dedicated to excellence in tile manufacturing for over a
              decade. Our commitment to quality, innovation, and customer satisfaction has made us a
              trusted name in the industry.
            </p>
            <p>
              We offer a wide range of ceramic tiles that combine durability, style, and
              affordability, suitable for any space.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Values Section -->
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="values-card" elevation="4">
          <v-card-title class="text-h4">Our Core Values</v-card-title>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title>Integrity</v-expansion-panel-title>
              <v-expansion-panel-text>
                We uphold the highest standards of integrity in all our actions, fostering trust and
                transparency with our clients and partners.
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title>Quality</v-expansion-panel-title>
              <v-expansion-panel-text>
                We are committed to delivering products and services of exceptional quality,
                ensuring durability, performance, and aesthetic appeal.
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title>Client Focus</v-expansion-panel-title>
              <v-expansion-panel-text>
                Our clients are at the heart of everything we do. We strive to understand their
                needs and exceed their expectations through personalized solutions and dedicated
                support.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>

    <!-- Product Showcase -->
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="showcase-card" elevation="4">
          <v-card-title class="text-h4 text-center">Our Tile Collection</v-card-title>
          <TileGallery />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import TileGallery from '@/components/TileGallery.vue'

defineOptions({
  name: 'AboutPage',
  components: {
    TileGallery,
  },
})
</script>

<style scoped>
.about-page {
  padding: 2rem 0;
}

.hero-section {
  background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
}

.about-card,
.values-card,
.showcase-card {
  margin-bottom: 2rem;
  padding: 2rem;
}
</style>
