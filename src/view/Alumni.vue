<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import '../assets/main.css';
import '../assets/responsive.css'

import { ref } from 'vue'


const students = ref([
  { id: 1, name: 'Josephine Taiwo Kayode', image: '/images/student2.jpg', description: 'Product and Graphic Designer', linkedin: 'https://www.linkedin.com/in', github: 'https://github.com/',testimonial: 'My training experience with Vnicom Tech Hub was informative and valuable. The instructors at Vnicom Tech Hub provided me with a solid foundation in design principles, techniques, and industry best practices.' },
  { id: 2, name: 'Gbenga Oladunjoye', image: '/images/student1.jpg', description: 'Fullstack Developer', linkedin: 'https://www.linkedin.com/in/', github: 'https://github.com/', testimonial: 'I began my tech journey at Vnicom Tech Hub with no prior experience. During my time there, I learned the fundamentals of web development, starting from HTML and CSS to mastering JavaScript. The structured training and supportive environment helped me build real-world skills in both front-end and back-end development. I also gained practical knowledge in database management, security, and deployment. Beyond technical training, Vnicom helped me develop essential soft skills like communication, teamwork, and problem-solving. Thanks to Vnicom, I’m now confidently pursuing a career as a full-stack web developer.' },
  { id: 3, name: 'Josephine Taiwo Kayode', image: '/images/student2.jpg', description: 'Product and Graphic Designer', linkedin: 'https://www.linkedin.com/in', github: 'https://github.com/',testimonial: 'My training experience with Vnicom Tech Hub was informative and valuable. The instructors at Vnicom Tech Hub provided me with a solid foundation in design principles, techniques, and industry best practices.' },
  { id: 4, name: 'Gbenga Oladunjoye', image: '/images/student1.jpg', description: 'Fullstack Developer', linkedin: 'https://www.linkedin.com/in/', github: 'https://github.com/', testimonial: 'I began my tech journey at Vnicom Tech Hub with no prior experience. During my time there, I learned the fundamentals of web development, starting from HTML and CSS to mastering JavaScript. The structured training and supportive environment helped me build real-world skills in both front-end and back-end development. I also gained practical knowledge in database management, security, and deployment. Beyond technical training, Vnicom helped me develop essential soft skills like communication, teamwork, and problem-solving. Thanks to Vnicom, I’m now confidently pursuing a career as a full-stack web developer.' },
  { id: 5, name: 'Josephine Taiwo Kayode', image: '/images/student2.jpg', description: 'Product and Graphic Designer', linkedin: 'https://www.linkedin.com/in', github: 'https://github.com/',testimonial: 'My training experience with Vnicom Tech Hub was informative and valuable. The instructors at Vnicom Tech Hub provided me with a solid foundation in design principles, techniques, and industry best practices.' },
  { id: 6, name: 'Gbenga Oladunjoye', image: '/images/student1.jpg', description: 'Fullstack Developer', linkedin: 'https://www.linkedin.com/in/', github: 'https://github.com/', testimonial: 'I began my tech journey at Vnicom Tech Hub with no prior experience. During my time there, I learned the fundamentals of web development, starting from HTML and CSS to mastering JavaScript. The structured training and supportive environment helped me build real-world skills in both front-end and back-end development. I also gained practical knowledge in database management, security, and deployment. Beyond technical training, Vnicom helped me develop essential soft skills like communication, teamwork, and problem-solving. Thanks to Vnicom, I’m now confidently pursuing a career as a full-stack web developer.' },

])

const isModalOpen = ref(false)
const selectedStudent = ref(null)

function openModal(student) {
  selectedStudent.value = student
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
  selectedStudent.value = null
}

function truncateText(text, maxWords) {
  if (!text) return ''
  const words = text.split(' ')
  if (words.length <= maxWords) {
    return text
  }
  return words.slice(0, maxWords).join(' ') + '...'
}

</script>


<template>
    <div>
        <Header/>
        <main>
            <section>
                <div class="inner-hero-section">
                  <div class="inner-hero-container">
                      <div class="inner-hero-container-text">
                          <h1>Our Success Stories Live On</h1>
                          <p>
                            Each graduate from our program
                            carries a story worth telling. 
                            We are proud of every single step they have taken. 
                            These stories are not just achievements; they 
                            are proof that dreams do come true with the right support and learning environment.
                        </p>
                      </div>
                      <div class="inner-hero-container-button">
                        <button class="btn1">Alumni</button>
                      </div>
                  </div>
                </div>
            </section>
            <section class="students-title-section">
                 <div class="students-title-container">
                    <h3>All Courses</h3>
                 </div>
            </section>
            <section class="students-grid-section">
                <div class="students-grid-container">
                    <div
                        v-for="student in students"
                        :key="student.id"
                        class="student-card"
                        @click="openModal(student)"
                    >
                        <div class="student-image">
                            <img :src="student.image">
                        </div>
                        <div class="student-content">
                            <h4>{{ student.name }}</h4>
                            <span>{{ student.description }}</span>
                            <p>{{ truncateText(student.testimonial, 15) }}</p>
                            <div class="social-links">
                                <a v-if="student.linkedin" :href="student.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a v-if="student.github" :href="student.github" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>    
                        </div>
                    </div>
                    <!-- Modal Overlay -->
                    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
                        <div class="modal-content" @click.stop>
                            <img
                            v-if="selectedStudent"
                            :src="selectedStudent.image"
                            :alt="selectedStudent.name"
                            />
                            <h3>{{ selectedStudent?.name }}</h3>
                            <span>{{ selectedStudent?.description }}</span>
                            <p>{{ selectedStudent?.testimonial }}</p>
                            <button @click="closeModal" style="margin-top: 1rem;">Close</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </div>
</template>
