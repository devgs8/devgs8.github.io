---
layout: default
title: "TecDev — Technical Blog"
---

<style>
  .nav-buttons {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }
  .btn {
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #0078D4;
    font-weight: 500;
    transition: color 0.3s;
  }
  .btn:hover {
    color: #005a9e;
    text-decoration: underline;
  }
  .hero {
    text-align: center;
    padding: 3rem 2rem;
    background: #f8f9fa;
    border-radius: 12px;
    margin-bottom: 2rem;
  }
  .hero h1 {
    margin: 0;
    font-size: 2.5rem;
    color: #0078D4;
  }
  .hero p {
    font-size: 1.1rem;
    color: #555;
    margin-top: 0.5rem;
  }
  .post-list {
    margin: 2rem 0;
  }
  .post-item {
    border-bottom: 1px solid #eee;
    padding: 1.5rem 0;
  }
  .post-title {
    margin: 0 0 0.5rem 0;
  }
  .post-title a {
    text-decoration: none;
    color: #0078D4;
    font-size: 1.4rem;
  }
  .post-title a:hover {
    text-decoration: underline;
  }
  .post-meta {
    color: #777;
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }
  .post-category {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    font-size: 0.7rem;
    font-weight: 600;
    border-radius: 20px;
    margin-right: 0.5rem;
  }
  .category-java {
    background: #f89820;
    color: white;
  }
  .category-english {
    background: #38ef7d;
    color: #1a2a3a;
  }
  .post-excerpt {
    color: #555;
    line-height: 1.5;
  }
  .read-more {
    display: inline-block;
    margin-top: 0.5rem;
    color: #0078D4;
    text-decoration: none;
    font-weight: 500;
  }
  .footer {
    text-align: center;
    margin-top: 3rem;
    padding: 2rem;
    border-top: 1px solid #eee;
    color: #777;
  }
  @media (max-width: 768px) {
    .nav-buttons {
      justify-content: center;
    }
    .hero {
      padding: 2rem 1rem;
    }
    .hero h1 {
      font-size: 1.8rem;
    }
  }
</style>

<div class="nav-buttons">
  <a href="/" class="btn">Home</a>
  <a href="/about" class="btn">About</a>
</div>

<div class="hero">
  <h1>TecDev</h1>
  <p>Technical insights for developers — Java, DevOps, and English for tech</p>
</div>

## 📖 Latest Posts

<div class="post-list">
  {% for post in site.posts %}
    <div class="post-item">
      {% if post.categories contains "java" %}
        <span class="post-category category-java">☕ Java</span>
      {% elsif post.categories contains "english" %}
        <span class="post-category category-english">🇬🇧 English</span>
      {% endif %}
      <h2 class="post-title">
        <a href="{{ post.url }}">{{ post.title }}</a>
      </h2>
      <p class="post-meta">📅 {{ post.date | date: "%B %d, %Y" }}</p>
      <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
      <a href="{{ post.url }}" class="read-more">Read more →</a>
    </div>
  {% else %}
    <p>No posts yet. Check back soon!</p>
  {% endfor %}
</div>

<div class="footer">
  <p>🧑‍💻 DevGS8 — Building in public. Learning out loud.</p>
  <p><a href="https://github.com/devgs8" target="_blank" style="color: #0078D4;">GitHub</a></p>
</div>
