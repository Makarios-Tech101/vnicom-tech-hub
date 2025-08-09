<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue'
import '../assets/main.css';
import '../assets/responsive.css';




const students = ref([
  { id: 1, 
    name: 'Oladapo', 
    src: '/images/oladapo.JPG', 
    profile: "Student of Bowen University", 
    review: 'My training experience with Vnicom Tech Hub was informative and valuable.', 
    linkedin: 'https://www.linkedin.com/in', 
    github: 'https://github.com/',
  },
  { id: 2, 
    name: 'David Nwachukwu', 
    src: '/images/david.JPG', 
    profile: "Coming soon", 
    review: 'Coming soon', 
    linkedin: 'https://www.linkedin.com/in', 
    github:'https://github.com/'
  },
  { id: 3, 
    name: 'Segun Soyemi', 
    src: '/images/segun.JPG', 
    profile: "Coming soon", 
    review: 'VNICOM tech hub has helped me navigate my path in front-end web development', 
    linkedin: 'https://www.linkedin.com/in', 
    github:'https://github.com/'
  },
  { id: 4, 
    name: 'John Omotoyinbo', 
    src: '/images/bolu.JPG', 
    profile: "Student of Olabisi Onabanjo University", 
    review: 'Its been amazing so far. Amazing people!', 
    linkedin: 'https://www.linkedin.com/in', 
    github:'https://github.com/'
  },
  { id: 5, 
    name: 'Daniel Ogbara', 
    src: '/images/daniel.JPG', 
    profile: "Coming soon", 
    review: 'Coming soon', 
    linkedin: 'https://www.linkedin.com/in', 
    github:'https://github.com/'
  },
  { id: 6, 
    name: 'Erijesu Aladejesu', 
    src: '/images/erijesu.JPG', 
    profile: "Coming soon", 
    review: 'Coming soon', 
    linkedin: 'https://www.linkedin.com/in', 
    github:'https://github.com/'
  },
  { id: 7, 
    name: 'Dorcas Akinyemi', 
    src: '/images/grid-img3.jpg', 
    profile: "Fashion Designer", 
    review: 'Great learning environment with lovely tutors.', 
    linkedin:'https://www.linkedin.com/in' , 
    github:'https://github.com/'
  },
  { id: 8, 
    name: 'Malik Idowu', 
    src: '/images/malik.JPG', 
    profile: "Student of ", 
    review: 'Vnicom tech hub has all the resources for learning down from front end web development to back-end.They offer quality services.', 
    linkedin:'https://www.linkedin.com/in' , 
    github:'https://github.com/'
  },
  { id: 9, 
    name: 'Kabiru', 
    src: '/images/Kabiru.jpg', 
    profile: "Comin soon", 
    review: 'Coming soon', 
    linkedin:'https://www.linkedin.com/in' , 
    github:'https://github.com/'
  },
  { id: 10, 
    name: 'Samuel Boluwatife', 
    src: '/images/samuel.jpg', 
    profile: "Student of ", 
    review: 'vnicom tech hub offers quality services', 
    linkedin:'https://www.linkedin.com/in' , 
    github:'https://github.com/'
  },
  { id: 11, 
    name: 'Muiz Ogundiran', 
    src: '/images/muiz.jpg', 
    profile: "Student of", 
    review: 'It’s easy to learn with Vnicom tech hub, I really want to appreciate their effort in the computer science world , Thank You !', 
    linkedin:'https://www.linkedin.com/in' , 
    github:'https://github.com/'
  },
  { id: 12, 
    name: 'Joshua Bolanle', 
    src: '/images/joshua.jpg', 
    profile: "Student of Mountaintop University", 
    review: 'Was able to practically learn more about HTML and CSS and more course', 
    linkedin:'https://www.linkedin.com/in' , 
    github:'https://github.com/'
  },
])

const selectedStudent = ref(null);

const openModal = (student) => {
  selectedStudent.value = student;
};

const closeModal = () => {
  selectedStudent.value = null;
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
                          :alt="student.name"
                          class="student-item" 
                          @click="openModal(student)"
                          :class="{'tall': index % 5 === 0, 'wide': index % 7 === 0}"
                          data-aos="fade-up" 
                          data-aos-duration="2000"
                        />
                    </div>
                </div>
                <!-- Modal -->
                <div v-if="selectedStudent" class="modal-overlay" @click="closeModal">
                    <div class="modal-content" @click.stop>
                        <div class="top-buttons">
                           <button class="star-button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f5b800" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f5b800" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f5b800" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"/> 
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f5b800" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f5b800" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"/>
                              </svg>
                          </button>
                          <button class="close-button" @click="closeModal">&times;</button>
                        </div>
                        <div>
                          <p>{{ selectedStudent.review }}</p>
                        
                        </div>
                        <div class="modal-social-links">
                          <a v-if="selectedStudent.linkedin" :href="selectedStudent.linkedin" id="linkedin" target="_blank">LinkedIn</a>
                          <a v-if="selectedStudent.github" :href="selectedStudent.github" id="github" target="_blank">GitHub</a>
                        </div>
                        <div class="modal-content-profile">
                          <div>
                            <img 
                                :src="selectedStudent.src" 
                                alt="Modal Image" 
                                class="modal-image"
                              >
                          </div>
                          <div>
                            <h6>{{ selectedStudent.name }}</h6>
                            <p>{{ selectedStudent.profile }}</p>
                          </div>
                        </div>
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
  background: white;
  padding: 20px 30px 30px 30px;
  border-radius: 8px;
  width: 90%;
  max-width: 350px;
  max-height: 400px;
}

.modal-overlay img {
  width:50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
}

.modal-content p{
  color: rgb(1, 3, 54);
}

.top-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
}

.top-buttons button {
  background: transparent;
  border: none;
  padding:0px;
}

.top-buttons .close-button {
  font-size: 20px;
  cursor: pointer;
}

.modal-content-profile {
  display: flex;
  align-items: center;
}

.modal-content-profile h6 {
  margin: 0px;
  font-size: 16px;
  line-height: 15px;
  color: rgb(1, 3, 54);
}

.modal-content-profile p{
  margin: 0px;
  font-size: 13px;
  font-size: 12px;
  color: rgb(1, 3, 54);
}

.modal-social-links {
  display: flex;
  margin: 20px 0px;
}

.modal-social-links a {
  margin-right: 10px;
  color: #0006b3;
  text-decoration: none;
}

@media (max-width: 576px) {
    .student {
        column-count: 1;
    }
}

</style>
