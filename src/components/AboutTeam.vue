<template>
  <v-container class="about-team-container">
    <v-row>
      <v-col cols="12" md="4" v-for="member in teamMembers" :key="member.name" class="team-member">
        <v-card elevation="2" class="team-card">
          <v-img :src="member.photo" height="200px" alt="Team member photo"></v-img>
          <v-card-title>{{ member.name }}</v-card-title>
          <v-card-subtitle>{{ member.position }}</v-card-subtitle>
          <v-card-text>{{ member.bio }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutTeam',
  data() {
    return {
      teamMembers: [
        {
          name: 'John Doe',
          position: 'Founder & CEO',
          bio: 'John has over 20 years of experience in the tile and flooring industry, leading Shubh Marketing to success.',
          photo: '/Photos/team-john.jpg',
        },
        {
          name: 'Jane Smith',
          position: 'Head of Sales',
          bio: 'Jane is passionate about customer satisfaction and has been with the company for 10 years.',
          photo: '/Photos/team-jane.jpg',
        },
        {
          name: 'Michael Brown',
          position: 'Lead Designer',
          bio: 'Michael brings creativity and innovation to every project, ensuring unique and beautiful designs.',
          photo: '/Photos/team-michael.jpg',
        },
      ],
    }
  },
}
</script>

<style scoped>
.about-team-container {
  font-family: 'Roboto', sans-serif;
  padding: 2rem 0;
  color: #333;
}

.team-member {
  margin-bottom: 1.5rem;
}

.team-card {
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
}

.v-card-title {
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.v-card-subtitle {
  font-weight: 500;
  color: #1976d2;
  margin-bottom: 0.5rem;
}

.v-card-text {
  font-size: 1rem;
  line-height: 1.4;
  padding: 0 1rem 1rem;
}
</style>
