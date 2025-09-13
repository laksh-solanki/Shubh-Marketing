<script setup>
import Success from '@/components/Success.vue'
import Unsuccess from '@/components/Unsuccess.vue'
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

const initialState = {
  name: '',
  email: '',
  select: null,
  checkbox: null,
}

const state = reactive({
  ...initialState,
})

const items = [
  'Elegant Ceramic Tiles',
  'Comfortable Vinyl Flooring',
  'Modern Laminate Flooring',
  'Rustic Terracotta Tiles',
]

const rules = {
  name: { required },
  email: { required, email },
  select: { required },
  checkbox: { required },
}

const v$ = useVuelidate(rules, state)
const submitted = ref(false)

const successSnackbar = ref(null)
const unsuccessSnackbar = ref(null)

function validate() {
  v$.value.$validate()
  submitted.value = true

  if (!v$.value.$invalid) {
    successSnackbar.value.showSnackbar()
  } else {
    unsuccessSnackbar.value.showSnackbar()
  }
}

function clear() {
  v$.value.$reset()
  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value
  }
}
</script>
<template>
  <form class="p-4 pt-0 needs-validation" novalidate @submit.prevent="validate">
    <Success ref="successSnackbar" v-if="submitted && !v$.$invalid" />
    <Unsuccess ref="unsuccessSnackbar" v-if="submitted && v$.$invalid" />

    <div class="mb-3">
      <label for="nameInput" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-invalid': v$.name.$error, 'is-valid': submitted && !v$.name.$error }"
        id="nameInput"
        v-model="state.name"
        @blur="v$.name.$touch"
        @input="v$.name.$touch"
        required
      />
      <div class="invalid-feedback">
        {{ v$.name.$errors.map((e) => e.$message).join(', ') }}
      </div>
    </div>

    <div class="mb-3">
      <label for="emailInput" class="form-label">E-mail</label>
      <input
        type="email"
        class="form-control"
        :class="{ 'is-invalid': v$.email.$error, 'is-valid': submitted && !v$.email.$error }"
        id="emailInput"
        v-model="state.email"
        @blur="v$.email.$touch"
        @input="v$.email.$touch"
        required
      />
      <div class="invalid-feedback">
        {{ v$.email.$errors.map((e) => e.$message).join(', ') }}
      </div>
    </div>

    <div class="mb-3">
      <label for="selectInput" class="form-label">Item</label>
      <select
        class="form-select"
        :class="{ 'is-invalid': v$.select.$error, 'is-valid': submitted && !v$.select.$error }"
        id="selectInput"
        v-model="state.select"
        @blur="v$.select.$touch"
        @change="v$.select.$touch"
        required
      >
        <option value="" disabled>Select an item</option>
        <option v-for="item in items" :key="item" :value="item">{{ item }}</option>
      </select>
      <div class="invalid-feedback">
        {{ v$.select.$errors.map((e) => e.$message).join(', ') }}
      </div>
    </div>

    <div class="form-check mb-3">
      <input
        type="checkbox"
        class="form-check-input"
        :class="{ 'is-invalid': v$.checkbox.$error, 'is-valid': submitted && !v$.checkbox.$error }"
        id="checkboxInput"
        v-model="state.checkbox"
        @blur="v$.checkbox.$touch"
        @change="v$.checkbox.$touch"
        required
      />
      <label class="form-check-label" for="checkboxInput">Do you agree?</label>
      <div class="invalid-feedback">
        {{ v$.checkbox.$errors.map((e) => e.$message).join(', ') }}
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button type="submit" class="btn btn-primary me-2">Submit</button>
      <button type="button" class="btn btn-secondary" @click="clear">Reset</button>
    </div>
  </form>
</template>
