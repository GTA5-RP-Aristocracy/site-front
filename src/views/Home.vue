<script lang='ts' setup>
import Sponsors from "../components/Sponsors.vue";
import Footer from "../components/Footer.vue";
import WhiteLine from "../components/WhiteLine.vue";

</script>

<template>
    <div class="home">
        <div class="home__content">
            <div class="home__text">
                <div class="home__rose">
                    <img src="../assets/images/rose.png" alt="rose">
                  </div>
                    <h1>GTA
                        <span>V</span>
                        Role play
                        <strong>Aristocracy</strong>
                    </h1>
                    <h2>{{ $t('description1' )}}
                    </h2>
                    <h2>{{ $t('description2' )}}</h2>
                    <div class="home__btn">
                        <button>{{ $t('play_now') }}</button>
                        <button class="home__btn-video">{{ $t('learn_more' )}}</button>
                    </div>
                    <div class="home__clock">
                        <!-- test -->
                        <img src="../assets/images/clock.png" alt="clock"></div>
                    </div>
                    <div class="home__hero">
                        <img src="../assets/images/hero.png" alt="hero"></div>
                    </div>
               <WhiteLine/>
                </div>
                <Sponsors/>
                <Footer id="only__home"/>
            </template>

<style scoped>

  .home {
    width: 100%;
    height: 900px;
    color: white;
    background-color: black;
    box-shadow:0px 0px 5px 0px #000;
  }
 
  .home__content {
    margin-left: 190px;
    display: flex;
    justify-content: space-between;
  }
  
  .home__text {
    margin-top: 50px;
  }
  
  .home__text h1 {
    font-size: 56px;
    font-family: var(--font-family-inter);
    font-weight: var(--font-weight-black);
  }
  
  .home__text h1 span {
    color: rgb(49, 126, 25);
  }
  
  .home__text h1 strong {
    color: rgb(173, 16, 16);
    font-family: var(--font-family-satisfy);
    margin-left: 50px;
    font-size: 66px;
    z-index: 2;
  }
  
  .home__text h2 {
    font-family: var(--font-family-outfit);
    font-weight: var(--font-weight-light);
    font-size: 20px;
  }
  
.home__btn {
  display: flex;
  gap: 30px;
}

.home__btn-video {
  background-color:  rgb(173, 16, 16);
  color: white;
}


  .home__text button {
    border: none;
    border-radius: 10%;
    width: 160px;
    height: 50px;
    font-family: var(--font-family-outfit);
    font-weight: var(--font-weight-bold);
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, transform 0.3s ease;
  }
  
  .home__text button:hover {
    background-color: #FFA500;
    color: white;
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .home__text button:focus {
    outline: none;
  }
  
  .home__text button:active {
    transform: scale(0.95);
  }
  
  .home__hero {
    height: 835px;
    width: 900px;
  }

  /* test */
  .home__clock img {
  position: absolute;
  margin-top: -30px;
  margin-left: -65px;
  width: 60px;
  height: auto;
  z-index: 1;
  transform: rotate(15deg);
}

.home__rose img{
    position: absolute;
    margin-top: 160px;
    margin-left: 285px;
    width: 100px;
    transform: rotate(325deg);
    height: auto;
    z-index: 1;
    opacity: 80%;
    box-shadow:0px 0px 15px 0px #000;
}


  #only__home {
    margin-top: 60px;
  }

  @media (max-width: 1484px) {
     .home__text {
    margin-top: 50px;
  }
  
  .home__text h1 {
    font-size: 44px;
    font-family: var(--font-family-inter);
    font-weight: var(--font-weight-black);
  }
  
  
  .home__text h1 strong {
    color: rgb(173, 16, 16);
    font-family: var(--font-family-satisfy);
    margin-left: 50px;
    font-size: 50px;
    z-index: 2;
  }
  
  .home__text h2 {
    font-family: var(--font-family-outfit);
    font-weight: var(--font-weight-light);
    font-size: 16px;
  }

  .home__rose img{
    position: absolute;
    margin-top: 125px;
    margin-left: 235px;
    width: 70px;
    transform: rotate(325deg);
    height: auto;
    z-index: 1;
    opacity: 80%;
    box-shadow:0px 0px 15px 0px #000;
}
  
  }
</style>
