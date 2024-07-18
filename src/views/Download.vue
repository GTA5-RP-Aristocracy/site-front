<script lang='ts' setup>
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div>
    <div class="download">
      <img src="../assets/images/download-car.svg" alt="download-car">
    </div>
    <div class="download__contant">
      <div class="download__contant__register">
        <p>STEP 1</p>
            <h1>register an account</h1>
              <p>you'll need an official copy of the game grand theft auto V.</p>
                <button>REGISTRATION</button>
      </div>
      <div class="download__contant__launcher">
        <p>STEP 2</p>
          <h1>download the launcher</h1>
            <p>you'll need our launcher to play on the server.</p>
              <button>DOWNLOAD</button>
      </div>
      <div class="download__contant__read">
        <p>STEP 3</p>
          <h1>read server rules</h1>
            <p>to be able to work on our server you need to know our rules that apply on the server.</p>
              <button>READ RULES</button>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>

.download img {
  width: 100%; 
  height: auto;
  box-shadow:0px 0px 10px 0px #000;
}

.download__contant {
  background-color: #000;
  color: white;
}
.download__contant__register {
}
.download__contant__launcher {
}
.download__contant__read {
}


</style>