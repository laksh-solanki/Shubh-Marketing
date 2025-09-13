<template>
  <v-container class="about-company-container">
    <v-row>
      <v-col cols="12" md="6" class="company-info">
        <h2>About Our Company</h2>
        <p>
          At Shubh Marketing, we are dedicated to providing the highest quality tiles and flooring solutions. With over a decade of experience, we have built a reputation for excellence, innovation, and customer satisfaction.
        </p>
        <p>
          Our extensive product range includes ceramic, porcelain, and designer tiles that cater to both residential and commercial projects. We partner with leading manufacturers to ensure durability, style, and value.
        </p>
      </v-col>
      <v-col cols="12" md="6" class="mission-vision">
        <h2>Our Mission & Vision</h2>
        <p>
          Our mission is to transform spaces with premium flooring solutions that combine aesthetics and functionality. We envision becoming the most trusted tile supplier known for quality, service, and innovation.
        </p>
        <p>
          We strive to empower our customers with expert guidance and personalized service to help them achieve their design goals.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutCompany',
}
</script>

<style scoped>
.about-company-container {
  font-family: 'Roboto', sans-serif;
  padding: 2rem 0;
  color: #333;
}

.company-info, .mission-vision {
  background: #f9f9f9;
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
