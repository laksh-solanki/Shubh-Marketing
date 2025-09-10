<template>
  <div class="slider-wrapper" @mouseenter="pauseAutoPlay" @mouseleave="startAutoPlay">
    <div
      class="slider-container"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <div class="slider-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(tile, index) in tiles" :key="index" class="slider-slide">
          <div class="slide-content">
            <img :src="tile.src" :alt="tile.alt" />
            <div class="slide-info">
              <h3>{{ tile.title }}</h3>
              <p>{{ tile.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="slider-indicators">
      <span
        v-for="(tile, index) in tiles"
        :key="index"
        class="indicator"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TileGallery',
  data() {
    return {
      currentIndex: 0,
      startX: 0,
      isDragging: false,
      autoPlayInterval: null,
      tiles: [
        {
          src: '/Photos/Til-1.jpeg',
          alt: 'Elegant Ceramic Tile 1',
          title: 'Classic White',
          description: 'Timeless elegance for modern spaces.',
        },
        {
          src: '/Photos/Til-2.avif',
          alt: 'Elegant Ceramic Tile 2',
          title: 'Subtle Gray',
          description: 'Versatile and sophisticated design.',
        },
        {
          src: '/Photos/Til-3.webp',
          alt: 'Elegant Ceramic Tile 3',
          title: 'Warm Beige',
          description: 'Cozy and inviting atmosphere.',
        },
        {
          src: '/Photos/Til-4.jpg',
          alt: 'Elegant Ceramic Tile 4',
          title: 'Bold Pattern',
          description: 'Statement piece for unique interiors.',
        },
        {
          src: '/Photos/Til-5.jpg',
          alt: 'Elegant Ceramic Tile 5',
          title: 'Marble Effect',
          description: 'Luxurious look at an affordable price.',
        },
        {
          src: '/Photos/Til-6.webp',
          alt: 'Elegant Ceramic Tile 6',
          title: 'Geometric Design',
          description: 'Modern and trendy patterns.',
        },
        {
          src: '/Photos/Til-7.jpg',
          alt: 'Elegant Ceramic Tile 7',
          title: 'Natural Stone',
          description: 'Authentic feel with durability.',
        },
      ],
    }
  },
  methods: {
    onTouchStart(event) {
      this.isDragging = true
      this.startX = event.touches[0].clientX
    },
    onTouchMove(event) {
      if (!this.isDragging) return
      event.preventDefault()
    },
    onTouchEnd(event) {
      if (!this.isDragging) return
      this.isDragging = false
      const endX = event.changedTouches[0].clientX
      const deltaX = endX - this.startX
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          this.prevSlide()
        } else {
          this.nextSlide()
        }
      }
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.tiles.length
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.tiles.length) % this.tiles.length
    },
    goToSlide(index) {
      this.currentIndex = index
    },
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide()
      }, 3000)
    },
    pauseAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval)
        this.autoPlayInterval = null
      }
    },
  },
  mounted() {
    this.startAutoPlay()
  },
  beforeUnmount() {
    this.pauseAutoPlay()
  },
}
</script>

<style scoped>
.slider-wrapper {
  width: 100%;
  height: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  overflow: hidden;
}

.slider-container {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
}

.slider-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
}

.slider-slide {
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-content {
  width: 80%;
  max-width: 400px;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.slide-content img {
  width: 100%;
  height: 60%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
}

.slide-info {
  text-align: center;
  color: white;
}

.slide-info h3 {
  margin: 0 0 10px 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.slide-info p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.4;
}

.slider-indicators {
  position: absolute;
  bottom: 20px;
  display: flex;
  gap: 10px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background 0.3s ease;
}

.indicator.active {
  background: white;
}

@media (max-width: 768px) {
  .slider-wrapper {
    height: 500px;
  }
  .slider-container {
    height: 400px;
  }
  .slide-content {
    width: 90%;
    height: 85%;
  }
  .slide-info h3 {
    font-size: 1.3rem;
  }
  .slide-info p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .slider-wrapper {
    height: 400px;
  }
  .slider-container {
    height: 300px;
  }
  .slide-content {
    width: 95%;
    height: 90%;
    padding: 15px;
  }
  .slide-info h3 {
    font-size: 1.1rem;
  }
  .slide-info p {
    font-size: 0.8rem;
  }
}
</style>
