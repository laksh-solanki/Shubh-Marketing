<template>
  <div class="timeline-container">
    <div class="timeline">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="timeline-step"
        :class="{ active: index <= currentStep, completed: index < currentStep }"
      >
        <div class="timeline-circle">{{ index + 1 }}</div>
        <div class="timeline-label">{{ step.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  props: {
    currentStep: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      steps: [
        { label: 'Contact Info' },
        { label: 'Message detail' },
        { label: 'Additional detail' },
      ],
    };
  },
};
</script>

<style scoped>
.timeline-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 10px 10px 30px 10px;
  padding: 1rem;
  background: rgba(26, 26, 26, 0.242);
  border-radius: 8px;
}

.timeline {
  display: contents;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 20px;
  left: 30px;
  right: 30px;
  height: 2.5px;
  background-color: #ffffff;
  z-index: 1;
}

.timeline-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  justify-self: center;
}

.timeline-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: background-color 0.3s;
}

.timeline-step.active .timeline-circle {
  background-color: #0d6efd;
}

.timeline-step.completed .timeline-circle {
  background-color: #28a745;
}

.timeline-label {
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
  color: #fff;
}

.timeline-step.active .timeline-label {
  color: #0d6efd;
  font-weight: bold;
}

.timeline-step.completed .timeline-label {
  color: #28a745;
}

/* @media (max-width: 768px) {
  .timeline-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .timeline-step {
    flex-direction: row;
    justify-content: flex-start;
  }

  .timeline-label {
    margin-top: 0;
    margin-left: 10px;
    text-align: left;
  }
} */
</style>
