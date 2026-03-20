---
layout: default
title: About
permalink: /about/
---

<style>
  .nav-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 2rem 0;
  }
  .btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .btn-primary {
    background: #0078D4;
    color: white;
    border: 2px solid #0078D4;
  }
  .btn-primary:hover {
    background: transparent;
    color: #0078D4;
    transform: translateY(-2px);
  }
  .btn-secondary {
    background: #6c757d;
    color: white;
    border: 2px solid #6c757d;
  }
  .btn-secondary:hover {
    background: transparent;
    color: #6c757d;
    transform: translateY(-2px);
  }
  .btn-outline {
    background: transparent;
    color: #0078D4;
    border: 2px solid #0078D4;
  }
  .btn-outline:hover {
    background: #0078D4;
    color: white;
    transform: translateY(-2px);
  }
  .profile-card {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 16px;
    color: white;
    margin-bottom: 2rem;
  }
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }
  .tech-card {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 12px;
    border-left: 4px solid #0078D4;
    transition: transform 0.3s ease;
  }
  .tech-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
  .tech-card h3 {
    margin-top: 0;
    color: #0078D4;
  }
  .tech-card p {
    margin-bottom: 0;
    color: #555;
  }
</style>

<div class="nav-buttons">
  <a href="/" class="btn btn-secondary">← Back to Home</a>
  <a href="/" class="btn btn-primary">🏠 Home</a>
</div>

<div class="profile-card">
  <h1>👋 About Me</h1>
  <p style="font-size: 1.2rem; margin-top: 1rem;">
    🧑‍💻 <strong>DevGS8</strong> — Helping developers grow through <strong>clear code</strong>, <strong>practical DevOps</strong>, and <strong>open knowledge</strong>.
  </p>
</div>

---

## 🎯 Mission

To document my learning journey and share knowledge with the developer community.

---

## 🛠️ Technologies & Focus

<div class="tech-grid">
  <div class="tech-card">
    <h3>💻 Languages</h3>
    <p>Java (learning), Python, JavaScript</p>
  </div>
  <div class="tech-card">
    <h3>🐳 Containers</h3>
    <p>Docker, Kubernetes</p>
  </div>
  <div class="tech-card">
    <h3>📦 Version Control</h3>
    <p>Git & GitHub</p>
  </div>
  <div class="tech-card">
    <h3>☁️ Cloud</h3>
    <p>Azure</p>
  </div>
  <div class="tech-card">
    <h3>🐧 Operating Systems</h3>
    <p>Linux (daily driver), Windows</p>
  </div>
  <div class="tech-card">
    <h3>🌐 Networking</h3>
    <p>DNS fundamentals</p>
  </div>
  <div class="tech-card">
    <h3>🎓 Mentoring</h3>
    <p>Teaching and supporting fellow developers</p>
  </div>
  <div class="tech-card">
    <h3>🧠 Algorithms</h3>
    <p>Strengthening logic and problem-solving skills</p>
  </div>
</div>

---

## 📬 Connect

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://github.com/devgs8" target="_blank" class="btn btn-outline" style="margin: 0 0.5rem;">🐙 GitHub</a>
  <a href="https://devgs8.github.io" class="btn btn-outline" style="margin: 0 0.5rem;">📝 Blog</a>
</div>

<div class="nav-buttons" style="margin-top: 2rem;">
  <a href="/" class="btn btn-secondary">← Back to Home</a>
</div>
