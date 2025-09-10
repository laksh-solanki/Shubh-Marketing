<script>
import TileCard from '../components/TileCard.vue'

export default {
  name: 'HomePage',
  components: {
    TileCard,
  },
}
</script>

<template>
  <div class="professional-container">
    <!-- Hero Section -->
    <v-parallax
      src="https://media.istockphoto.com/id/1312314989/vector/white-metro-tiles-seamless-background-subway-brick-horizontal-pattern-for-kitchen-bathroom.jpg?s=612x612&w=0&k=20&c=IW3b5rLojeThvsgWJP5awMQ8uBjHsYbZOlTHFglytcY="
      class="sec"
      height="665"
      width="1600"
    >
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Elevate Your Space with Premium Flooring Solutions</h1>
          <p class="hero-subtitle">
            Discover high-quality, durable, and aesthetically pleasing flooring options for every
            environment.
          </p>
        </div>
        <router-link to="/contact" class="professional-button"> contact us </router-link>
      </section>
    </v-parallax>

    <!-- Tile Types Section -->
    <section class="tiles-section">
      <h2 class="section-title">Our Diverse Flooring Collections</h2>
      <v-row justify="center" align="stretch" dense>
        <v-col cols="12" sm="6" md="4" lg="4" xl="3" v-for="(tile, index) in 3" :key="index">
          <TileCard
            v-if="index === 0"
            imageSrc="/Photos/Til-1.jpeg"
            title="Elegant Ceramic Tiles"
            description="Versatile and robust, ideal for both residential and commercial applications."
            price="$2.50/sq ft"
          />
          <TileCard
            v-else-if="index === 1"
            imageSrc="/Photos/Til-2.avif"
            title="Durable Porcelain Tiles"
            description="Highly resistant to wear and moisture, perfect for high-traffic areas."
            price="$3.00/sq ft"
          />
          <TileCard
            v-else
            imageSrc="/Photos/Til-3.webp"
            title="Comfortable Vinyl Flooring"
            description="Affordable, easy to maintain, and comfortable underfoot price and design."
            price="$1.75/sq ft"
          />
        </v-col>
      </v-row>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us-section">
      <h2 class="section-title">Why Partner with Us?</h2>
      <v-row justify="center" align="stretch" dense>
        <v-col cols="12" sm="6" md="4" lg="4" xl="4">
          <div class="feature-item">
            <h3>Uncompromising Quality</h3>
            <p>We source only the finest materials from reputable global manufacturers.</p>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4" xl="4">
          <div class="feature-item">
            <h3>Expert Installation</h3>
            <p>Our certified professionals ensure a precise and lasting installation.</p>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4" xl="4">
          <div class="feature-item">
            <h3>Client Satisfaction</h3>
            <p>Dedicated to exceeding your expectations from selection to project completion.</p>
          </div>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<style scoped>
.professional-container {
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  padding-top: 0.08rem;
}

/* Global Section Styling */
section {
  background-color: #2c3e50;
  /* Dark blue-gray background */
  margin-bottom: 5rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.9rem;
  color: #e4e8ec;
  /* Dark blue-gray for titles */
  font-weight: 700;
}

.sec {
  margin-bottom: 40px;
}

/* Hero Section */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 82vh;
  background-color: transparent;
  color: #000000;
  border-radius: 8px;
  margin-bottom: 4rem;
  box-shadow: none;
}

.hero-content {
  max-width: 800px;
  padding: 1rem;
}

.hero-title {
  font-size: 3.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.professional-button {
  background-color: #e0e0e0;
  border-radius: 50px;
  box-shadow:
    inset 4px 4px 10px #bcbcbc,
    inset -4px -4px 10px #ffffff;
  color: #2f2f2f;
  cursor: pointer;
  font-size: 18px;
  padding: 15px 40px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  border: 2px solid rgb(22, 22, 22);
}

.professional-button:hover {
  box-shadow:
    inset 2px 2px 5px #bcbcbc,
    inset -2px -2px 5px #ffffff,
    2px 2px 5px #bcbcbc,
    -2px -2px 5px #ffffff;
}

.professional-button:focus {
  outline: none;
  box-shadow:
    inset 2px 2px 5px #bcbcbc,
    inset -2px -2px 5px #ffffff,
    2px 2px 5px #bcbcbc,
    -2px -2px 5px #ffffff;
}

.tiles-section {
  margin: 1rem;
}



/* Why Choose Us Section */
.why-choose-us-section {
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}



.feature-item {
  background-color: #f0f0f0;
  padding: 1.5rem;
  border-radius: 8px;
  height: 250px;
  align-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
}

.feature-item h3 {
  color: #007bff;
  margin-bottom: 0.9rem;
  font-size: 1.6rem;
}

.feature-item p {
  color: #555;
  font-size: 1rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .professional-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .professional-button {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>
