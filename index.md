---
layout: default
title: "TecDev — Technical Blog"
---

<div style="text-align: center; margin-bottom: 3rem;">
  <h1>🚀 TecDev</h1>
  <p style="font-size: 1.2rem; color: #555;">
    🧑‍💻 <strong>DevGS8</strong> — Helping developers grow through <strong>clear code</strong>, <strong>practical DevOps</strong>, and <strong>open knowledge</strong>.
  </p>
  <div style="margin-top: 1rem;">
    <a href="/" style="display: inline-block; padding: 0.5rem 1rem; margin: 0 0.5rem; background: #0078D4; color: white; text-decoration: none; border-radius: 5px;">🏠 Home</a>
    <a href="/about" style="display: inline-block; padding: 0.5rem 1rem; margin: 0 0.5rem; background: #6c757d; color: white; text-decoration: none; border-radius: 5px;">👤 About</a>
  </div>
</div>

---

## 📖 Latest Articles

<div class="posts-list">
  {% for post in site.posts %}
    <div style="border-bottom: 1px solid #eee; padding: 1.5rem 0;">
      <h2 style="margin-bottom: 0.5rem;">
        <a href="{{ post.url }}" style="text-decoration: none; color: #0078D4;">{{ post.title }}</a>
      </h2>
      <p style="color: #777; font-size: 0.9rem;">
        📅 {{ post.date | date: "%B %d, %Y" }} • 📂 {{ post.categories | join: ", " }}
      </p>
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
      <a href="{{ post.url }}" style="display: inline-block; margin-top: 0.5rem; color: #0078D4; text-decoration: none;">Read more →</a>
    </div>
  {% else %}
    <p>No posts yet. Check back soon! 📝</p>
  {% endfor %}
</div>

---

## 🎯 What You'll Find Here

| Category | Description |
|----------|-------------|
| 💻 **Coding** | Java, algorithms, best practices |
| 🐳 **DevOps** | Docker, Kubernetes, cloud infrastructure |
| 🇬🇧 **English for Tech** | Technical communication, vocabulary |
| 🛠️ **Tools** | Git, Linux, productivity hacks |

---

<div style="text-align: center; margin-top: 3rem; padding: 1rem; background: #f8f9fa; border-radius: 10px;">
  <p style="margin: 0;">📬 <strong>Stay tuned</strong> — new posts every week!</p>
  <p style="margin: 0.5rem 0 0;">
    <a href="https://github.com/devgs8" target="_blank" style="text-decoration: none; color: #333;">GitHub</a>
  </p>
</div>
