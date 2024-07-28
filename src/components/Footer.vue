<script lang='ts' setup>

</script>

<template>
    <div class="footer">
        <div class="footer__logo">
            <div class="footer__logo__slogan">
                <div class="footer__logo__slogan-image">
                    <img src="../assets/images/server-status.svg" alt="server-status"></div>
                    <div class="footer__logo__slogan-text">
                        <h1>
                            <span>Role play Aristocracy</span>
                            <br>от игроков для игроков<br/></h1>
                        </div>
                    </div>
                    <p>
                        Role play Aristocracy is not affiliated with or endorsed by Rockstar North,
                        Take-Two Interactive or other rightsholders.</p>
                    <p>Any trademarks used belong to their respective owners. Role play Aristocracy
                        reserves all rights on rightly owned images and other visual content provided
                        GTA ROLEPLAY SERVER.</p>
                </div>
                <div class="footer__link">
                    <ul class="footer__link__list">
                        <strong>
                            Link & Resources</strong>
                        <hr>
                            <li>
                                <router-link to="/">HOME</router-link>
                            </li>
                            <li>
                                <router-link to="/shop">SHOP</router-link>
                            </li>
                            <li>
                                <router-link to="/rules">RULES</router-link>
                            </li>
                            <li>
                                <a href="https://discord.gg/K4QADYZx" target="_blank">DISCORD</a>
                            </li>
                            <li>
                                <router-link to="/download">DOWNLOAD & PLAY</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__help">
                        <strong>Need help?</strong>
                        <hr>
                            <ul class="footer__help__list">
                                <li class="footer__help__item">
                                    <a
                                        href="https://drive.google.com/file/d/1dh6nJWWeExKKdhu6vaoQ0gPanfRhRW_8/view?usp=sharing"
                                        target="_blank">Terms & Conditions</a>
                                </li>
                                <li class="footer__help__item">
                                    <a
                                        href="https://drive.google.com/file/d/1KWYs1-gWCtE8VWLKQmY0_sWu3JdMhh2L/view?usp=sharing"
                                        target="_blank">Privacy policy</a>
                                </li>
                                <li class="footer__help__item">
                                    <a
                                        href="https://drive.google.com/file/d/1MlHinEwD3iMrXxgLEZP5QDpZPCR3OF39/view?usp=sharing"
                                        target="_blank">Affiliate</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer__follow">
                            <strong>Follow Us</strong>
                            <hr>
                                <ul class="footer__follow__list">
                                    <li class="footer__follow__item">
                                        <a href="https://www.instagram.com/cykctacik/" target="_blank">Instagram</a>
                                    </li>
                                    <li class="footer__follow__item">
                                        <a href="https://vk.com/spit_in_my_face891" target="_blank">Vkontakte</a>
                                    </li>
                                    <li class="footer__follow__item">
                                        <a href="https://t.me/drifter891" target="_blank">Telegram</a>
                                    </li>
                                    <li class="footer__follow__item">
                                        <a href="https://www.youtube.com/@AzazinKreet" target="_blank">Youtube</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </template>

<style  scoped>
hr {
        border: 0;
        height: 5px;
        width: 60px;
        background: #D9D9D9;
        margin: 0;
}

  .footer {
    padding-bottom: 59px;
    display: flex;
    justify-content: space-between;
    color: black;
    gap: 180px;
}
.footer__logo {
  margin-left: 140px;
  width: 880px;
  height: auto;
}

.footer__logo__slogan {
  display: flex;
  justify-content: space-between;
}

.footer__logo__slogan-image {
  margin-top: 4px;
}

.footer__logo__slogan-text {
  margin-top: 6px;
  margin-right: 50px;
  font-family: var(--font-family-outfit);
  font-size: 7px;
}

.footer__logo__slogan-text span {
  font-size: 16px;
  font-weight: var(--font-weight-bold);
}

.footer__link {
  width: 523px;
  height: auto;
  
}
.footer__link__list {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__link__list li {
  display: inline;
}

.footer__link__list a {
  text-decoration: none;
  color: inherit; 
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer__link__list a:hover {
  color: var(--color-transition);
}

.footer__help {
  width: 297px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 14px;
  gap: 10px;
}

.footer__help__list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.footer__help__item {
  margin-bottom: 10px;
}

.footer__help a {
  text-decoration: none;
  color: inherit; 
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer__help a:hover {
  color: var(--color-transition);
}

.footer__follow {
  width: 297px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-right: 86px;
  margin-top: 14px;
  gap: 10px;
}
.footer__follow__list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.footer__follow__item {
   margin-bottom: 10px;
}

.footer__follow a {
  text-decoration: none;
  color: inherit; 
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer__follow a:hover {
 color: var(--color-transition);
}

</style>