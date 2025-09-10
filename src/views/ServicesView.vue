<template>
  <div class="services-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Our Tile Services</h1>
        <p class="hero-subtitle">
          Professional tile installation and flooring solutions for residential and commercial
          spaces.
        </p>
        <v-btn @click="scrollToServices" class="cta-button" size="large"> Explore Services </v-btn>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section" ref="servicesRef">
      <div class="container">
        <h2 class="section-title">Tile & Flooring Services</h2>
        <div class="services-grid">
          <v-card v-for="service in services" :key="service.id" class="service-card" elevation="4">
            <v-card-text class="text-center">
              <v-icon size="64" class="service-icon mb-4" color="primary">{{
                service.icon
                }}</v-icon>
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-description">{{ service.description }}</p>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">Why Choose Our Tile Services?</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-item">
            <v-icon size="48" class="feature-icon mb-3" color="secondary">{{
              feature.icon
              }}</v-icon>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-text">{{ feature.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Materials Section -->
    <section class="materials-section">
      <div class="container">
        <h2 class="section-title">Materials We Work With</h2>
        <div class="materials-grid">
          <div v-for="material in materials" :key="material.name" class="material-item">
            <v-icon size="40" class="material-icon mb-2" color="primary">{{
              material.icon
              }}</v-icon>
            <h4 class="material-name">{{ material.name }}</h4>
            <p class="material-description">{{ material.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section">
      <div class="container text-center">
        <h2 class="cta-title">Ready to Buy Modern Style Tile?</h2>
        <p class="cta-text">Get a free consultation and estimate for your tile project.</p>
        <v-btn @click="dialog = true" class="cta-button-large" size="x-large">
          Contact Us
        </v-btn>
      </div>
    </section>

    <!-- Contact Dialog -->
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title class="text-h5 pb-0 p-3 d-flex justify-end align-center">
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="p-0">
          <contactService />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import contactService from '@/components/contactservice.vue'

export default {
  name: 'ServicesView',
  components: {
    contactService,
  },
  data() {
    return {
      dialog: false,
      services: [
        {
          id: 1,
          title: 'Tile Installation',
          description:
            'Professional installation of ceramic, porcelain, and natural stone tiles for floors and walls.',
          icon: 'mdi-tools',
        },
        {
          id: 2,
          title: 'Flooring Design Consultation',
          description:
            'Expert advice on tile selection, layout patterns, and color schemes for your space.',
          icon: 'mdi-palette-swatch-outline',
        },
        {
          id: 3,
          title: 'Subfloor Preparation',
          description:
            'Proper surface preparation ensuring long-lasting, beautiful tile installations.',
          icon: 'mdi-floor-plan',
        },
        {
          id: 4,
          title: 'Grouting & Sealing',
          description:
            'Professional grouting and sealing services to protect and enhance your tile investment.',
          icon: 'mdi-water-off',
        },
        {
          id: 5,
          title: 'Tile Repair & Maintenance',
          description:
            'Repair cracked tiles, replace damaged grout, and maintain your flooring investment.',
          icon: 'mdi-wrench-outline',
        },
        {
          id: 6,
          title: 'Custom Tile Solutions',
          description:
            'Bespoke tile solutions for unique spaces including backsplashes, showers, and accent walls.',
          icon: 'mdi-shape-outline',
        },
      ],
      features: [
        {
          icon: 'mdi-certificate-outline',
          title: 'Certified Installers',
          text: 'Our team consists of certified tile installers with years of experience.',
        },
        {
          icon: 'mdi-clock-outline',
          title: 'Timely Completion',
          text: 'We respect your schedule and complete projects on time with minimal disruption.',
        },
        {
          icon: 'mdi-shield-check-outline',
          title: 'Quality Guarantee',
          text: 'All our work comes with a comprehensive warranty for your peace of mind.',
        },
        {
          icon: 'mdi-recycle',
          title: 'Eco-Friendly Materials',
          text: 'We offer sustainable tile options that are environmentally responsible.',
        },
        {
          icon: 'mdi-account-group-outline',
          title: 'Personalized Service',
          text: 'Every project receives individual attention and customized solutions.',
        },
        {
          icon: 'mdi-lightbulb-on-outline',
          title: 'Expert Guidance',
          text: 'Free consultations to help you choose the perfect tiles for your needs.',
        },
      ],
      materials: [
        {
          name: 'Ceramic Tiles',
          description: 'Versatile and affordable option for walls and floors',
          icon: 'mdi-square-outline',
        },
        {
          name: 'Porcelain Tiles',
          description: 'Durable and water-resistant, perfect for high-traffic areas',
          icon: 'mdi-grid',
        },
        {
          name: 'Natural Stone',
          description: 'Elegant marble, granite, and travertine for luxury finishes',
          icon: 'mdi-diamond-stone',
        },
        {
          name: 'Vinyl Flooring',
          description: 'Comfortable and easy-to-maintain alternative to traditional tiles',
          icon: 'mdi-floor-lamp',
        },
        {
          name: 'Laminate Flooring',
          description: 'Cost-effective wood-look flooring with realistic textures',
          icon: 'mdi-saw-blade',
        },
        {
          name: 'Glass Tiles',
          description: 'Modern and sleek option for accent walls and backsplashes',
          icon: 'mdi-glass-mug-variant',
        },
      ],
    }
  },
  methods: {
    scrollToServices() {
      this.$refs.servicesRef.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style scoped>
.services-container {
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.cta-button {
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: white;
  color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

/* Services Section */
.services-section {
  background-color: #f8f9fa;
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  border-radius: 12px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  height: 100%;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.service-icon {
  opacity: 0.8;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.service-description {
  color: #666;
  line-height: 1.6;
}

/* Features Section */
.features-section {
  background-color: #fff;
  padding: 80px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-item {
  text-align: center;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
}

.feature-icon {
  display: block;
  margin: 0 auto;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.feature-text {
  color: #666;
  line-height: 1.6;
}

/* Materials Section */
.materials-section {
  background-color: #f8f9fa;
  padding: 80px 0;
}

.materials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.material-item {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.material-item:hover {
  transform: translateY(-5px);
}

.material-icon {
  display: block;
  margin: 0 auto;
}

.material-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.material-description {
  color: #666;
  line-height: 1.5;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-text {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button-large {
  background-color: white;
  color: #667eea;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.cta-button-large:hover {
  background-color: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .services-grid,
  .features-grid,
  .materials-grid {
    grid-template-columns: 1fr;
  }

  .service-card,
  .feature-item,
  .material-item {
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 60px 0;
  }

  .hero-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.8rem;
  }
}
</style>
