<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue'
import '../assets/main.css';
import '../assets/responsive.css';




const students = ref([
  { id: 1, name: 'Josephine Taiwo Kayode', image: '/images/student2.jpg', course: "frontend", description: 'Product and Graphic Designer', linkedin: 'https://www.linkedin.com/in', github: 'https://github.com/',testimonial: 'My training experience with Vnicom Tech Hub was informative and valuable. The instructors at Vnicom Tech Hub provided me with a solid foundation in design principles, techniques, and industry best practices.' },
  { id: 2, name: 'Gbenga Oladunjoye', image: '/images/student1.jpg', course: "frontend", description: 'Fullstack Developer', linkedin: 'https://www.linkedin.com/in/', github: 'https://github.com/', testimonial: 'I began my tech journey at Vnicom Tech Hub with no prior experience. During my time there, I learned the fundamentals of web development, starting from HTML and CSS to mastering JavaScript. The structured training and supportive environment helped me build real-world skills in both front-end and back-end development. I also gained practical knowledge in database management, security, and deployment. Beyond technical training, Vnicom helped me develop essential soft skills like communication, teamwork, and problem-solving. Thanks to Vnicom, I’m now confidently pursuing a career as a full-stack web developer.' },
  { id: 3, name: 'Josephine Taiwo Kayode', image: '/images/student2.jpg', course: "frontend", description: 'Product and Graphic Designer', linkedin: 'https://www.linkedin.com/in', github: 'https://github.com/',testimonial: 'My training experience with Vnicom Tech Hub was informative and valuable. The instructors at Vnicom Tech Hub provided me with a solid foundation in design principles, techniques, and industry best practices.' },
  { id: 4, name: 'Gbenga Oladunjoye', image: '/images/student1.jpg', course: "frontend", description: 'Fullstack Developer', linkedin: 'https://www.linkedin.com/in/', github: 'https://github.com/', testimonial: 'I began my tech journey at Vnicom Tech Hub with no prior experience. During my time there, I learned the fundamentals of web development, starting from HTML and CSS to mastering JavaScript. The structured training and supportive environment helped me build real-world skills in both front-end and back-end development. I also gained practical knowledge in database management, security, and deployment. Beyond technical training, Vnicom helped me develop essential soft skills like communication, teamwork, and problem-solving. Thanks to Vnicom, I’m now confidently pursuing a career as a full-stack web developer.' },
  { id: 5, name: 'Josephine Taiwo Kayode', image: '/images/student2.jpg', course: "frontend", description: 'Product and Graphic Designer', linkedin: 'https://www.linkedin.com/in', github: 'https://github.com/',testimonial: 'My training experience with Vnicom Tech Hub was informative and valuable. The instructors at Vnicom Tech Hub provided me with a solid foundation in design principles, techniques, and industry best practices.' },
  { id: 6, name: 'Gbenga Oladunjoye', image: '/images/student1.jpg', course: "frontend", description: 'Fullstack Developer', linkedin: 'https://www.linkedin.com/in/', github: 'https://github.com/', testimonial: 'I began my tech journey at Vnicom Tech Hub with no prior experience. During my time there, I learned the fundamentals of web development, starting from HTML and CSS to mastering JavaScript. The structured training and supportive environment helped me build real-world skills in both front-end and back-end development. I also gained practical knowledge in database management, security, and deployment. Beyond technical training, Vnicom helped me develop essential soft skills like communication, teamwork, and problem-solving. Thanks to Vnicom, I’m now confidently pursuing a career as a full-stack web developer.' },
  { id: 7, name: 'Gbenga Oladunjoye', image: '/images/student1.jpg', course: "design", description: 'Fullstack Developer', linkedin: 'https://www.linkedin.com/in/', github: 'https://github.com/', testimonial: 'I began my tech journey at Vnicom Tech Hub with no prior experience. During my time there, I learned the fundamentals of web development, starting from HTML and CSS to mastering JavaScript. The structured training and supportive environment helped me build real-world skills in both front-end and back-end development. I also gained practical knowledge in database management, security, and deployment. Beyond technical training, Vnicom helped me develop essential soft skills like communication, teamwork, and problem-solving. Thanks to Vnicom, I’m now confidently pursuing a career as a full-stack web developer.' },
  { id: 8, name: 'Josephine Taiwo Kayode', image: '/images/student2.jpg', course: "design", description: 'Product and Graphic Designer', linkedin: 'https://www.linkedin.com/in', github: 'https://github.com/',testimonial: 'My training experience with Vnicom Tech Hub was informative and valuable. The instructors at Vnicom Tech Hub provided me with a solid foundation in design principles, techniques, and industry best practices.' },
  { id: 9, name: 'Gbenga Oladunjoye', image: '/images/student1.jpg', course: "design", description: 'Fullstack Developer', linkedin: 'https://www.linkedin.com/in/', github: 'https://github.com/', testimonial: 'I began my tech journey at Vnicom Tech Hub with no prior experience. During my time there, I learned the fundamentals of web development, starting from HTML and CSS to mastering JavaScript. The structured training and supportive environment helped me build real-world skills in both front-end and back-end development. I also gained practical knowledge in database management, security, and deployment. Beyond technical training, Vnicom helped me develop essential soft skills like communication, teamwork, and problem-solving. Thanks to Vnicom, I’m now confidently pursuing a career as a full-stack web developer.' },

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
                    <h3>Frontend Development (vfwd-q2-2025)</h3>
                 </div>
            </section>
            <section class="students-grid-section">
                <div class="students-grid-container">
                    <div
                        v-for="student in students.filter(s => s.course === 'frontend')"
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
                </div>
            </section>
             <section class="students-title-section">
                 <div class="students-title-container">
                    <h3>Product/ Graphic Design (vfwd-q2-2025)</h3>
                 </div>
            </section>
            <section class="students-grid-section">
                <div class="students-grid-container">
                    <div
                        v-for="student in students.filter(s => s.course === 'design')"
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
                </div>
            </section>
            <section>
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
