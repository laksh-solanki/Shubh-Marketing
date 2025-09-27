<script>

export default {
  name: 'AboutView',
}
</script>

<template>
  <v-row class="about-Container">
    <v-col class="About-left"><p>About page</p></v-col>
    <v-col class="About-right">
      <v-row class="About-right-Tile-1"></v-row>
      <v-row class="About-right-Tile-2"></v-row>
      <v-row class="About-right-Tile-3"></v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
.about-container {
  max-width: 100vw;
  max-height: 91.98vh;
}

.About-left {
  width: 50vw;
  height: 100vh;
  background: radial-gradient(#000000 15%, transparent 16%), repeating-linear-gradient(0deg, transparent 6.5%, #ffffff 7%, #ffffff 9%, transparent 10%), linear-gradient(45deg, transparent 49%, #000000 49%, #000000 51%, transparent 51%), linear-gradient(-45deg, transparent 49%, #000000 49%, #000000 51%, transparent 51%);
  background-size: 0.5em 0.5em !important;
  background-color: #ffffff;
  opacity: 1;
  padding: 0;
  text-align: center;
  line-height: 100vh;
  margin: 0;

  & > p{
    font-size: 3em;
    font-weight: bold;
    color: #000000;
    text-shadow: 2px 2px 4px #ffffff;
  }
}

.About-right {
  width: 50vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}

.About-right-Tile-1 {
  width: 100%;
  height: 31.6%;
  border: 10px solid rgb(0, 0, 0);
  --s: 50px;
  /* control the size*/
  --c1: #f8e4c1;
  --c2: #2b4e72;

  --c: #0000 75%, var(--c1) 0;
  --g1: conic-gradient(at 78% 3%, var(--c));
  --g2: conic-gradient(at 3% 78%, var(--c));
  background:
    var(--g1),
    var(--g1) var(--s) var(--s),
    var(--g1) calc(2*var(--s)) calc(2*var(--s)),
    var(--g1) calc(3*var(--s)) calc(3*var(--s)),
    var(--g2) 0 calc(3*var(--s)),
    var(--g2) var(--s) 0,
    var(--g2) calc(2*var(--s)) var(--s),
    var(--g2) calc(3*var(--s)) calc(2*var(--s)) var(--c2);
  background-size: calc(4*var(--s)) calc(4*var(--s));
}

.About-right-Tile-2 {
  width: 100%;
  height: 31.6%;
  border-top: 2px solid rgb(0, 0, 0) !important;
  border: 10px solid rgb(0, 0, 0);
  --s: 100px;
  /* control the size*/
  --c1: #000000;
  --c2: #ffffff;

  --_l: #0000 34%, var(--c1) 0 41%, #0000 0 59%, var(--c1) 0 66%, #0000 0;
  background:
    linear-gradient(-45deg, var(--_l)),
    linear-gradient(45deg, var(--_l)) var(--c2);
  background-size: var(--s) var(--s);
}

.About-right-Tile-3 {
  width: 100%;
  height: 31.6%;
  border-top: 2px solid rgb(0, 0, 0) !important;
  border: 10px solid rgb(0, 0, 0);
  --s: 183px;
  /* control the size*/
  --c1: #000000;
  --c2: #523333;

  --_c: 5%, #0000 75%, var(--c1) 0;
  --_g: /var(--s) var(--s) conic-gradient(at var(--_c));
  --_l: /var(--s) var(--s) conic-gradient(at 50% var(--_c));
  background:
    0 calc(7*var(--s)/10) var(--_l),
    calc(var(--s)/2) calc(var(--s)/5) var(--_l),
    calc(var(--s)/5) 0 var(--_g),
    calc(7*var(--s)/10) calc(var(--s)/2) var(--_g),
    conic-gradient(at 90% 90%, var(--c1) 75%, var(--c2) 0) 0 0/calc(var(--s)/2) calc(var(--s)/2);
}
</style>