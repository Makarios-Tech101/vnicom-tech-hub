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
            <h2>Fullstack Development Course</h2>
            <p>
              Learn to build full-stack web applications 
              using .NET: a free, open-source, cross-platform 
              framework for creating modern apps and powerful 
              cloud services, while integrating frontend 
              technologies using HTML, CSS, and JavaScript.
            </p>
            <div class="desktop-button">
              <a href="#" class="btn-1">Apply now</a>
              <a href="https://www.vnicomhub.com/files/Backend.pdf" class="btn-2">Download syllabus</a>
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
              <a href="https://www.vnicomhub.com/files/fullstack.zip">Download Syllabus</a>
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
                 Full-stack engineers are responsible 
                 for both the server-side and client-side 
                 of an application. This program will focus 
                 on teaching you how to write backend code 
                 using C# and .NET, as well as integrating 
                 it with frontend technologies.
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
                <span class="red">*</span>Six (6) months, twice a week — Mondays and Wednesdays, from 2:00 p.m. to 5:00 p.m.
              </p>
            </div>

            <div v-else>
               <div class="list-of-courses-container">
                   <div class="frontend-course">
                        <h4>Frontend Course Content</h4>
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
                   <div class="backend-course">
                       <h4>Backend Course Contents:</h4>
                        <ul class="course-list">
                            <li>- C#: Introduction And C# Basics</li>
                            <li>- C#: Logic, Control, Flow, And Conditionals!</li>
                            <li>- C#: Methods!</li>
                            <li>- C#: Arrays and Loops</li>
                            <li>- C#: Working With Files and Handling Exceptions</li>
                            <li>- C#: OOP Concepts - Classes and Objects</li>
                            <li>- C#: Reference and Value Types</li>
                            <li>- C#: Lists and Linq 1</li>
                            <li>- C#: Getting Started ASP .Net Core MVC</li>
                            <li>- C#: ASP .Net Core MVC: Controllers</li>
                            <li>- C#: ASP .Net Core MVC: The View</li>
                            <li>- C#: ASP .Net Core MVC: Routing</li>
                            <li>- C#: Core Databases</li>
                            <li>- C# ASP.NET Core: .NET Core Web API</li>
                        </ul>
                        <p class="download-link">
                            <a href="https://www.vnicomhub.com/files/Backend.pdf" class="red-link">Click here to download full curriculum</a>
                        </p>
                   </div>
               </div>
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

