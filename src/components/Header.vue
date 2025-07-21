<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

</script>

<template>
    <header>
      <div class="header-container">
         <div class="logo-container">
            <a href="#">
                <img src="/images/vnicom-tech-ogo.png">
            </a>
         </div>
         <div class="menu-container" :class="{ open: isMenuOpen }">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#our-programmes">Our Programmes</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <router-link to="/alumni">Alumni</router-link>
                </li>
                <li>
                    <a href="#about-us">About Us</a>
                </li>
                <li>
                    <a href="mailto:training@vnicomhub.com">Contact Us</a>
                </li>
            </ul>
         </div>
         <!-- Mobile Menu Toggle -->
         <button class="menu-toggle" @click="toggleMenu">
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 25 24"><path fill="#000" d="M3.563 6a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75m0 12a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75m.75-6.75a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5z"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"/>
            </svg>
         </button>
      </div>
    </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  /* box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); */
  z-index: 1000;
  /* background-color: #E5E5EB; */
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    padding: 10px 0;
}

.logo-container img {
    width: 150px;
}

.menu-container {
    display: flex;
    align-items: center;
}


.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}


.menu-container ul{
    display: flex;
    align-items: center;
    list-style-type: none;
}

.menu-container ul a{
    color: black;
    text-decoration: none;
    margin-left: 15px;
    font-size: 14px;
    font-weight: 500;
}

.menu-container ul a:hover{
    color: #694f00;
}

.enrol-button {
    margin-left: 20px;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .menu-container {
    display: none;   /* hide by default in mobile */
    flex-direction: column;
    width: 100%;
    background: white;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    z-index: 999;
    border-top: 1px solid #eee;
    padding: 20px 0;
  }

  .menu-container.open {
    display: flex !important;  /* force show when open */
  }

  .menu-container ul {
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    margin: 0px;
  }

  .menu-container ul li{
    margin: 5px 0;
  }

  .menu-container ul a{
    margin: 0px;
  }

  .menu-toggle {
    display: block;  /* show toggle icon */
  }
}
</style>
