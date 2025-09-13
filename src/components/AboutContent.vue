<template>
  <v-container class="about-content-container">
    <v-row>
      <v-col cols="12" md="6" class="company-about">
        <h2>About Shubh Marketing</h2>
        <p>
          Welcome to Shubh Marketing, your premier destination for high-quality tiles and flooring solutions. With years of experience in the industry, we specialize in providing a wide range of ceramic, porcelain, and designer tiles to meet all your residential and commercial needs.
        </p>
        <p>
          Our commitment to excellence, customer satisfaction, and innovative designs sets us apart as a trusted partner in transforming spaces.
        </p>
      </v-col>
      <v-col cols="12" md="6" class="person-about">
        <h2>Our Team</h2>
        <p>
          Our expert team is dedicated to guiding you through the selection process, ensuring you find the perfect tiles that combine beauty, durability, and functionality.
        </p>
        <p>
          We believe that the right flooring can elevate any environment, whether you're renovating your home, office, or commercial space.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutContent',
}
</script>

<style scoped>
.about-content-container {
  font-family: 'Roboto', sans-serif;
  padding: 2rem 0;
  color: #333;
}

.company-about, .person-about {
  background: #f0f0f0;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

h2 {
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1976d2;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>
