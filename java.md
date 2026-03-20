---
layout: default
title: Java
permalink: /java/
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
  .page-header {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    border-radius: 16px;
    color: white;
    margin-bottom: 2rem;
  }
  .post-card {
    border-bottom: 1px solid #eee;
    padding: 1.5rem 0;
    transition: transform 0.3s ease;
  }
  .post-card:hover {
    transform: translateX(5px);
  }
  .post-title a {
    text-decoration: none;
    color: #0078D4;
    font-size: 1.3rem;
  }
  .post-title a:hover {
    text-decoration: underline;
  }
  .post-meta {
    color: #777;
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }
  .read-more {
    display: inline-block;
    margin-top: 0.5rem;
    color: #0078D4;
    text-decoration: none;
    font-weight: 500;
  }
</style>

<div class="nav-buttons">
  <a href="/" class="btn btn-secondary">← Back to Home</a>
  <a href="/" class="btn btn-primary">🏠 Home</a>
  <a href="/english" class="btn btn-secondary">🇬🇧 English</a>
  <a href="/about" class="btn btn-secondary">👤 About</a>
</div>

<div class="page-header">
  <h1>☕ Java</h1>
  <p>Learning Java — from fundamentals to advanced concepts</p>
</div>

## 📖 Java Posts

<div class="posts-list">
  {% for post in site.posts %}
    {% if post.categories contains "java" %}
      <div class="post-card">
        <h2 class="post-title">
          <a href="{{ post.url }}">{{ post.title }}</a>
        </h2>
        <p class="post-meta">
          📅 {{ post.date | date: "%B %d, %Y" }}
        </p>
        <p>{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
        <a href="{{ post.url }}" class="read-more">Read more →</a>
      </div>
    {% endif %}
  {% else %}
    <p>📝 No Java posts yet. Check back soon!</p>
  {% endfor %}
</div>

<div class="nav-buttons" style="margin-top: 2rem;">
  <a href="/" class="btn btn-secondary">← Back to Home</a>
</div>
