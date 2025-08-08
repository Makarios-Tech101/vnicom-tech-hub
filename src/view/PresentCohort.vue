<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue'
import '../assets/main.css';
import '../assets/responsive.css';




const students = ref([
  { id: 1, name: 'Oladapo', src: '/images/oladapo.JPG', course: "Frontend Development", description: 'Frontend Developer', linkedin: 'https://www.linkedin.com/in', github: 'https://github.com/',testimonial: 'My training experience with Vnicom Tech Hub was informative and valuable.'},
  { id: 2, name: 'David Nwachukwu', src: '/images/david.JPG', course: "Frontend Development", description: 'Frontend Developer', linkedin: 'https://www.linkedin.com/in', github:''},
  { id: 3, name: 'Segun Soyemi', src: '/images/segun.JPG', course: "Frontend Development", description: 'Frontend Developer', linkedin: 'https://www.linkedin.com/in', github:''},
  { id: 4, name: 'John Omotoyinbo', src: '/images/bolu.JPG', course: "Frontend Development", description: 'Frontend Developer', linkedin: 'https://www.linkedin.com/in', github:''},
  { id: 5, name: 'Daniel Ogbara', src: '/images/daniel.JPG', course: "Frontend Development", description: 'Frontend Developer', linkedin: 'https://www.linkedin.com/in', github:''},
  { id: 6, name: 'Erijesu Aladejesu', src: '/images/erijesu.JPG', course: "Frontend Development", description: 'Frontend Developer', linkedin: 'https://www.linkedin.com/in', github:''},
  { id: 7, name: 'Dorcas Akinyemi', src: '/images/grid-img3.jpg', course: "Frontend Development", description: 'Frontend Developer', linkedin:'https://www.linkedin.com/in' , github:''},
  { id: 8, name: 'Malik Idowu', src: '/images/malik.JPG', course: "Frontend Development", description: 'Frontend Developer', linkedin:'https://www.linkedin.com/in' , github:''},
  { id: 9, name: 'Kabiru', src: '/images/Kabiru.jpg', course: "Frontend Development", description: 'Frontend Developer', linkedin:'https://www.linkedin.com/in' , github:''},
  { id: 10, name: 'Samuel Boluwatife', src: '/images/samuel.jpg', course: "Frontend Development", description: 'Frontend Developer', linkedin:'https://www.linkedin.com/in' , github:''},
  { id: 11, name: 'Muiz Ogundiran', src: '/images/muiz.jpg', course: "Fullstack Development", description: 'Frontend Developer', linkedin:'https://www.linkedin.com/in' , github:''},
  { id: 12, name: 'Joshua Bolanle', src: '/images/joshua.jpg', course: "Fullstack Development", description: 'Frontend Developer', linkedin:'https://www.linkedin.com/in' , github:''},
])


const selectedImage = ref(null);
const selectedTitle = ref(null);


const openModal = (image) => {
  selectedImage.value = image.src;
  selectedTitle.value = image.title;
};

const closeModal = () => {
  selectedImage.value = null;
  selectedTitle.value = null;
};

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
                          <h1>We Are Growing Together</h1>
                          <p>
                            From the first class to their ongoing 
                            projects, we see brilliance taking shape. 
                            That's why we create space to showcase 
                            their learning process, the milestones 
                            they achieve, and the passion that keeps 
                            them going.
                        </p>
                      </div>
                      <div class="inner-hero-container-button">
                        <button class="btn1">Present Cohort</button>
                      </div>
                  </div>
                </div>
            </section>
            <section class="students-title-section">
                 <div class="students-title-container">
                    <h3>All Courses</h3>
                 </div>
            </section>
            <section class="students-section">
                <div class="student-container">
                    <div class="student" >
                        <img 
                        v-for="(student, index) in students" 
                        :key="index"
                        :src="student.src" 
                        :alt="student.title"
                        alt="student Image" 
                        class="student-item" 
                        @click="openModal(student)"
                        :class="{'tall': index % 5 === 0, 'wide': index % 7 === 0}"
                        data-aos="fade-up" data-aos-duration="2000"
                        
                        />
                    </div>
                </div>
                <!-- Modal -->
                <div v-if="selectedImage" class="modal" @click="closeModal">
                    <div class="modal-content" @click.stop>
                        <button class="close-button" @click="closeModal">&times;</button>
                        <img 
                        :src="selectedImage" 
                        alt="Modal Image" 
                        class="modal-image"
                        >
                        <h3 class="modal-title">{{ selectedTitle }}</h3> 
                    </div>
                </div>
            </section>
        </main>
        <Footer />
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

.students-section {
    width: 90%;
    margin: 0px auto 70px auto;
    max-width: 1400px;   
    min-width: 320px;
}
.student-container {
  padding: 7px;
  z-index: 1;
}

.student {
  /* display: grid;*/
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-count: 4;
  gap: 05px;
  cursor: pointer;
  /* grid-template-rows: repeat(3, 250px); */
  /* justify-content: center; */
}

.student-item {
  width: 100%;
  height: 100%;
  /* display: block; */
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.tall {
  grid-row: span 2;
}

.wide {
  grid-column: span 2;
}

.student-item:hover {
  filter: brightness(0.8);
}

</style>
