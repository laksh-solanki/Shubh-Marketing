<template>
  <div class="card h-100 bg-dark text-white border-secondary" @mouseover="isHovered = true"
    @mouseleave="isHovered = false">
    <img :src="imageSrc" class="card-img-top" :alt="title" />
    <div class="card-body">
      <h5 class="card-title" @click="copyTitle(title)">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <transition name="fade">
        <span v-if="showCopiedMessage" class="copied-message">Copied!</span>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TileCard',
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
      showCopiedMessage: false,
      isHovered: false,
    }
  },
  methods: {
    copyTitle(text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          this.showCopiedMessage = true
          setTimeout(() => {
            this.showCopiedMessage = false
          }, 1500) // Message disappears after 1.5 seconds
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err)
        })
    },
  },
}
</script>

<style scoped>
.card {
  width: 100%;
  min-height: 400px;
  overflow: hidden;
  display: flex;
  border: none;
  justify-self: center;
  align-items: center;
  cursor: pointer;

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
    background-color: rgba(255, 255, 255, 0.855);
    color: rgb(0, 0, 0);
    padding: 1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    text-align: center;

    & .card-title {
      margin-bottom: 0.5rem;
      transform: translateY(20px);
      transition: transform 0.3s ease;
      cursor: pointer;
    }

    & .card-text {
      font-size: 0.9rem;
      transform: translateY(20px);
      transition: transform 0.3s ease 0.1s;
    }
  }
}

.card:hover .card-img-top {
  transform: scale(1.02);
}

.card:hover .card-body {
  opacity: 1;
}

.card:hover .card-title,
.card:hover .card-text {
  transform: translateY(0);
}

.copied-message {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  white-space: nowrap;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
