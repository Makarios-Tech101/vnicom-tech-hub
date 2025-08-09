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
            <h2>Data Science in Python</h2>
            <p>
              Attain a valuable proficiency in data science through our comprehensive course.
            </p>
            <div class="desktop-button">
              <a href="#" class="btn-1">Apply now</a>
              <a href="https://www.vnicomhub.com/files/Data%20Science.pdf" class="btn-2">Download syllabus</a>
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
              <a href="https://www.vnicomhub.com/files/Data%20Science.pdf">Download Syllabus</a>
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
                This programme will provide you with a 
                comprehensive understanding of data science 
                concepts, techniques, and their practical 
                application using the Python programming language.
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
              <!-- <p>
                <span class="red">*</span>Passion for coding.
              </p> -->
              <h4>Training Methodology:</h4>
              <p>
                Multiple training delivery methods are employed including Lectures, Demonstrations, Practical, Self Practice and workshop using real life case study with particular reference to Nigerian situations.
              </p>
              <h4>Duration:</h4>
              <p>
                <span class="red">*</span>Four (6) months — Saturdays (10am to 3pm)
              </p>
            </div>

            <div v-else>
              <h4>Course Contents:</h4>
              <ul class="course-list">
                <li>- Introduction to python</li>
                <li>- Conditional and Looping Constructs</li>
                <li>- Python Data Structures</li>
                <li>- Python Dictionaries</li>
                <li>- Python function and classes</li>
                <li>- Pandas</li>
                <li>- Numpy</li>
                <li>- Guided Project - Exploratory Data Analysis</li>
                <li>- Machine Learning</li>
                <li>- Regression</li>
                <li>- Model Deployment</li>
                <li>- Guided Project</li>
              </ul>
              <p class="download-link">
                <a href="https://www.vnicomhub.com/files/Data%20Science.pdf" class="red-link">Click here to download full curriculum</a>
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

