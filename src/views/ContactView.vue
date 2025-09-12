<template>
  <div class="contact-page">
    <h1 class="text-center display-3 fw-bold my-3 p-4">Contact Us</h1>
    <v-row>
      <v-col cols="12" sm="7" class="timeline-container">
        <v-card class="form-container" @touchstart="handleTouchStart" @touchmove="handleTouchMove"
          @touchend="handleTouchEnd" elevation="2">
          <Timeline :currentStep="currentStep" />
          <h2 class="mb-4 text-center">Send Us a Message</h2>
          <div class="form-step" :class="getFormClasses(0)">
            <form @submit.prevent="submitStep1" class="w-100" novalidate>
              <v-text-field v-model="form.name" label="Name" :rules="[(v) => !!v || 'Name is required']" required
                outlined dense class="mb-3" clearable />
              <v-text-field v-model="form.email" label="Email" :rules="[
                (v) => !!v || 'Email is required',
                (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
              ]" required outlined dense class="mb-3" clearable />
              <v-text-field v-model="form.phone" label="Phone" :rules="[
                (v) => !!v || 'Phone number is required',
                (v) => /^\d{10}$/.test(v) || 'Phone must be 10 digits',
              ]" required outlined dense class="mb-3" clearable />
              <v-text-field v-model="form.subject" label="Subject" :rules="[(v) => !!v || 'Subject is required']"
                required outlined dense class="mb-3" clearable />
              <v-btn :loading="loading" type="submit" color="primary" class="mt-4">Next</v-btn>
            </form>
          </div>

          <div class="form-step" :class="getFormClasses(1)">
            <form @submit.prevent="submitStep2" class="w-100" novalidate>
              <v-textarea v-model="form.message" label="Message" :rules="[(v) => !!v || 'Message is required']" required
                outlined dense rows="4" class="mb-3" clearable />
              <div class="d-flex justify-space-between mt-5">
                <v-btn color="secondary" @click="prevStep">Back</v-btn>
                <v-btn :loading="loading" type="submit" color="primary">Next</v-btn>
              </div>
            </form>
          </div>

          <div class="form-step" :class="getFormClasses(2)">
            <form @submit.prevent="submitStep3" class="w-100" novalidate>
              <v-textarea v-model="form.Address" label="Address" :rules="[(v) => !!v || 'Address is required']"
                clearable required outlined dense rows="4" class="mb-3"></v-textarea>
              <div class="d-flex justify-space-between mt-5">
                <v-btn color="secondary" @click="prevStep">Back</v-btn>
                <v-btn :loading="loading" type="submit" color="primary">Submit</v-btn>
              </div>
            </form>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="5">
        <div class="info-section">
          <v-card class="contact-info pa-4 mb-4" elevation="2">
            <h2 class="mb-4 text-center">Contact Details</h2>
            <v-list dense class="transparent">
              <v-list-item class="mb-2">
                <v-list-item-icon>
                  <v-icon color="primary" size="large">mdi-map-marker</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Address:</v-list-item-title>
                  <v-list-item-subtitle>Shakti Chambers-1 , Shop No. 65 , 8-A, National Highway, Opp. HDFC Bank, MORBI
                    -363642, Gujarat, INDIA.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="mb-2">
                <v-list-item-icon>
                  <v-icon color="primary" size="large">mdi-phone</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Phone:</v-list-item-title>
                  <v-list-item-subtitle>+91 98253 20076</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="mb-2">
                <v-list-item-icon>
                  <v-icon color="primary" size="large">mdi-email</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Email:</v-list-item-title>
                  <v-list-item-subtitle>tejvpatel1008@gmail.com</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card class="contact-info pa-4 mb-4" elevation="2">
            <v-card-title class="text-center justify-center">
              <h2 class="text-h5">Why Contact Us?</h2>
            </v-card-title>
            <v-card-text>
              <v-list dense class="transparent">
                <v-list-item class="mb-2">
                  <v-list-item-icon>
                    <v-icon color="success" size="large">mdi-check-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Expert Advice:</v-list-item-title>
                    <v-list-item-subtitle>Get personalized recommendations for your tiling needs.</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="mb-2">
                  <v-list-item-icon>
                    <v-icon color="warning" size="large">mdi-lightbulb</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Innovative Solutions:</v-list-item-title>
                    <v-list-item-subtitle>Discover cutting-edge tiling techniques and materials.</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="info" size="large">mdi-chat</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Dedicated Support:</v-list-item-title>
                    <v-list-item-subtitle>Our team is here to assist you every step of the way.</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>

    <Success ref="successRef" />
    <Unsuccess ref="unsuccessRef" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Timeline from '@/components/Timeline.vue'
