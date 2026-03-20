---
layout: default
title: "TecDev — Technical Blog"
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
  .btn-java {
    background: #f89820;
    color: white;
    border: 2px solid #f89820;
  }
  .btn-java:hover {
    background: transparent;
    color: #f89820;
    transform: translateY(-2px);
  }
  .btn-english {
    background: #38ef7d;
    color: #1a2a3a;
    border: 2px solid #38ef7d;
  }
  .btn-english:hover {
    background: transparent;
    color: #38ef7d;
    transform: translateY(-2px);
  }
  .hero {
    text-align: center;
    padding: 3rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 16px;
    color: white;
    margin-bottom: 2rem;
  }
  .section-title {
    font-size: 1.8rem;
    margin: 2rem 0 1rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid #0078D4;
    display: inline-block;
  }
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
    margin: 1.5rem 0;
  }
  .post-card {
    background: #fff;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    border-left: 4px solid #0078D4;
  }
  .post-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  }
  .post-card.java {
    border-left-color: #f89820;
  }
  .post-card.english {
    border-left-color: #38ef7d;
  }
  .post-title {
    margin: 0 0 0.5rem 0;
  }
  .post-title a {
    text-decoration: none;
    color: #333;
    font-size: 1.2rem;
    font-weight: 600;
  }
  .post-title a:hover {
    color: #0078D4;
  }
  .post-meta {
    color: #777;
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }
  .post-excerpt {
    color: #555;
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  .post-category {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    font-size: 0.7rem;
    font-weight: 600;
    border-radius: 20px;
    margin-bottom: 0.75rem;
  }
  .category-java {
    background: #f89820;
    color: white;
  }
  .category-english {
    background: #38ef7d;
    color: #1a2a3a;
  }
  .read-more {
    color: #0078D4;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
  }
  .read-more:hover {
    text-decoration: underline;
  }
  .footer-note {
    text-align: center;
    margin-top: 3rem;
    padding: 2rem;
    background: #f8f9fa;
    border-radius: 12px;
  }
  @media (max-width: 768px) {
    .nav-buttons {
      flex-wrap: wrap;
    }
    .posts-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="nav-buttons">
  <a href="/" class="btn btn-primary">🏠 Home</a>
  <a href="/java" class="btn btn-java">☕ Java</a>
  <a href="/english" class="btn btn-english">🇬🇧 English</a>
  <a href="/about" class="btn btn-secondary">👤 About</a>
</div>

<div class="hero">
  <h1>🚀 TecDev</h1>
  <p style="font-size: 1.2rem; margin-top: 1rem;">
    🧑‍💻 <strong>DevGS8</strong> — Helping developers grow through <strong>clear code</strong>, <strong>practical DevOps</strong>, and <strong>open knowledge</strong>.
  </p>
</div>

---

## 📖 Latest Articles

<div class="posts-grid">
  {% for post in site.posts limit:4 %}
    {% if post.categories contains "java" %}
      <div class="post-card java">
        <span class="post-category category-java">☕ Java</span>
    {% elsif post.categories contains "english" %}
      <div class="post-card english">
        <span class="post-category category-english">🇬🇧 English</span>
    {% else %}
      <div class="post-card">
        <span class="post-category" style="background:#6c757d; color:white;">📝 Post</span>
    {% endif %}
        <h3 class="post-title">
          <a href="{{ post.url }}">{{ post.title }}</a>
        </h3>
        <p class="post-meta">📅 {{ post.date | date: "%B %d, %Y" }}</p>
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
        <a href="{{ post.url }}" class="read-more">Read more →</a>
      </div>
  {% else %}
    <p style="grid-column: 1/-1; text-align: center;">📝 No posts yet. Check back soon!</p>
  {% endfor %}
</div>

---

## 🎯 What You'll Find Here

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <a href="/java" style="text-decoration: none;">
    <div style="background: #f89820; color: white; padding: 1.5rem; text-align: center; border-radius: 12px; transition: transform 0.3s;">
      <h3 style="margin: 0;">☕ Java</h3>
      <p style="margin: 0.5rem 0 0 0; font-size: 0.85rem;">Fundamentals, OOP, and real-world applications</p>
    </div>
  </a>
  <a href="/english" style="text-decoration: none;">
    <div style="background: #38ef7d; color: #1a2a3a; padding: 1.5rem; text-align: center; border-radius: 12px; transition: transform 0.3s;">
      <h3 style="margin: 0;">🇬🇧 English for Tech</h3>
      <p style="margin: 0.5rem 0 0 0; font-size: 0.85rem;">Vocabulary, documentation, and communication</p>
    </div>
  </a>
  <a href="/about" style="text-decoration: none;">
    <div style="background: #6c757d; color: white; padding: 1.5rem; text-align: center; border-radius: 12px; transition: transform 0.3s;">
      <h3 style="margin: 0;">👤 About Me</h3>
      <p style="margin: 0.5rem 0 0 0; font-size: 0.85rem;">My journey and technologies</p>
    </div>
  </a>
</div>

<div class="footer-note">
  <p style="margin: 0;">📬 <strong>Stay tuned</strong> — new posts every week!</p>
  <p style="margin: 0.5rem 0 0;">
    <a href="https://github.com/devgs8" target="_blank" style="text-decoration: none; color: #0078D4;">🐙 GitHub</a>
  </p>
</div>
