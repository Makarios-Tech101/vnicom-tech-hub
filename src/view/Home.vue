<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import '../assets/main.css';
import '../assets/responsive.css';



const counters = ref([
  { target: 3, current: 3, suffix: '+', label: 'Years of Experience', loop: false },
  { target: 120, current: 0, suffix: '+', label: 'Students Trained', loop: true },
  { target: 300, current: 0, suffix: '+', label: 'Community Members', loop: true },
  { target: 99, current: 0, suffix: '%', label: 'Happy Students', loop: true },
]);

const animateCounter = (item) => {
  const increment = item.target / 100;

  const update = () => {
    if (item.current < item.target) {
      item.current = Math.min(item.current + increment, item.target);
      item.current = Math.round(item.current);
      requestAnimationFrame(update);
    } else if (item.loop) {
      // Only reset if loop is true
      setTimeout(() => {
        item.current = 0;
        update();
      }, 7000); // 7 seconds pause before replay
    }
  };

  update();
};

onMounted(() => {
  counters.value.forEach(animateCounter);
});


const testimonials = ref([
  {
    name: 'Josephine Taiwo Kayode',
    track: 'Product Designer',
    quote: 'My training experience with Vnicom Tech Hub was informative and valuable. The instructors at Vnicom Tech Hub provided me with a solid foundation in design principles, techniques, and industry best practices.',
    image: '../../images/grid-img7.jpg',
  },
  {
    name: 'Gbenga Oladunjoye',
    track: 'Full Stack We Developer',
    quote: 'I began my tech journey at Vnicom Tech Hub with no prior experience. During my time there, I learned the fundamentals of web development, starting from HTML and CSS to mastering JavaScript. The structured training and supportive environment helped me build real-world skills in both front-end and back-end development. I also gained practical knowledge in database management, security, and deployment. Beyond technical training, Vnicom helped me develop essential soft skills like communication, teamwork, and problem-solving. Thanks to Vnicom, I’m now confidently pursuing a career as a full-stack web developer.',
    image: '../../images/grid-img8.jpg',
  },
  {
    name: 'Fatai Balikis Opeyemi',
    track: 'UI/UX Designer',
    quote: 'Vnicom Tech Hub eased and sped up my learning process. I must say it is a platform specifically ordained by God for me to be trained in. The 3 months learning experience I had in their bootcamp changed my story for the better. Everything I can design today was as a result of the training I had in the bootcamp. I was not just trained to design, I had access to a lot of helpful information online. I am a proud product of this learning platform. The experience was tremendous. Shout out to My tutor Mr.Akinjide Stanley',
    image: '../../images/grid-img7.jpg',
  },
  { name: 'Josephine Taiwo Kayode',
    track: 'Product Designer',
    quote: 'My training experience with Vnicom Tech Hub was informative and valuable. The instructors at Vnicom Tech Hub provided me with a solid foundation in design principles, techniques, and industry best practices.',
    image: '../../images/grid-img7.jpg',
  },
  {
    name: 'Fatai Balikis Opeyemi',
    track: 'UI/UX Designer',
    quote: 'Vnicom Tech Hub eased and sped up my learning process. I must say it is a platform specifically ordained by God for me to be trained in. The 3 months learning experience I had in their bootcamp changed my story for the better. Everything I can design today was as a result of the training I had in the bootcamp. I was not just trained to design, I had access to a lot of helpful information online. I am a proud product of this learning platform. The experience was tremendous. Shout out to My tutor Mr.Akinjide Stanley',
    image: '../../images/grid-img7.jpg',
  }, 
]);

const currentIndex = ref(0);

const currentTestimonial = computed(() => testimonials.value[currentIndex.value]);

