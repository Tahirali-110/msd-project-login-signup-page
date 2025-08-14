/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4;
}

/* Color Scheme */
:root {
  --primary: #004aad; /* Vibrant Blue */
  --secondary: #28a745; /* Green */
  --accent: #ffc107; /* Gold */
  --text: #333;
  --bg: #fff;
}

/* Navigation Bar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo-img {
  height: 40px;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin-left: 1.5rem;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a:hover {
  color: var(--accent);
}

.btn-login {
  background-color: var(--accent);
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #fff;
}

/* Hero Section */
.hero {
  background: url('campus.jpg') no-repeat center center/cover; /* Replace 'campus.jpg' with your uploaded image path */
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.hero-content {
  z-index: 1;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-buttons .btn {
  display: inline-block;
  margin: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--secondary);
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}

.hero-buttons .btn:hover {
  background-color: var(--accent);
}

/* Featured Student Bodies */
.featured-bodies {
  padding: 2rem;
  text-align: center;
  background-color: var(--bg);
}

.featured-bodies h2 {
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 1rem;
}

.featured-bodies p {
  color: #666;
  margin-bottom: 1.5rem;
}

.body-categories {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.body-btn {
  padding: 0.5rem 1rem;
  background-color: #f0f0f0;
  color: #333;
  text-decoration: none;
  border-radius: 20px;
  font-weight: 500;
}

.body-btn.active, .body-btn:hover {
  background-color: var(--accent);
  color: #fff;
}

/* About Section */
.about {
  padding: 2rem;
  text-align: center;
}

.bodies-summary {
  list-style: none;
  max-width: 800px;
  margin: 1rem auto;
  text-align: left;
}

.bodies-summary li {
  margin: 0.5rem 0;
  color: #444;
}

/* Spotlights */
.spotlights {
  padding: 2rem;
}

.spotlight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.spotlight-card {
  text-align: center;
  padding: 1rem;
  background-color: var(--bg);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.spotlight-card img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

/* Actions */
.actions {
  padding: 2rem;
  text-align: center;
}

.action-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.action-card {
  padding: 1rem;
  background-color: var(--secondary);
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}

.action-card:hover {
  background-color: var(--accent);
}

/* News Feed */
.news-feed {
  padding: 2rem;
}

.news-post {
  padding: 1rem;
  background-color: var(--bg);
  border: 1px solid #ddd;
  margin-bottom: 1rem;
  border-radius: 5px;
}

.btn-like, .btn-comment {
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: var(--primary);
  color: #fff;
  border: none;
  border-radius: 5px;
}

/* FAQ */
.faq {
  padding: 2rem;
}

details {
  margin: 1rem 0;
  padding: 1rem;
  background-color: var(--bg);
  border: 1px solid #ddd;
  border-radius: 5px;
}

/* Footer */
footer {
  background-color: var(--primary);
  color: #fff;
  padding: 2rem;
  text-align: center;
}

.footer-links a, .social-links a {
  color: #fff;
  margin: 0 0.5rem;
  text-decoration: none;
}

.footer-links a:hover, .social-links a:hover {
  color: var(--accent);
}

/* Login and Signup Sections */
.login-section, .signup-section {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('campus.jpg') no-repeat center center/cover;
}

.login-container, .signup-container {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.login-container h2, .signup-container h2 {
  margin-bottom: 1rem;
  color: var(--primary);
}

.login-container form, .signup-container form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login-container label, .signup-container label {
  text-align: left;
  font-weight: 500;
}

.login-container input, .signup-container input, .login-container select {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.forgot-link {
  color: var(--primary);
  text-decoration: none;
  font-size: 0.9rem;
}

.forgot-link:hover {
  color: var(--accent);
}

.success-message {
  color: var(--secondary);
  font-weight: 600;
  margin-top: 1rem;
  display: none;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: var(--primary);
  }

  .nav-links.active {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }

  .hero h1 {
    font-size: 1.5rem;
  }

  .mission-vision {
    flex-direction: column;
  }

  .login-container, .signup-container {
    padding: 1rem;
  }

  .body-categories {
    flex-direction: column;
    gap: 0.5rem;
  }
}