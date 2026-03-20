---
layout: home
title: "TecDev — Technical Blog"
---

# 🚀 TecDev

**Technical insights for modern developers**

Welcome to my technical blog. Here I document my journey through code, infrastructure, and the tools that shape modern software development.

---

## 📖 Latest Articles

{% for post in site.posts limit:5 %}
### [{{ post.title }}]({{ post.url }})
*{{ post.date | date: "%B %d, %Y" }}* — {{ post.excerpt | strip_html | truncatewords: 20 }}
{% endfor %}

---

## 🎯 What You'll Find Here

| Category | Description |
|----------|-------------|
| 💻 **Coding** | Tips, patterns, and best practices |
| 🐳 **DevOps** | Kubernetes, Docker, cloud infrastructure |
| 🇬🇧 **English for Tech** | Technical communication, vocabulary, and documentation |
| 🛠️ **Tools** | Productivity hacks and dev environment setup |

---

## 📬 Stay Connected

- **GitHub:** [github.com/devgs8](https://github.com/devgs8)
- **Blog:** [devgs8.github.io](https://devgs8.github.io)

---

*Building in public. Learning out loud.*