const next = () => {
  currentIndex.value =
    (currentIndex.value + 1) % testimonials.value.length;
};

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const goToTestimonial = (index) => {
  currentIndex.value = index;
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
    <div class="layout-wrapper">
        <Header />
        <main>
            <section class="enroll-container">
                <p>Registration ongoing!🎉🎊🎉 <a href="#"> &#8212; Click here to enroll now </a> </p>
            </section>

            <section>
                <div class="hero-section">
                  <div class="hero-container">
                      <div class="hero-container-text">
                          <h1>New to Software Engineering?</h1>
                          <h1>Kickstart your tech career.</h1>
                          <p>Learn highly-sought after tech skills with vnicom tech hub.</p>
                      </div>
                      <div class="hero-container-button">
                        <button class="btn1">Expore all programmes</button>
                        <button class="btn2">class will be starting soon <span id="enroll-link">Enroll now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9"><path fill="rgb(0, 6, 177)" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="rgb(0, 6, 177)" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/></svg></span></button>
                      </div>
                  </div>
                </div>
            </section>

            <section class="future-section">
                <div class="future-section-container">
                    <div class="future-image">
                        <img src="/images/why-us.jpg" alt="About Us" />
                    </div>
                    <div class="future-content">
                        <h2>The Future Is Here, <br> Are You Ready For The It</h2>
                        <p>
                            The widespread application of Information 
                            and Communication Technology (ICT) 
                            across virtually all aspects of 
                            society highlights a future deeply 
                            reliant on technology. From smart 
                            devices enhancing everyday living in 
                            modern homes to the emergence of 
                            autonomous vehicles revolutionizing transportation, technology is reshaping the world around us.  
                        </p>
                        <p>
                            At Vnicom Tech Hub, we empower you to thrive 
                            in this dynamic landscape by offering training 
                            in some of the most sought-after IT skills. 
                            Our programs are designed not only to kickstart 
                            your IT career but also to provide you with the 
                            expertise to bring your own innovative ideas and 
                            visions to life, ensuring you remain at the forefront of 
                            technological advancement.
                        </p>
                    </div>
                </div>
            </section>
            <section class="programmes-section" id="our-programmes">
               <div class="programmes-title">
                  <h2>Choose a Programme</h2>
                  <p>Find a programme that you like and register</p>
               </div>
               <div class="programme-grid">
                  <div class="grid-items">
                     <div class="grid-image">
                        <img src="/images/frontend.png">
                        <div class="badge">
                          <span>Registration Ongoing</span>
                        </div>
                     </div>
                     <div class="grid-content">
                        <h4>Front End Development</h4>
                        <p>
                          Front-end engineers work with designers 
                          to create clean, beautiful, functional 
                          and fast websites. This programme will 
                          teach you everything you need to know 
                          to become a front end developer.
                        </p>
                        <router-link to="/frontend-web-development">View more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9"><path fill="rgb(0, 6, 177)" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="rgb(0, 6, 177)" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/></svg></router-link>
                     </div>
                  </div>
                   <div class="grid-items">
                     <div class="grid-image">
                        <img src="/images/backend.png">
                        <div class="badge">
                          <span>Registration Ongoing</span>
                        </div>
                     </div>
                     <div class="grid-content">
                        <h4>Fullstack Web Development</h4>
                        <p>
                          Full-stack engineers build and integrate 
                          both server-side and frontend components. 
                          This program teaches backend development 
                          using C# and .NET, along with HTML, CSS, 
                          and JavaScript for frontend integration.
                        </p>
                        <router-link to="/fullstack-web-development">View more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9"><path fill="rgb(0, 6, 177)" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="rgb(0, 6, 177)" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/></svg></router-link>
                     </div>
                  </div>
                   <div class="grid-items">
                     <div class="grid-image">
                        <img src="/images/course2.jpg">
                        <div class="badge">
                          <span>Registration Ongoing</span>
                        </div>
                     </div>
                     <div class="grid-content">
                        <h4>Front End Web With React/ NextJS</h4>
                        <p>
                          Front-end engineers work with designers 
                          to create clean, beautiful, functional 
                          and fast websites. This programme will 
                          teach you everything you need to know 
                          to become a front end developer.
                        </p>
                        <router-link to="/reactjs-nextjs">View more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9"><path fill="rgb(0, 6, 177)" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="rgb(0, 6, 177)" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/></svg></router-link>
                     </div>
                  </div>
                   <div class="grid-items">
                     <div class="grid-image">
                        <img src="/images/design.png">
                        <div class="badge">
                          <span>Registration Ongoing</span>
                        </div>
                     </div>
                     <div class="grid-content">
                        <h4>Mobile App Development</h4>
                        <p>
                          This course will teach you how 
                          to develop native Cross-Platform 
                          iOS and Android Apps Using Flutter.
                        </p>
                        <router-link to="/mobile-app-development">View more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9"><path fill="rgb(0, 6, 177)" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="rgb(0, 6, 177)" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/></svg></router-link>
                     </div>
                  </div>
                   <div class="grid-items">
                     <div class="grid-image">
                        <img src="/images/data.png">
                        <div class="badge">
                          <span>Registration Ongoing</span>
                        </div>
                     </div>
                     <div class="grid-content">
                        <h4>Data Science</h4>
                        <p>
                          Venturing into data analysis? 
                          we've got your covered. This 
                          course teaches both exploratory 
                          and confirmatory data analysis using python.
                        </p>
                        <router-link to="/data-science">View more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9"><path fill="rgb(0, 6, 177)" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="rgb(0, 6, 177)" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/></svg></router-link>                     </div>
                  </div>
                   <div class="grid-items">
                     <div class="grid-image">
                        <img src="/images/uiux.png">
                        <div class="badge">
                          <span>Registration Ongoing</span>
                        </div>
                     </div>
                     <div class="grid-content">
                        <h4>Product/ Graphic Design</h4>
                        <p>
                          In this course, you will learn 
                          how to use Figma for Mobile and 
                          Web Design and create beautiful 
                          User Interface and robust User 
                          Experience design.
                        </p>
                        <router-link to="/product-graphic-design">View more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9"><path fill="rgb(0, 6, 177)" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="rgb(0, 6, 177)" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/></svg></router-link>
                     </div>
                  </div>
               </div>
            </section>
            <section class="aboutus-section" id="about-us">
               <div class="aboutus-container">
                  <div class="aboutus-content">
                    <h2>About Us</h2>
                      <p>
                          Welcome to Vnicom Tech Hub, 
                          where innovation meets opportunity! 
                          At Vnicom Tech Hub, we are dedicated to 
                          empowering the youth with the requisite 
                          ICT knowledge to jumpstart their careers or 
                          bring their innovative ideas to life. 
                      </p>
                      <p>
                        Our mission is to bridge the gap 
                        between technology and ambition by 
                        equipping individuals and businesses 
                        with cutting-edge resources, expert 
                        guidance, and real-world opportunities 
                        to thrive in today's fast-paced, 
                        tech-driven world. 
                      </p>
                      <p>
                        Join us on a journey of learning, 
                        creativity, and transformation as 
                        we shape the future, one idea at a 
                        time!
                      </p>
                  </div>
                  <div class="aboutus-image">
                     <img src="/images/grid-img1.jpg">
                  </div>
               </div>
            </section>
            <section class="whychoose-section">
              <div class="whychoose-first-container">
                <h3>
                  Empowering You to Build a Tech Career that Thrives
                </h3>
                <p>
                  At Vnicom Tech Hub, we offer industry-focused, hands-on training designed to help beginners and career changers break into tech with confidence. 
                </p>
              </div>
            </section>
            <section>
                  <div class="whychoose-second-container">
                <div class="whychoose-second-container-title">
                  <h3>Accessible Learning. <span class="practical-skill">Practical Skills</span> . Real Growth.</h3>
                  <p>Our programmes are designed to fit your life and your goals</p>
                </div>
                
                <div class="whychoose-grid">
                  <div class="whychoose-card" id="whychoose-card-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 12 12"><path fill="#1C3D90" d="M4.25 3.25a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0m-2 2.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M11 4.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M5.25 6C4.56 6 4 6.56 4 7.25V8.5a2 2 0 1 0 4 0V7.25C8 6.56 7.44 6 6.75 6zM3 7.25c0-.289.054-.565.154-.818l-1.231.33a1.25 1.25 0 0 0-.884 1.53l.194.725a2 2 0 0 0 2.45 1.414l.017-.005A3 3 0 0 1 3 8.5zM9 8.5c0 .733-.263 1.405-.7 1.927l.016.004a2 2 0 0 0 2.449-1.414l.194-.725a1.25 1.25 0 0 0-.884-1.53l-1.228-.33c.099.254.153.53.153.818z"/>
                      </svg>
                      <h4>Vibrant Support Community</h4>
                      <p>
                        Join a community of learners, 
                        mentors, and industry professionals. 
                        At Vnicom Tech Hub, you’re never learning alone: 
                        connect with peers, share ideas, get guidance, 
                        and grow your network as you build your skills.
                      </p>
                  </div>
                  <div class="whychoose-card" id="whychoose-card-yellow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="#F5B800" d="m12 11.925l-1.7 1.3q-.15.125-.3.013t-.1-.288l.65-2.1l-1.75-1.4q-.125-.125-.075-.287T8.95 9h2.15l.65-2.05q.05-.175.25-.175t.25.175L12.9 9h2.125q.175 0 .238.163t-.063.287l-1.775 1.4l.65 2.1q.05.175-.1.288t-.3-.013zM12 21l-4.675 1.55q-.5.175-.913-.125t-.412-.8v-6.35q-.95-1.05-1.475-2.4T4 10q0-3.35 2.325-5.675T12 2t5.675 2.325T20 10q0 1.525-.525 2.875T18 15.275v6.35q0 .5-.413.8t-.912.125zm0-5q2.5 0 4.25-1.75T18 10t-1.75-4.25T12 4T7.75 5.75T6 10t1.75 4.25T12 16"/>
                      </svg>
                      <h4>Capstone Project</h4>
                      <p>
                        Put your skills to the test 
                        with a real-world capstone project. 
                        Each programme culminates in a hands-on 
                        project that challenges you to apply what 
                        you've learned, solve real problems, 
                        and build a standout portfolio piece.
                      </p>
                  </div>
                  <div class="whychoose-card" id="whychoose-card-purple">
                       <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="#281A6A" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M9 4h2v5h9v2h-9v9H9v-9H4V9h5z" clip-rule="evenodd"/>
                      </svg>
                      <h4>Internship Opportunities</h4>
                      <p>
                        Gain industry experience, 
                        strengthen your resume, 
                        and transition smoothly 
                        from the classroom to 
                        real-world tech environments. 
                        Our internships are designed to 
                        help you become job-ready and 
                        career confident.
                      </p>
                  </div>
                </div>
              </div>
            </section>
            <section class="testimonial-section" id="testimonials">
                <div class="testimonial-title">
                   <h2>Some of Our <span class="highlight">Alumni</span> Stories</h2>
                   <p>Explore the success stories of individuals who have advanced their careers through our training programmes. </p>
                </div>
                <div class="testimonial-wrapper">

                  <div class="testimonial-content">
                      <div class="avatars-row">
                      <img
                        v-for="(testimonial, index) in testimonials"
                        :key="index"
                        :src="testimonial.image"
                        :class="{ active: index === currentIndex }"
                        @click="goToTestimonial(index)"
                        class="avatar"
                      />
                    </div>

                    <p class="quote">“{{ currentTestimonial.quote }}”</p>

                    <div class="author">
                      <strong>{{ currentTestimonial.name }}</strong>
                      <p>{{ currentTestimonial.track }}</p>
                    </div>

                    <div class="arrows">
                      <button @click="prev">&#8592;</button>
                      <button @click="next" id="next">&#8594;</button>
                    </div>
                  </div>
                  <div class="testimonial-image">
                    <img :src="currentTestimonial.image" alt="Testimonial image" />
                  </div>
                </div>
            </section>
            <section class="counter-section">
                <div class="counter-container">
                    <div class="counter-box" v-for="(item, index) in counters" :key="index">
                      <h3>{{ item.current.toLocaleString() }} <span>{{ item.suffix }}</span></h3>
                      <p>{{ item.label }}</p>
                    </div>
                </div>
            </section>
            <section class="opportunities-section">
              <div class="opportunities-container">
                 <div class="opportunities-grid" id="opportunities-grid-title" >
                    <h3>Let's Help You <br>Prepare for The Future</h3>
                    <p>
                      Learn new in-demand skills at 
                      Vnicom Tech Hub best-in-class 
                      training. We provide an enabling 
                      environment and opportunity for 
                      you to kickstart and grow your IT career.
                    </p>
                 </div>
                 <div class="opportunities-mother-grid">
                    <div class="opportunities-grid">
                     <div class="opportunities-card">
                          <div>
                            <img src="/svgs/learn.svg">
                          </div>
                          <div>
                              <h4>Gain a skill</h4>
                              <p>
                                Want to earn a new skill 
                                or add to your existing tech 
                                skills? join us today at 
                                Vnicom Tech Hub and discover 
                                new possibilities.
                              </p>
                          </div>
                     </div>
                     <div class="opportunities-card">
                          <div>
                            <img src="/svgs/team.svg">
                          </div>
                          <div>
                              <h4>Level up your team's skills</h4>
                              <p>
                                Have you identified skill gaps in your team? Reach out to us today to discuss how Vnicom Tech Hub can help.
                              </p>
                          </div>
                     </div>
                    </div>
                    <div class="opportunities-grid">
                          <div class="opportunities-card">
                              <div>
                                <img src="/svgs/carrer.svg">
                              </div>
                              <div>
                                  <h4>Build a career</h4>
                                  <p>
                                    Learn top-rated job focused 
                                    skills in the field of software 
                                    engineering and become employable 
                                    within a year.
                                  </p>
                              </div>
                        </div>
                        <div class="opportunities-card">
                              <div>
                                <img src="/svgs/hire.svg">
                              </div>
                              <div>
                                  <h4>Hire our Grads</h4>
                                  <p>
                                    Looking for talents to help your 
                                    business or startup grow. Reach out to us and hire from our amazing pool of talents.
                                  </p>
                              </div>
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



