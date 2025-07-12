<script setup>

</script>

<template>
    <header>
      <div class="header-container">
         <div class="logo-container">
            <img src="../../images/vnicom-tech-ogo.png">
         </div>
         <div class="menu-container">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Our Programmes</a>
                </li>
                <li>
                    <a href="#">Testimonials</a>
                </li>
                <li>
                    <a href="#">Alumni</a>
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
            </ul>
         </div>
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
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
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


</style>
