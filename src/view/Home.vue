<script setup>
import { ref, onMounted, computed } from 'vue'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import '../assets/main.css';

const headings = [
  'Software Engineering',
  'Data Science',
  'Product Design'
]

const categories = ['Software Engineering', 'Data', 'Computer Literacy', 'Design']
const selectedCategory = ref('Software Engineering')

const programmes = ref([
  // Software Engineering Programmes
  {
    category: 'Software Engineering',
    badge: 'Intensive',
    title: 'Frontend Web Development',
    description: 'Front-end engineers work with designers to create clean, beautiful, functional and fast websites. This programme will teach you everything you need to know to become a front end developer.',
    image: '../../images/frontend.jpg',
  },
  {
    category: 'Software Engineering',
    badge: 'Intensive',
    title: 'Full Stack Web Development',
    description: 'Full-stack engineers build and integrate both server-side and frontend components. This program teaches backend development using C# and .NET, along with HTML, CSS, and JavaScript for frontend integration',
    image: '.../../images/course2.jpg',
  },
  {
    category: 'Software Engineering',
    badge: 'Coming soon',
    title: 'Frontend Web Development with React/Next.js',
    description: 'Learn to build modern, responsive websites using React and Next.js. This course covers everything from UI development to creating dynamic, production-ready web applications',
    image: '../../images/course3.jpg',
  },
  {
    category: 'Software Engineering',
    badge: 'Intensive',
    title: 'Mobile App Development',
    description: 'Design and build mobile applications for Android and iOS using industry-standard tools.',
    image: '../../images/frontend3.jpg',
  },

  // Data Programmes
  {
    category: 'Data',
    badge: 'Intensive',
    title: 'Data Science',
    description: 'Venturing into data science? we have got your covered. This course teaches both exploratory and confirmatory data analysis using python.',
    image: '../../images/data-sciencess.jpg',
  },
  {
    category: 'Data',
    badge: 'Introduction',
    title: 'Introduction to Python',
    description: 'Python has become one of the most popular programming languages around the world. It consistently outranks other languages in terms of job availability. This course will take you from newbie to pro.',
    image: '../../images/course1.jpg',
  },
  {
    category: 'Data',
    badge: 'Intensive',
    title: 'Data Analytics with Power BI',
    description: 'Analyze data and create dashboards using Microsoft Power BI for real-world business insights.',
    image: '../images/data-analytic.jpg',
  },

  //Computer Literacy Programmes
  {
    category: 'Computer Literacy',
    badge: 'Intensive',
    title: 'Computer Literacy',
    description: 'Build a strong foundation in essential computer skills. This programme covers basic computer operations, internet usage, file management, and productivity tools like Microsoft Word, Excel, and PowerPoint.',
    image: '../../images/computer-literacy.jpg',
  },

  // Design Programmes
  {
    category: 'Design',
    badge: 'Intensive',
    title: 'Graphic/ Product Design',
    description: 'In this course, you will learn how to use Figma for Mobile and Web Design and create beautiful User Interface and robust User Experience design.',
    image: '../../images/design.png',
  },
  
])

const filteredProgrammes = computed(() =>
  programmes.value.filter(p => p.category === selectedCategory.value)
)

const displayedText = ref('')
let currentHeadingIndex = 0
let charIndex = 0

const typeHeading = () => {
  const currentHeading = headings[currentHeadingIndex]

  if (charIndex < currentHeading.length) {
    displayedText.value += currentHeading[charIndex]
    charIndex++
    setTimeout(typeHeading, 80) // Typing speed
  } else {
    setTimeout(() => {
      eraseHeading()
    }, 2000) // Wait before erasing
  }
}

const eraseHeading = () => {
  if (charIndex > 0) {
    displayedText.value = displayedText.value.slice(0, -1)
    charIndex--
    setTimeout(eraseHeading, 40) // Erasing speed
  } else {
    currentHeadingIndex = (currentHeadingIndex + 1) % headings.length
    setTimeout(typeHeading, 300)
  }
}

onMounted(() => {
  typeHeading()
})

</script>

