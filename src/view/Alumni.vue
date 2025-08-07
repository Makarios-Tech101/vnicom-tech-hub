<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import '../assets/main.css';
import '../assets/responsive.css'


const alumniList = ref([
  {
    name: 'Josephine Taiwo Kayode',
    role: 'Product Designer at Vnicom Solutions',
    image: '/images/josephine.jpg',
    companyLogo: '/images/vnicom.jpg',
    description: 'One piece of advice I would offer to someone starting their journey in IT is to embrace a lifelong learning mindset. The field of technology is constantly evolving, and staying up-to-date with the latest advancements is essential.'
  },
  {
    name: 'Mayowa Oyeniran',
    role: 'Application Developer at Nova Bank',
    image: '/images/frontend.png',
    companyLogo: '/images/nova-bank.jpg',
    description: 'Determination and Hardwork pays a lot. '
  },
  {
    name: 'Eniiyi',
    role: 'Works at Zenith Bank',
    image: '/images/Eniiyi-2.jpeg',
    companyLogo: '/images/zenith-bank.png',
    description: 'Just Do It'
  },
  {
    name: 'Oladunjoye, Gbenga Oluwaferanmi',
    role: 'Fullstack Developer at Vnicom Solutions',
    image: '/images/frontend.png',
    companyLogo: '/images/vnicom.jpg',
    description: 'The journey of a thousand miles begins with a single step. I am grateful to Vnicom Tech Hub for providing me with the opportunity to take that first step towards my career in tech.'
  },
  {
    name: 'Daniel Bolarinwa',
    role: 'UI/UX Tutor at Vnicom Tech Hub',
    image: '/images/daniel.png',
    companyLogo: '/images/vnicom-tech-ogo.png',
    description: 'Such individual should never relent or give up on himself/herself.'
  },
  {
    name: 'Oke Tobiloba Elijah',
    role: 'Graphics, UI/UX Designer (Self Employed)',
    image: '/images/frontend.png',
    companyLogo: '/images/VnicomTechlogo.png',
    description: 'The world is constantly evolving, and technology is advancing every day. It is a driving force in nearly every aspect of life. My advice is to take action now: every step you take today will bring you closer to success.'
  }
])

const selectedAlumni = ref(null)

function openModal(alumni) {
  selectedAlumni.value = alumni
}

function closeModal() {
  selectedAlumni.value = null
}





const showScrollTop = ref(false);

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 200; 
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
})

</script>


<template>
    <div>
        <Header/>
        <main>
            <section>
                <div class="inner-hero-section">
                  <div class="inner-hero-container">
                      <div class="inner-hero-container-text">
                          <h1>Alumni Success Stories</h1>
                          <p>
                            Vnicom Tech Hub has empowered over 110 enthusiast,
                            helping them develop the digital skills they need 
                            to boost their careers.
                            <!-- Each graduate from our program
                            carries a story worth telling. 
                            We are proud of every single step they have taken. 
                            These stories are not just achievements; they 
                            are proof that dreams do come true with the right support and learning environment. -->
                        </p>
                      </div>
                      <div class="inner-hero-container-button">
                        <button class="btn1">Alumni</button>
                      </div>
                  </div>
                </div>
            </section>
            <!-- <section class="students-title-section">
                 <div class="students-title-container">
                    <h3>Success Stories</h3>
                 </div>
            </section> -->
             <section class="alumnis-section" id="our-alumnis">
               <div class="alumnis-title">
                  <h2>Success Stories</h2>
               </div>
               <div class="alumni-grid" data-aos="fade-up" data-aos-duration="2000">
                  <div v-for="(alumni, index) in alumniList" :key="index" class="grid-items">
                     <div class="grid-image">
                         <img :src="alumni.image" />
                     </div>
                     <div class="grid-content">
                        <h4>{{ alumni.name }}</h4>
                        <p>{{ alumni.role }}</p>
                        <!-- <img :src="alumni.companyLogo" style="width: 50px;" /> -->
                     <div>
                        <button @click="openModal(alumni)">View Quote</button>
                     </div>
                     </div>
                  </div>
               </div>
            </section>
           <!-- Modal -->
            <div v-if="selectedAlumni" class="modal-overlay" @click.self="closeModal">
               <div class="modal-content">
                  <div class="modal-content-profile">
                     <div>
                        <img :src="selectedAlumni.image" alt="alumni photo" class="modal-image" />
                     </div>
                     <div>
                        <h2>{{ selectedAlumni.name }}</h2>
                        <p>{{ selectedAlumni.role }}</p>
                     </div>
                  </div>
                  <div class="modal-content-description">
                      <p>{{ selectedAlumni.description }}</p>
                  </div>
                   <div class="close-button">
                      <button @click="closeModal">Close</button>
                   </div>
               </div>
            </div>  
        </main>
        <Footer/>
        <div>
            <a href="https://vnicomhub.slack.com/signup#/domain-signup" target="_blank" class="slack-button">
              <img src="/images/slack-icon.png" alt="slack">
            </a>
        </div>  
        <div>
                <!-- Scroll to Top Button -->
          <button v-if="showScrollTop" @click="scrollToTop" class="scroll-top-button">
              ↑
          </button>
        </div>  
    </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-image: url("/images/why-choose-blue.png");
  background-size: cover;
  /* background: white; */
  padding: 30px;
  border-radius: 8px;
  width: 90%;
  max-width: 350px;
  max-height: 400px;
}

.modal-content .modal-content-profile img {
   width: 50px;
   height: 50px;
   border-radius: 50%;
   margin-right: 10px;
   object-fit: cover;
   display: block;
   object-position: top;
}

.modal-content-profile {
   display: flex;
   align-items: center;
}

.modal-content-profile h2 {
   margin: 0px;
   font-size: 18px;
   line-height: 15px;
   color: #010336;
} 

.modal-content-profile p {
   margin: 5px 0px 0px 0px;
   font-size: 15px;
   font-weight: 400;
   color: #010336;
}

.modal-content-description p {
   margin: 20px 0px 20px 0px;
   font-size: 16px;
   font-weight: 400;
   color: #010336;
}

.modal-content .close-button {
   text-align: center;
   margin: 20px 0px 0px 0px;
}

.modal-content .close-button button {
   color:#0006b3;
   background-color: transparent;
   border: none;
   cursor: pointer;
}




</style>
