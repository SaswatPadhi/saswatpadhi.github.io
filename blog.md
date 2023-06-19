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
    <span class='categories visible-at-medium'>
    {%- for all_cat in post.categories -%}
      <span class='category'>&ensp;
        {%- assign cats = all_cat | split: "/" -%}
        {%- for cat in cats -%}
          {%- if forloop.first -%} # {%- else -%} / {%- endif -%}
          &thinsp;<a href='' class='color-medium-accent'>{{ cat }}</a>
          {%- unless forloop.last -%} &thinsp; {%- endunless -%}
        {%- endfor -%}
      &ensp;</span>
    {%- endfor -%}
    </span>
    <br>
    <div class='tagline'>
      {% include tools/text_process.md data=post.tagline %}
    </div>
  </div>
{%- endfor %}
</div>