<script>
import TileCard from '../components/TileCard.vue'

export default {
  name: 'HomePage',
  components: {
    TileCard,
  },
  data() {
    return {
      slides: [
        {
          img: '/Photos/Til-1.jpeg',
          title: 'Elevate Your Space with Premium Flooring',
          subtitle: 'Transform your home with our exquisite collection of tiles'
        },
        {
          img: '/Photos/Til-2.png',
          title: 'Premium Quality Materials',
          subtitle: 'Discover durability and style in every tile'
        },
        {
          img: '/Photos/Til-3.webp',
          title: 'Expert Installation Services',
          subtitle: 'Professional installation by certified experts'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="professional-container">
    <!-- Interactive Hero Section -->
    <section class="hero-container">
      <v-carousel cycle height="665" hide-delimiter-background show-arrows="hover" interval="4000">
        <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.img" cover>
          <div class="hero-overlay">
            <div class="hero-content">
              <v-slide-y-transition>
                <h1 class="hero-title">{{ slide.title }}</h1>
              </v-slide-y-transition>
              <v-slide-y-transition>
                <p class="hero-subtitle">{{ slide.subtitle }}</p>
              </v-slide-y-transition>
              <v-slide-y-transition>
                <div class="hero-buttons">
                  <router-link to="/contact" class="professional-button">
                    Contact Us
                  </router-link>
                  <router-link to="/services" class="professional-button outline">
                    Our Services
                  </router-link>
                </div>
              </v-slide-y-transition>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </section>

    <!-- Tile Types Section -->
    <section class="tiles-section">
      <h2 class="section-title">Our Diverse Flooring Collections</h2>
      <v-row justify="center" align="stretch" dense>
        <v-col cols="12" sm="6" md="4" lg="4" xl="3" v-for="(tile, index) in 3" :key="index">
          <TileCard v-if="index === 0" imageSrc="/Photos/Til-6.webp" title="Elegant Ceramic Tiles"
            description="Versatile and robust, ideal for both residential and commercial applications."
            price="$2.50/sq ft" />
          <TileCard v-else-if="index === 1" imageSrc="/Photos/Til-10.png" title="Durable Porcelain Tiles"
            description="Highly resistant to wear and moisture, perfect for high-traffic areas." price="$3.00/sq ft" />
          <TileCard v-else imageSrc="/Photos/Til-13.png" title="Comfortable Vinyl Flooring"
            description="Affordable, easy to maintain, and comfortable underfoot price and design."
            price="$1.75/sq ft" />
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4" xl="3" v-for="(tile, index) in 3" :key="index">
          <TileCard v-if="index === 0" imageSrc="/Photos/Til-7.jpg" title="Elegant Ceramic Tiles"
            description="Versatile and robust, ideal for both residential and commercial applications."
            price="$2.50/sq ft" />
          <TileCard v-else-if="index === 1" imageSrc="/Photos/Til-1.jpeg" title="Durable Porcelain Tiles"
            description="Highly resistant to wear and moisture, perfect for high-traffic areas." price="$3.00/sq ft" />
          <TileCard v-else imageSrc="/Photos/Til-5.jpg" title="Comfortable Vinyl Flooring"
            description="Affordable, easy to maintain, and comfortable underfoot price and design."
            price="$1.75/sq ft" />
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
  margin-bottom: 5rem;
  padding: 1rem;
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
.hero-container {
  background-color:transparent !important;
  position: relative;
  margin-bottom: 40px;
  padding: 0%;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.hero-content {
  max-width: 800px;
  color: white;
  z-index: 1;
}

.hero-title {
  font-size: 3.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.professional-button {
  border-radius: 50px;
  background: white;
  color: #2f2f2f;
  cursor: pointer;
  font-size: 18px;
  padding: 15px 40px;
  margin: auto;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid white;
}

.professional-button.outline {
  background: transparent;
  color: white;
}

.professional-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
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
  text-align: center;
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
