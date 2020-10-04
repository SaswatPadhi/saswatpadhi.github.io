---
layout: page

icon: edit
title: Blog
---

<div style='margin-top: 1.25em; font-size: 1.125em'>
{% assign blogposts = site.blogposts | sort: 'post_date' | reverse -%}
{% for post in blogposts -%}
  {% assign post_url = post.url | split: "index.html" | first %}
  <div style='margin: 1em 0'>
    <span class='heading' style='opacity: 0.7; font-size: 0.975em; letter-spacing: 0.075em;'>
      {%- capture post_date -%}
        {{- post.post_date | date: "%b =qq= %y" -}}
      {%- endcapture -%}
      {%- include tools/text_process.md data=post_date -%}
      &thinsp;<i class='fas fa-fw fa-sm fa-chevron-right'></i>
    </span>
    <i class='fas fa-sm fa-fw fa-{{ post.icon }}'></i>
    &thinsp;<a href='{{ post_url }}'>{% include tools/text_process.md data=post.title %}</a>
    <span class='visible-at-medium' style=' margin-left: 0.75em; opacity: 0.8; font-size: 0.75em'>
    {%- for cat in post.categories -%}
      <span style='display: inline-block; height: 1.5em; letter-spacing: 0.025em; margin: 0em 0.3125em; border-radius: 0.3125em; background: gray; color: white'>&ensp;#&thinsp;{{ cat }}&ensp;</span>
    {%- endfor -%}
    </span>
    <br>
    <div style='margin: 0.125em 0 0 7.875em; font-size: 0.725em; font-style: italic'>
      {% include tools/text_process.md data=post.tagline %}
    </div>
  </div>
{%- endfor %}
</div>