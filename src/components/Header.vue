<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const isDropdownOpen = ref(false);


const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

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
                <li id="menu-item">
                    <a href="#">Home</a>
                </li>
                <li id="menu-item">
                    <a href="#our-programmes">Our Programmes</a>
                </li>
                <li id="menu-item">
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li class="dropdown" id="menu-item" >
                      <a href="#"  @click.prevent="toggleDropdown">Our Students <span style="font-size: 15px;">&#x2BC6;</span>  </a>
                      <ul class="dropdown-menu" :class="{ 'open': isDropdownOpen }">
                          <li class="dropdown-item"><router-link to="/present-cohort">Present Cohort</router-link></li>
                          <li class="dropdown-item"><router-link to="/alumni">Alumni</router-link></li>
                      </ul>
                </li>
                <li id="menu-item">
                    <a href="#about-us">About Us</a>
                </li>
                <li id="menu-item">
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
    max-width: 1400px;   
    min-width: 320px;
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

.menu-container ul #menu-item a{
    color: rgb(1, 3, 54);
    text-decoration: none;
    margin-left: 20px;
    font-size: 16px;
    font-weight: 600;
    font-family: "Mukta", sans-serif;
}

.menu-container ul a:hover{
    color: #694f00;
}

.enrol-button {
    margin-left: 20px;
}

/* Dropdown Menu */
.dropdown {
  position: relative;
}

ul.dropdown-menu {
    display: flex ;
    flex-direction: column;
    align-items: flex-start;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}

.dropdown-menu {
   /* display: none; */
  position: absolute;
  top: 100%;
  /* left: -40%; */
  background: rgba(227, 227, 227);
  color: rgb(1, 3, 54);
  width: 230px;
  padding: 10px 0;
  margin-top: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}

.dropdown-menu .dropdown-item {
  padding: 10px;
  margin-left: 10px;
}

/* Show dropdown on hover (Desktop) */
.dropdown:hover .dropdown-menu,
.dropdown-menu:hover {
    visibility: visible;
    opacity: 1;
}

.dropdown-menu li a {
  color: white;
  display: block;
  font-size: 13px;
}


.dropdown-menu.open {
  display: block;
  opacity: 1;
  visibility: visible;
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
    width: 100%;
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

  .dropdown-menu {
    display: block !important;
    position: static !important;
    background: white;
    width: 100%;
    box-shadow: none;
    opacity: 1 !important;
    visibility: visible !important;
    transition: none;
  }
   

  .dropdown-menu li a {
      padding: 5px 0px;
      font-size: 12px;
  }
  

  .dropdown-menu .dropdown-item { 
      padding: 0px;
      margin: 0px 0px 0px 10px;

      display: block;
   }

}
</style>