import Success from '@/components/Success.vue'
import Unsuccess from '@/components/Unsuccess.vue'

export default {
  components: {
    Timeline,
    Success,
    Unsuccess,
  },
  setup() {
    const currentStep = ref(0)
    const loading = ref(false)
    const successRef = ref(null)
    const unsuccessRef = ref(null)
    const form = ref({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      Address: '',
    })
    const touchStartX = ref(0)
    const touchEndX = ref(0)

    const prevStep = () => {
      if (currentStep.value > 0) {
        currentStep.value--
      }
    }

    const handleTouchStart = (e) => {
      touchStartX.value = e.changedTouches[0].screenX
    }

    const handleTouchMove = (e) => {
      touchEndX.value = e.changedTouches[0].screenX
    }

    const handleTouchEnd = () => {
      const swipeDistance = touchEndX.value - touchStartX.value
      const minSwipeDistance = 50 // Minimum distance to be considered a swipe

      if (swipeDistance > minSwipeDistance) {
        // Swipe right - go to previous step
        prevStep()
      } else if (swipeDistance < -minSwipeDistance) {
        // Swipe left - go to next step if valid
        if (currentStep.value === 0 && validateStep1()) {
          currentStep.value = 1
        } else if (currentStep.value === 1 && form.value.message) {
          currentStep.value = 2
        }
      }
    }

    const getFormClasses = (stepNumber) => {
      return {
        active: currentStep.value === stepNumber,
        prev: currentStep.value > stepNumber,
        'd-none': currentStep.value !== stepNumber,
      }
    }

    const submitStep1 = () => {
      if (!validateStep1()) return

      const currentForm = document.querySelector('.form-step.active')
      currentForm?.classList.add('sliding-out')

      setTimeout(() => {
        currentStep.value = 1
        currentForm?.classList.remove('sliding-out')
      }, 300)
    }

    const validateStep1 = () => {
      if (!form.value.name) {
        unsuccessRef.value?.showSnackbar()
        return false
      } else if (!form.value.email || !/.+@.+\..+/.test(form.value.email)) {
        unsuccessRef.value?.showSnackbar()
        return false
      } else if (!form.value.phone || !/^\d{10}$/.test(form.value.phone)) {
        unsuccessRef.value?.showSnackbar()
        return false
      } else if (!form.value.subject) {
        unsuccessRef.value?.showSnackbar()
        return false
      }
      return true
    }

    const submitStep2 = () => {
      if (!form.value.message) {
        unsuccessRef.value?.showSnackbar()
        return
      }
      currentStep.value = 2
    }

    const submitStep3 = () => {
      if (!form.value.Address) {
        unsuccessRef.value?.showSnackbar()
        return
      }
      loading.value = true
      // Simulate submission delay
      setTimeout(() => {
        form.value = { name: '', email: '', phone: '', subject: '', message: '', Address: '' }
        currentStep.value = 0
        successRef.value?.showSnackbar()
        loading.value = false
        setTimeout(() => {
          window.location.reload()
        }, 2000) // 2 second delay before reload
      }, 1000) // 1 second delay to simulate
    }

    return {
      currentStep,
      loading,
      form,
      prevStep,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
      submitStep1,
      submitStep2,
      submitStep3,
      successRef,
      unsuccessRef,
      getFormClasses,
    }
  },
}
</script>

<style scoped>
.contact-page {
  min-height: 900px;
  padding: 2rem;
}

.timeline-container {
  margin-bottom: 2rem;
  max-height: 850px;
  overflow: hidden;
}

.form-container {
  position: relative;
  width: 100%;
  max-height: 100%;
  overflow: hidden !important;
}

.form-step {
  width: 100%;
  padding: 2rem;
  overflow: hidden;
  transition:
    transform 0.4s ease-in-out,
    opacity 0.3s ease-in-out;
  opacity: 0;
  transform: translateX(100%);
}

.form-step.active {
  opacity: 1;
  transform: translateX(0);
  z-index: 1;
}

.form-step.prev {
  transform: translateX(-100%);
}

.v-btn {
  text-transform: none;
  min-width: 100px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.sliding-out {
  animation: slideOut 0.3s forwards;
}

.v-list-item--one-line .v-list-item-subtitle {
  -webkit-line-clamp: unset;
  line-clamp: unset;
}

@keyframes slideOut {
  0% {
    opacity: 1;
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
}
</style>
