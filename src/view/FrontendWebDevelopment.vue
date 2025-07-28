<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import '../assets/main.css';
import '../assets/responsive.css';

const activeTab = ref('overview')

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
    <Header />
    <main>
      <section class="courses-inner-section">
        <div class="courses-inner-container">
          <div class="courses-inner-content">
            <h2>Frontend Web Development Course</h2>
            <p>
              Start building responsive websites with HTML, CSS, and JavaScript: a versatile skill set with powerful applications in a variety of design
            </p>
            <div class="desktop-button">
              <a href="#" class="btn-1">Apply now</a>
              <a href="https://www.vnicomhub.com/files/frontend-syllabus.pdf" class="btn-2">Download syllabus</a>
            </div>
          </div>
          <div class="courses-empty-inner"></div>
        </div>
      </section>
      <section class="">
        <div class="mobile-links">
           <div class="links">
              <a href="#">Apply Now</a>
           </div>
           <div class="links">
              <a href="https://www.vnicomhub.com/files/frontend-syllabus.pdf">Download Syllabus</a>
           </div>
        </div>
      </section>
      <section class="tabs-section">
        <div class="tabs-container">
          <div class="tab-buttons">
            <div>
                <button id="btn-1" :class="{ active: activeTab === 'overview' }" @click="activeTab = 'overview'">
                  Overview
                </button>
            </div>
            <div>
                <button id="btn-2" :class="{ active: activeTab === 'content' }" @click="activeTab = 'content'">
                  Course Content
                </button>
            </div>
          </div>

          <div class="tab-content">
            <div v-if="activeTab === 'overview'">
              <p>
                 Front-end engineers work with designers 
                 to create clean, beautiful, functional 
                 and fast websites. This programme will 
                 teach you everything you need to know 
                 to become a front end developer.
              </p>
              <h4>Prerequisite:</h4>
              <p>
                <span class="red">*</span>There is no coding experience 
                required for this course but participants 
                must be computer literate and know how to 
                navigate their way around it.
              </p>
              <p>
                <span class="red">*</span>A laptop with at least 4GB ram.
              </p>
              <p>
                <span class="red">*</span>Passion for coding.
              </p>
              <h4>Training Methodology:</h4>
              <p>
                Multiple training delivery methods are employed including Lectures, Demonstrations, Practical, Self Practice and workshop using real life case study with particular reference to Nigerian situations.
              </p>
              <h4>Duration:</h4>
              <p>
                <span class="red">*</span>Four (4) months, twice a 
                week — Mondays and Wednesdays, from 10:00 a.m. 
                to 1:00 p.m.
              </p>
            </div>

            <div v-else>
              <h4>Course Contents:</h4>
              <ul class="course-list">
                <li>- Introduction to Web Development/Html</li>
                <li>- Styling HTML web pages Overview of CSS</li>
                <li>- Intermediate CSS Crafting Responsive Layouts</li>
                <li>- Bootstrap and responsive Design Introduction to Bootstrap</li>
                <li>- JavaScript Fundamentals and DOM</li>
                <li>- JavaScript HTML DOM</li>
                <li>- ES6 and JavaScript Modules New Variables</li>
                <li>- JavaScript Objects</li>
                <li>- JavaScript Functions</li>
                <li>- JavaScript Classes</li>
                <li>- Asynchronous JavaScript</li>
                <li>- JavaScript Objects (ii)</li>
                <li>- JavaScript Browser (BOM)</li>
                <li>- JavaScript Web APIs</li>
                <li>- JavaScript AJAX</li>
                <li>- JavaScript JSON</li>
                <li>- Final/Capstone Project</li>
              </ul>
              <p class="download-link">
                <a href="https://www.vnicomhub.com/files/frontend-syllabus.pdf" class="red-link">Click here to download full curriculum</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />

    <!-- Slack Button -->
    <div>
      <a href="https://vnicomhub.slack.com/signup#/domain-signup" target="_blank" class="slack-button">
        <img src="/images/slack-icon.png" alt="slack" />
      </a>
    </div>

    <!-- Scroll to Top Button -->
    <div>
      <button v-if="showScrollTop" @click="scrollToTop" class="scroll-top-button">
        ↑
      </button>
    </div>
  </div>
</template>