<template>
    <div>
        <Header />
        <main>
            <!-- <section class="enroll-container">
                <a href="#">Registration ongoing!🎉🎊🎉 &#8212;</a>
                <a href="#" id="click-here">Click here to enrol now </a>
            </section> -->

            <section>
                <div class="hero-section">
                    <div class="hero-content">
                        <div class="left">
                            <div class="before-title">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="16" height="16" x="26.5" y="5.5" fill="none" stroke="#27176F" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2" stroke-width="1"/><rect width="16" height="16" x="5.5" y="5.5" fill="none" stroke="#27176F" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2" stroke-width="1"/><rect width="16" height="16" x="26.5" y="26.5" fill="none" stroke="#27176F" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2" stroke-width="1"/><rect width="16" height="16" x="5.5" y="26.5" fill="none" stroke="#27176F" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2" stroke-width="1"/>
                                </svg>
                                <p>Become employable and job-ready</p>
                            </div>

                            <div class="title">
                                <h1>
                                    Kick Start <br />Your Tech Career In <br />
                                    <span class="typing-text">{{ displayedText }}</span>
                                </h1>
                                <p>
                                    Grow in your career, learn highly sought-after tech skills, like
                                    data science, frontend development, full-stack web development,
                                    graphic design, mobile app development, product design, and more
                                    with Vnicom Tech Hub
                                </p>
                            </div>

                            <div class="buttons">
                                <button class="btn primary">Explore all programmes</button>
                                <button class="btn secondary">Enroll now &rarr;</button>
                            </div>
                        </div>

                        <div class="right">
                            <div class="grid-container">
                                <div class="grid-item" id="grid-item1">
                                    <img src="../../images/grid-img6.jpg" alt="Tech learning" />
                                </div>
                                <div class="grid-item" id="grid-item2">
                                    <img src="../../images/grid-img5.jpg" alt="Tech learning" />
                                </div>
                                <div class="grid-item" id="grid-item3">
                                    <!-- <img src="../../images/grid-img7.jpg" alt="Tech learning" /> -->
                                    <img src="../../images/grid-img9.jpg" alt="Tech learning" />
                                </div>
                                <div class="grid-item" id="grid-item4">
                                    <!-- <img src="../../images/grid-img8.jpg" alt="Tech learning" /> -->
                                     <img src="../../images/grid-img7.jpg" alt="Tech learning" /> -->
                                </div>
                                <div class="grid-item" id="grid-item5">
                                    <img src="../../images/grid-img3.jpg" alt="Tech learning" />
                                </div>
                                <div class="grid-item" id="grid-item6">
                                    <img src="../../images/grid-img4.jpg" alt="Tech learning" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="future-section">
                <div class="future-section-container">
                    <div class="future-image">
                        <img src="../../images/why-us.jpg" alt="About Us" />
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
            <section class="programmes-section">
                <div class="programmes-title">
                    <h2>Choose A Programme</h2>
                    <p>
                        At Vnicom Tech Hub, we offer industry-relevant programmes designed to equip you with the skills today's employers demand.
                        Explore our programmes and find the path that fits your career goals.
                    </p>
                </div>
                <div class="programmes-tab-container">
                    <div class="tabs">
                        <button
                            v-for="category in categories"
                            :key="category"
                            :class="['tab', selectedCategory === category ? 'active' : '']"
                            @click="selectedCategory = category"
                        >
                            {{ category }}
                        </button>
                    </div>

                    <div class="courses-grid">
                        <div v-for="programme in filteredProgrammes" :key="programme.title" class="course-card">
                            <div class="course-image">
                            <img :src="programme.image" :alt="programme.title">
                            <span class="badge">{{ programme.badge }}</span>
                            </div>
                            <h3>{{ programme.title }}</h3>
                            <p>{{ programme.description }}</p>
                            <button class="learn-more-btn">Learn more &rarr;</button>
                        </div>
                    </div>    
                </div>
            </section>
            <section class="aboutus-section">
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
                        to thrive in today’s fast-paced, 
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
                     <img src="../../images/grid-img1.jpg">
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
            <section class="opportunities-section">
               <div class="opportunities-title">
                 <h3>Let's Help You Build Your Future</h3>
                 <p>
                    At Vnicom Tech Hub, we provide 
                    best-in-class training, practical 
                    learning environments, and endless 
                    opportunities to help you start, grow, 
                    and excel in your tech career.
                 </p>
               </div>
               <div class="opportunities-grid">
                 <div class="opportunities-image">
                    <img src="../../images/grid-img8.jpg">
                 </div>
                 <div class="opportunities-content">
                    <div class="opportunities-grid-items">
                        <div class="opportunities-grid-icon">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="#F5B800" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm3.08 15L12 14.15L8.93 16l.81-3.5l-2.71-2.34l3.58-.31L12 6.55l1.39 3.29l3.58.31l-2.71 2.35z"/>
                            </svg>
                        </div>
                        <div class="opportunities-grid-content">
                            <h6>Gain a skill</h6>
                            <p>
                              Want to earn a new skill or add 
                              to your existing tech skills? 
                              join us today at Vnicom Tech Hub 
                              and discover new possibilities.
                            </p>
                        </div>
                    </div>
                    <div class="opportunities-grid-items">
                        <div class="opportunities-grid-icon">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="#F5B800" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm3.08 15L12 14.15L8.93 16l.81-3.5l-2.71-2.34l3.58-.31L12 6.55l1.39 3.29l3.58.31l-2.71 2.35z"/>
                            </svg>
                        </div>
                        <div class="opportunities-grid-content">
                            <h6>Build a career</h6>
                            <p>
                              Learn top-rated job focused 
                              skills in the field of software 
                              engineering and become employable 
                              within a year.
                            </p>
                        </div>
                    </div>
                    <div class="opportunities-grid-items">
                        <div class="opportunities-grid-icon">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="#F5B800" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm3.08 15L12 14.15L8.93 16l.81-3.5l-2.71-2.34l3.58-.31L12 6.55l1.39 3.29l3.58.31l-2.71 2.35z"/>
                            </svg>
                        </div>
                        <div class="opportunities-grid-content">
                            <h6>Level up your team's skills</h6>
                            <p>
                                Have you identified skill gaps 
                                in your team? Reach out to us 
                                today to discuss how Vnicom Tech 
                                Hub can help.
                            </p>
                        </div>
                    </div>
                    <div class="opportunities-grid-items">
                        <div class="opportunities-grid-icon">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="#F5B800" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm3.08 15L12 14.15L8.93 16l.81-3.5l-2.71-2.34l3.58-.31L12 6.55l1.39 3.29l3.58.31l-2.71 2.35z"/>
                            </svg>
                        </div>
                        <div class="opportunities-grid-content">
                            <h6>Hire our Grads</h6>
                            <p>
                              Looking for talents to help your 
                              business or startup grow. Reach 
                              out to us and hire from our amazing 
                              pool of talents.
                            </p>
                        </div>
                    </div>
                 </div>
               </div>
            </section>
        </main>
      <Footer />
    </div>
</template>



