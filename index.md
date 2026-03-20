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
  .hero {
    text-align: center;
    padding: 3rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 16px;
    color: white;
    margin-bottom: 2rem;
  }
  .post-card {
    border-bottom: 1px solid #eee;
    padding: 2rem 0;
    transition: transform 0.3s ease;
  }
  .post-card:hover {
    transform: translateX(5px);
  }
  .post-title {
    margin-bottom: 0.5rem;
  }
  .post-title a {
    text-decoration: none;
    color: #0078D4;
    font-size: 1.5rem;
  }
  .post-title a:hover {
    text-decoration: underline;
  }
  .post-meta {
    color: #777;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  .read-more {
    display: inline-block;
    margin-top: 0.5rem;
    color: #0078D4;
    text-decoration: none;
    font-weight: 500;
  }
  .read-more:hover {
    text-decoration: underline;
  }
  .categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
  }
  .category-card {
    background: #f8f9fa;
    padding: 1rem;
    text-align: center;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }
  .category-card:hover {
    transform: translateY(-3px);
    background: #e9ecef;
  }
  .footer-note {
    text-align: center;
    margin-top: 3rem;
    padding: 2rem;
    background: #f8f9fa;
    border-radius: 12px;
  }
</style>

<div class="hero">
  <h1>🚀 TecDev</h1>
  <p style="font-size: 1.2rem; margin-top: 1rem;">
    🧑‍💻 <strong>DevGS8</strong> — Helping developers grow through <strong>clear code</strong>, <strong>practical DevOps</strong>, and <strong>open knowledge</strong>.
  </p>
  <div class="nav-buttons">
    <a href="/" class="btn btn-primary">🏠 Home</a>
    <a href="/about" class="btn btn-secondary">👤 About</a>
  </div>
</div>

---

## 📖 Latest Articles

<div class="posts-list">
  {% for post in site.posts %}
    <div class="post-card">
      <h2 class="post-title">
        <a href="{{ post.url }}">{{ post.title }}</a>
      </h2>
      <p class="post-meta">
        📅 {{ post.date | date: "%B %d, %Y" }} • 📂 {{ post.categories | join: ", " }}
      </p>
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
      <a href="{{ post.url }}" class="read-more">Read more →</a>
    </div>
  {% else %}
    <p>No posts yet. Check back soon! 📝</p>
  {% endfor %}
</div>

---

## 🎯 What You'll Find Here

<div class="categories-grid">
  <div class="category-card">💻 Coding</div>
  <div class="category-card">🐳 DevOps</div>
  <div class="category-card">🇬🇧 English for Tech</div>
  <div class="category-card">🛠️ Tools & Workflows</div>
</div>

<div class="footer-note">
  <p style="margin: 0;">📬 <strong>Stay tuned</strong> — new posts every week!</p>
  <p style="margin: 0.5rem 0 0;">
    <a href="https://github.com/devgs8" target="_blank" style="text-decoration: none; color: #0078D4;">🐙 GitHub</a>
  </p>
</div>
