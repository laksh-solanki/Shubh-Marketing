<script setup>
import { ref } from 'vue'

const snackbar = ref(false)
const text = ref('Message is Unsuccessfully.')
const timeout = ref(2000)

const showSnackbar = () => {
  snackbar.value = true
}

defineExpose({
  showSnackbar,
})
</script>
<template>
  <div class="text-center">
    <v-snackbar v-model="snackbar" color="red" :timeout="timeout">
      {{ text }}
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
