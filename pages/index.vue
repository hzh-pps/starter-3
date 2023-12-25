<template>
  <!-- <v-card height="1000px" class="d-flex align-center">
    <div style="width: 400px; height: 400px">
      <v-parallax src="szh3.jpg">
        <div
          class="d-flex flex-column fill-height justify-center align-center text-white"
        >
          <h1 class="text-h4 font-weight-thin mb-4">Vuetify</h1>
          <h4 class="subheading">这是一个图片的视觉差</h4>
        </div>
      </v-parallax>
    </div>
  </v-card> -->
  <!-- <div style="text-shadow: 5px 5px 5px #ff0000">字体阴影</div> -->

  <div class="container"></div>
</template>
<script setup lang="ts"></script>
<style scoped>
@keyframes myfirstanimation {
  0% {
    background: red;

    left: 0px;
    top: 10px;
  }
  25% {
    background: yellow;
    transform: rotate(45deg);
    left: 100px;
    top: 10px;
  }
  50% {
    background: blue;
    transform: rotate(90deg);
    left: 200px;
    top: 10px;
  }
  75% {
    background: green;
    transform: rotate(135deg);
    left: 100px;
    top: 10px;
  }
  100% {
    background: red;
    transform: rotate(180deg);
    left: 0px;
    top: 10px;
  }
}
.container {
  position: relative;
  box-shadow: 0px 5px 5px #888888;
  border: 1px solid #000;
  width: 50px;
  height: 50px;
  animation: myfirstanimation 3s linear 2s infinite alternate;
}
.container:hover {
  animation: myfirstanimation 3s;
}
</style>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      