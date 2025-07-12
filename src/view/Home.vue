<script setup>
import { ref, onMounted } from 'vue'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import '../assets/main.css';



const headings = [
  'Software Engineering',
  'Data Science',
  'Product Design'
]


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
            <section class="enroll-container">
                <a href="#">Registration ongoing!🎉🎊🎉 &#8212;</a>
                <a href="#" id="click-here">Click here to enrol now </a>
            </section>

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
                                    <img src="../../images/grid-img7.jpg" alt="Tech learning" />
                                </div>
                                <div class="grid-item" id="grid-item4">
                                    <img src="../../images/grid-img8.jpg" alt="Tech learning" />
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

            <section>
                <div class="about-us-section">
                    <div class="about-us-image">
                        <img src="../../public/images/about-us.png" alt="About Us" />
                    </div>
                    <div class="about-us-content">
                        <h2>About Us</h2>
                        <p>
                            Welcome to Vnicom Tech Hub, where 
                            innovation meets opportunity! At 
                            Vnicom Tech Hub, we are dedicated 
                            to empowering the youth with the 
                            requisite ICT knowledge to jumpstart 
                            their careers or bring their innovative 
                            ideas to life. 
                        </p>
                        <p>
                            Our mission is to bridge 
                            the gap between technology and ambition 
                            by equipping individuals and businesses 
                            with cutting-edge resources, expert guidance, 
                            and real-world opportunities to thrive in today’s 
                            fast-paced, tech-driven world. Join us on a journey of 
                            learning, creativity, and transformation as we shape the future, one idea at a time!
                        </p>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
</template>



