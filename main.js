import './style.css'

// Loading animation
function showLoadingAnimation() {
  const loadingOverlay = document.createElement('div')
  loadingOverlay.className = 'loading-overlay'
  loadingOverlay.innerHTML = '<div class="loading-spinner"></div>'
  document.body.appendChild(loadingOverlay)
  
  setTimeout(() => {
    loadingOverlay.style.opacity = '0'
    setTimeout(() => {
      document.body.removeChild(loadingOverlay)
    }, 500)
  }, 1500)
}

// Animated particles background
function createParticles() {
  const particlesContainer = document.createElement('div')
  particlesContainer.className = 'particles'
  
  for (let i = 0; i < 9; i++) {
    const particle = document.createElement('div')
    particle.className = 'particle'
    particlesContainer.appendChild(particle)
  }
  
  document.body.appendChild(particlesContainer)
}

// Mobile menu toggle functionality
function setupMobileMenu() {
  const menuBtn = document.querySelector('#menu-btn')
  const navMenu = document.querySelector('#nav-menu')
  
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active')
    })
  }
}

// Smooth scrolling for navigation links
function setupSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]')
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        })
      }
    })
  })
}

// Contact form handling with enhanced animation
function setupContactForm() {
  const form = document.querySelector('#contact-form')
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      
      const submitBtn = form.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent
      
      // Animate button
      submitBtn.textContent = 'Sending...'
      submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)'
      
      // Simple form validation
      const name = form.querySelector('#name').value
      const email = form.querySelector('#email').value
      const message = form.querySelector('#message').value
      
      setTimeout(() => {
        if (name && email && message) {
          submitBtn.textContent = '✓ Sent!'
          submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)'
          
          // Show success animation
          const successMsg = document.createElement('div')
          successMsg.innerHTML = '🎉 Thank you! We will get back to you soon.'
          successMsg.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 2rem 3rem;
            border-radius: 15px;
            box-shadow: 0 20px 60px rgba(16, 185, 129, 0.3);
            z-index: 10000;
            animation: fadeInUp 0.5s ease-out;
            text-align: center;
            font-size: 1.2rem;
            font-weight: 600;
          `
          
          document.body.appendChild(successMsg)
          
          setTimeout(() => {
            successMsg.style.animation = 'fadeInUp 0.5s ease-out reverse'
            setTimeout(() => {
              document.body.removeChild(successMsg)
            }, 500)
          }, 3000)
          
          form.reset()
          
          setTimeout(() => {
            submitBtn.textContent = originalText
            submitBtn.style.background = 'linear-gradient(135deg, #2563eb, #1d4ed8)'
          }, 2000)
        } else {
          submitBtn.textContent = '❌ Fill all fields'
          submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)'
          
          setTimeout(() => {
            submitBtn.textContent = originalText
            submitBtn.style.background = 'linear-gradient(135deg, #2563eb, #1d4ed8)'
          }, 2000)
        }
      }, 1000)
    })
  }
}

// Scroll animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
      }
    })
  }, observerOptions)
  
  // Add scroll animation class to elements
  const animateElements = document.querySelectorAll('.service-card, .team-card, .about-text, .about-image, .contact-info, .contact-form')
  animateElements.forEach(el => {
    el.classList.add('scroll-animate')
    observer.observe(el)
  })
}

// Header scroll effect
function setupHeaderScroll() {
  const header = document.querySelector('.header')
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.98)'
      header.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.15)'
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)'
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)'
    }
  })
}

// Typing animation for hero title
function setupTypingAnimation() {
  const heroTitle = document.querySelector('.hero-content h1')
  const text = heroTitle.textContent
  heroTitle.textContent = ''
  
  let i = 0
  const typeWriter = () => {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i)
      i++
      setTimeout(typeWriter, 100)
    }
  }
  
  setTimeout(typeWriter, 1000)
}

// Initialize the website
document.querySelector('#app').innerHTML = `
  <header class="header">
    <nav class="nav">
      <div class="nav-container">
        <div class="nav-logo">
          <h2>BR ARTS AND SKILLS</h2>
        </div>
        <ul class="nav-menu" id="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="nav-toggle" id="menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <section id="home" class="hero">
      <div class="hero-content">
        <h1>Welcome to BR ARTS AND SKILLS</h1>
        <p class="hero-subtitle">🚀 Empowering Growth Through Skills Development, IT Training & Creative Arts ✨</p>
        <div class="hero-buttons">
          <a href="#services" class="btn btn-primary">Explore Services</a>
          <a href="#contact" class="btn btn-secondary">Get Started Today</a>
        </div>
      </div>
    </section>

    <section id="services" class="services">
      <div class="container">
        <h2 class="section-title">Our Premium Services</h2>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🎯</div>
            <h3>Skills Development & Personal Grooming</h3>
            <p>Transform your professional presence with our comprehensive development programs designed to enhance your skills and personal presentation for career advancement.</p>
            <ul class="service-features">
              <li>Professional Communication Mastery</li>
              <li>Leadership Development Programs</li>
              <li>Personal Branding & Image</li>
              <li>Interview Preparation & Success</li>
              <li>Confidence Building Workshops</li>
            </ul>
          </div>
          
          <div class="service-card">
            <div class="service-icon">💻</div>
            <h3>IT Operations Training</h3>
            <p>Master cutting-edge technologies with our industry-leading IT training programs covering essential certifications and skills for modern businesses.</p>
            <ul class="service-features">
              <li>Cyber Security & Ethical Hacking</li>
              <li>Windows Server Administration</li>
              <li>Linux Systems & Command Line</li>
              <li>VMware Virtualization</li>
              <li>Cloud Computing (AWS, Azure)</li>
            </ul>
          </div>
          
          <div class="service-card">
            <div class="service-icon">🎨</div>
            <h3>Online Art & Craft Classes</h3>
            <p>Unleash your creativity with our engaging art and craft programs designed for both kids and professionals to explore artistic talents and develop new skills.</p>
            <ul class="service-features">
              <li>Kids Creative Art Classes</li>
              <li>Professional Art Workshops</li>
              <li>Digital Art & Design Training</li>
              <li>Traditional Craft Techniques</li>
              <li>Portfolio Development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="team" class="team">
      <div class="container">
        <h2 class="section-title">Meet Our Expert Team</h2>
        <div class="team-grid">
          <div class="team-card">
            <div class="team-avatar">👨‍💼</div>
            <h3>Sanjaya Kumar</h3>
            <p class="team-role">Founder & Owner</p>
            <div class="team-contact">
              <p>📞 +91 98996 06555</p>
              <p>📧 SANJAY.BHARDWAJ7@GMAIL.COM</p>
            </div>
          </div>
          
          <div class="team-card">
            <div class="team-avatar">👩‍🏫</div>
            <h3>Neelam Bhardwaj</h3>
            <p class="team-role">Professional Trainer</p>
            <div class="team-contact">
              <p>🎯 Skills Development Specialist</p>
              <p>🎨 Art & Craft Expert</p>
            </div>
          </div>
          
          <div class="team-card">
            <div class="team-avatar">👨‍💻</div>
            <h3>Sanjay Bhardwaj</h3>
            <p class="team-role">IT Professional Trainer</p>
            <div class="team-contact">
              <p>💻 Cyber Security Expert</p>
              <p>☁️ Cloud Computing Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>About BR ARTS AND SKILLS</h2>
            <p>🌟 We are a dedicated training institute committed to providing comprehensive education and skill development opportunities. Our mission is to bridge the gap between traditional learning and modern industry requirements.</p>
            <p>💡 With expert instructors and industry-relevant curriculum, we offer a diverse range of programs from technical IT training to creative arts, ensuring our students are well-equipped for success in their chosen fields.</p>
            <div class="about-stats">
              <div class="stat">
                <h3>500+</h3>
                <p>Students Trained</p>
              </div>
              <div class="stat">
                <h3>15+</h3>
                <p>Course Programs</p>
              </div>
              <div class="stat">
                <h3>95%</h3>
                <p>Success Rate</p>
              </div>
            </div>
          </div>
          <div class="about-image">
            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Students learning in modern classroom" />
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section-title">Get In Touch With Us</h2>
        <div class="contact-content">
          <div class="contact-info">
            <h3>Ready to Start Your Journey?</h3>
            <p>🚀 Contact us today to learn more about our programs and how we can help you achieve your goals. Our expert team is ready to guide you towards success!</p>
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div>
                  <strong>Email Us</strong><br>
                  SANJAY.BHARDWAJ7@GMAIL.COM
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div>
                  <strong>Call Us</strong><br>
                  +91 98996 06555
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">👨‍💼</div>
                <div>
                  <strong>Owner</strong><br>
                  Sanjaya Kumar
                </div>
              </div>
            </div>
          </div>
          
          <form id="contact-form" class="contact-form">
            <div class="form-group">
              <input type="text" id="name" name="name" placeholder="Your Full Name *" required>
            </div>
            <div class="form-group">
              <input type="email" id="email" name="email" placeholder="Your Email Address *" required>
            </div>
            <div class="form-group">
              <select id="service" name="service" required>
                <option value="">Select Your Interest</option>
                <option value="skills">Skills Development & Personal Grooming</option>
                <option value="it">IT Operations Training</option>
                <option value="arts">Art & Craft Classes</option>
                <option value="all">All Services</option>
              </select>
            </div>
            <div class="form-group">
              <textarea id="message" name="message" placeholder="Tell us about your goals and how we can help you... *" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message 🚀</button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>BR ARTS AND SKILLS</h3>
          <p>🌟 Empowering individuals through quality education and skill development programs. Join us on your journey to success!</p>
          <p><strong>Owner:</strong> Sanjaya Kumar</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">🏠 Home</a></li>
            <li><a href="#services">⚡ Services</a></li>
            <li><a href="#team">👥 Team</a></li>
            <li><a href="#about">ℹ️ About</a></li>
            <li><a href="#contact">📞 Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#services">🎯 Skills Development</a></li>
            <li><a href="#services">💻 IT Training</a></li>
            <li><a href="#services">🎨 Art & Craft Classes</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Contact Info</h4>
          <ul>
            <li>📧 SANJAY.BHARDWAJ7@GMAIL.COM</li>
            <li>📞 +91 98996 06555</li>
            <li>👨‍💼 Sanjaya Kumar (Owner)</li>
            <li>👩‍🏫 Neelam Bhardwaj (Trainer)</li>
            <li>👨‍💻 Sanjay Bhardwaj (IT Trainer)</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 BR ARTS AND SKILLS. All rights reserved. ✨ Designed with passion for excellence.</p>
      </div>
    </div>
  </footer>
`

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
  showLoadingAnimation()
  createParticles()
  setupMobileMenu()
  setupSmoothScroll()
  setupContactForm()
  setupScrollAnimations()
  setupHeaderScroll()
  setupTypingAnimation()
})