<script>

export default {
  name: 'AboutView',
}
</script>

<template>
  <div class="about-container">
    <div class="Til-1"></div>
    <div class="Til-2"></div>
  </div>
</template>

<style scoped>
.about-container {
  position: relative;
  height: 100vh;
  --s: 260px;
  /* control the size*/
  --c1: #ffa200;
  --c2: #a4a9aa;
  --c3: #2c2e2a;

  --p: at 45% 40%, #0000 75%, ;
  --g1: conic-gradient(var(--p) var(--c1) 0);
  --g2: conic-gradient(var(--p) var(--c2) 0);
  background:
    var(--g1), var(--g2) calc(2*var(--s)) 0,
    var(--g2) calc(3*var(--s)) var(--s),
    var(--g1) var(--s) var(--s) var(--c3);
  background-size: calc(4*var(--s)) calc(2*var(--s));
}
</style>