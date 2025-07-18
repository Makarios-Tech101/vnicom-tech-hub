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
            
        </main>
        <Footer />
    </div>
</template>



