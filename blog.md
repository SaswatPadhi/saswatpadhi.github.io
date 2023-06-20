---
layout: page

css: [ 'blog' ]

icon: edit
title: Blog
---

<div class='container'>
{% assign blogposts = site.blogposts | sort: 'post_date' | reverse -%}
{% for post in blogposts -%}
  {% assign post_url = post.url | split: "index.html" | first %}
  <div class='post'>
    <span class='date heading'>
      {%- capture post_date -%}
        {{- post.post_date | date: "%b =qq= %y" -}}
      {%- endcapture -%}
      {%- include tools/text_process.md data=post_date -%}
      &thinsp;<i class='fas fa-fw fa-sm fa-chevron-right'></i>
    </span>
    <i class='fas fa-sm fa-fw fa-{{ post.icon }}'></i>
    &thinsp;<a href='{{ post_url }}' class='title'>
      {%- include tools/text_process.md data=post.title -%}
    </a>
    <br>
    <div class='tagline'>
      {% include tools/text_process.md data=post.tagline %}
    </div>
    <div class='categories'>
      {% include tools/category_links.md categories=post.categories %}
    </div>
  </div>
{%- endfor %}
</div>