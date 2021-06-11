---
layout: page

icon: desktop
title: Slides

text_of_type:
  competition: 'Competition Contribution'
  conference: 'Conference Presentation'
  defense: 'PhD Thesis Defense'
---
{%- assign all_slides = site.slides | sort: 'presented_on' | reverse -%}

<div style='margin:0em 1.5em 0.5em 0'>
{%- for slides in all_slides -%}
  {%- assign slides_url = slides.url | split: "index.html" | first %}
  <div class='heading' style='font-size:1.25em; margin:1em 0 0.125em 0.2em'>
    <span style='opacity: 0.7; font-size: 0.975em; font-weight: bold; margin-right:-0.125em'>
      {% capture presented_on -%}
        {{- slides.presented_on | date: "%d %b =qq= %y&thinsp;" -}}
      {%- endcapture -%}
      {%- include tools/text_process.md data=presented_on -%}
      <i class='fas fa-fw fa-sm fa-chevron-right'></i>
    </span>
    <a href='{{ slides_url }}'>{% include tools/text_process.md data=slides.heading %}</a>
  </div>
  <div class='clearfix' style='width:100%'>
    <a href='{{ slides_url }}' style='float:left'>
      <img src="{{ site.baseurl }}{{ slides.url | split: '/' | reverse | shift | reverse | join: '/' | append: '/thumb.png' }}"
          alt="thumbnail" style='height:8em; border-radius:0.75em; box-shadow:-1px 2px 6px rgba(0,0,0,0.4)'>
    </a>
    <div style='float:left; margin:0 0 0 1em'>
      <div style='font-size:1.075em; margin:0.75em 0 -0.25em 0'>
        <b>{% include tools/text_process.md data=slides.target %}</b>{% if slides.location %},
        &thinsp;{%- include tools/text_process.md data=slides.location %}{% endif %}
      </div>
      <div style='margin:0 0 0.525em 0'>
        &ensp;<span style='font-size:1.25em'>&#x2937;</span>&nbsp;<a href='{{ site.baseurl }}/publications/{{ slides.publink }}'>Paper</a>
      </div>
      <div style='margin:0.5em 0 0.875em 0; font-style:italic'>
        ({{ page.text_of_type[slides.type] }})
      </div>
      <div style='margin:0'>
        {{ slides.frames }} slides {% if slides.time %}&ensp;&bullet;&ensp; ~&hairsp;{{ slides.time }}&thinsp;mins{% endif %} {% if slides.tech %}&ensp;&bullet;&ensp; <abbr title='{{ slides.tech.name }}'><i class='fa-fw {{ slides.tech.icon }}'></i></abbr>{% endif %}
      </div>
    </div>
  </div>
{%- endfor -%}
</div>