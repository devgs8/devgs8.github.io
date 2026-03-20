---
layout: home
title: "TecDev — Technical Blog"
---

# 🚀 TecDev

**Technical insights for modern developers**

![Banner](https://img.shields.io/badge/Code-Java-blue?style=flat&logo=java)
![Banner](https://img.shields.io/badge/DevOps-Kubernetes-326CE5?style=flat&logo=kubernetes)
![Banner](https://img.shields.io/badge/Cloud-Azure-0078D4?style=flat&logo=microsoftazure)

---

## 📖 Latest Articles

{% for post in site.posts limit:5 %}
### [{{ post.title }}]({{ post.url }})
*{{ post.date | date: "%B %d, %Y" }}* — {{ post.excerpt | strip_html | truncatewords: 20 }}
{% else %}
*No posts yet. Check back soon! 📝*
{% endfor %}

---

## 🎯 What You'll Find Here

| Category | Description |
|----------|-------------|
| 💻 **Coding** | Java, Python, algorithms, best practices |
| 🐳 **DevOps** | Docker, Kubernetes, cloud infrastructure |
| 🇬🇧 **English for Tech** | Technical communication, vocabulary |
| 🛠️ **Tools** | Git, Linux, productivity hacks |

---

## 👋 About Me

I'm **DevGS8** — a developer passionate about clean code, DevOps, and learning in public.

🔗 [More about me →](/about)

---

*Building in public. Learning out loud.*
