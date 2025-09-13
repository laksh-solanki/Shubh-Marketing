<template>
  <div
    class="card h-100 bg-light text-dark border-primary"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <img :src="imageSrc" class="card-img-top" :alt="title" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeTileCard',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isHovered: false,
    }
  },
}
</script>

<style scoped>
.card {
  width: 100%;
  min-height: 350px;
  overflow: hidden;
  display: flex;
  border: none;
  justify-self: center;
  align-items: center;
  cursor: pointer;
  background-color: #f8f9fa;

  & .card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  & .card-body {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.9);
    color: #212529;
    padding: 1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    text-align: center;

    & .card-title {
      margin-bottom: 0.5rem;
      transform: translateY(20px);
      transition: transform 0.3s ease;
    }

    & .card-text {
      font-size: 0.9rem;
      transform: translateY(20px);
      transition: transform 0.3s ease 0.1s;
    }
  }
}

.card:hover .card-img-top {
  transform: scale(1.05);
}

.card:hover .card-body {
  opacity: 1;
}

.card:hover .card-title,
.card:hover .card-text {
  transform: translateY(0);
}
</style>
