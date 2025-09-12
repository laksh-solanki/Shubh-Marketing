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
          subtitle: 'Transform your home with our exquisite collection of tiles',
        },
        {
          img: '/Photos/Til-2.png',
          title: 'Premium Quality Materials',
          subtitle: 'Discover durability and style in every tile',
        },
        {
          img: '/Photos/Til-3.webp',
          title: 'Expert Installation Services',
          subtitle: 'Professional installation by certified experts',
        },
      ],
    }
  },
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
                  <router-link to="/contact" class="professional-button"> Contact Us </router-link>
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
    <section class="tiles-section m-3">
      <h2 class="section-title">Our Diverse Flooring Collections</h2>
      <v-row justify="center" align="stretch" dense>
        <v-col cols="12" sm="6" md="4" lg="4" xl="3" v-for="(tile, index) in 3" :key="index">
          <TileCard v-if="index === 0" imageSrc="/Photos/Til-6.webp" title="Elegant Ceramic Tiles"
            description="Versatile and robust, ideal for both residential and commercial applications." />
          <TileCard v-else-if="index === 1" imageSrc="/Photos/Til-10.png" title="Durable Porcelain Tiles"
            description="Highly resistant to wear and moisture, perfect for high-traffic areas." />
          <TileCard v-else imageSrc="/Photos/Til-13.png" title="Comfortable Vinyl Flooring"
            description="Affordable, easy to maintain, and comfortable underfoot price and design." />
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4" xl="3" v-for="(tile, index) in 3" :key="index">
          <TileCard v-if="index === 0" imageSrc="/Photos/Til-7.jpg" title="Elegant Ceramic Tiles"
            description="Versatile and robust, ideal for both residential and commercial applications." />
          <TileCard v-else-if="index === 1" imageSrc="/Photos/Til-1.jpeg" title="Durable Porcelain Tiles"
            description="Highly resistant to wear and moisture, perfect for high-traffic areas." />
          <TileCard v-else imageSrc="/Photos/Til-5.jpg" title="Comfortable Vinyl Flooring"
            description="Affordable, easy to maintain, and comfortable underfoot price and design." />
        </v-col>
      </v-row>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us-section">
      <h2 class="section-title">Why Partner with Us?</h2>
      <v-row justify="center" align="stretch" dense>
        <v-col cols="12" sm="6" md="4" lg="4" xl="4">
          <v-card class="feature-card" elevation="2">
            <div class="feature-icon">
              <v-icon size="48" color="primary">mdi-shield-check</v-icon>
            </div>
            <h3>Uncompromising Quality</h3>
            <p>We source only the finest materials from reputable global manufacturers.</p>
            <div class="feature-overlay">
              <div class="overlay-content">
                <h4>Quality Assurance</h4>
                <ul>
                  <li>Premium Materials</li>
                  <li>Durability Tested</li>
                  <li>Quality Certifications</li>
                </ul>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="4" xl="4">
          <v-card class="feature-card" elevation="2">
            <div class="feature-icon">
              <v-icon size="48" color="primary">mdi-tools</v-icon>
            </div>
            <h3>Expert Installation</h3>
            <p>Our certified professionals ensure a precise and lasting installation.</p>
            <div class="feature-overlay">
              <div class="overlay-content">
                <h4>Installation Benefits</h4>
                <ul>
                  <li>Certified Experts</li>
                  <li>Precise Execution</li>
                  <li>Timely Completion</li>
                </ul>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="4" xl="4">
          <v-card class="feature-card" elevation="3">
            <div class="feature-icon">
              <v-icon size="48" color="primary">mdi-heart</v-icon>
            </div>
            <h3>Client Satisfaction</h3>
            <p>Dedicated to exceeding your expectations from selection to project completion.</p>
            <div class="feature-overlay">
              <div class="overlay-content">
                <h4>Our Commitment</h4>
                <ul>
                  <li>24/7 Support</li>
                  <li>Custom Solutions</li>
                  <li>After-sale Service</li>
                </ul>
              </div>
            </div>
          </v-card>
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
  /* background-color: #2c3e50; */
  color: #2f2f2f;
  margin-bottom: 5rem;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.9rem;
  font-weight: 700;
}

.sec {
  margin-bottom: 40px;
}

/* Hero Section */
.hero-container {
  background-color: transparent !important;
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

/* Why Choose Us Section */
.why-choose-us-section {
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}

.feature-card {
  position: relative;
  background: linear-gradient(145deg, #ffffff, #f3f3f3);
  padding: 2rem 1.5rem;
  border-radius: 15px;
  height: 280px;
  margin: 10px;
  text-align: center;
  overflow: hidden;
  transition: all 0.4s ease;
}

.feature-icon {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(25, 118, 210, 0.1);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
}

.feature-card h3 {
  color: #1976d2;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
}

.feature-card p {
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
}

.feature-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(145deg, #1976d2, #1565c0);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
  transform: translateY(100%);
  border-radius: 15px;
}

.feature-card:hover .feature-overlay {
  opacity: 1;
  transform: translateY(0);
}

.overlay-content {
  color: white;
  padding: 2rem;
}

.overlay-content h4 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.overlay-content ul {
  list-style: none;
  padding: 0;
  text-align: center;
}

.overlay-content li {
  margin: 0.8rem 0;
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

  .feature-card {
    height: 260px;
  }

  .feature-icon {
    width: 60px;
    height: 60px;
  }

  .feature-card h3 {
    font-size: 1.2rem;
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
