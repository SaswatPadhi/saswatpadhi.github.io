---
layout: page

mathjax: true

css: [ 'updates' ]

icon: user-clock
title: Updates
---

<div class='categories'>
  <div class='cat type-award'>
    &emsp;
    <i class='color-more-faded fas fa-fw fa-trophy'></i>
    &emsp;
    <p class='visible-at-small'><br>awards</p>
  </div>
  <div class='cat type-position'>
    &emsp;
    <i class='color-more-faded fas fa-fw fa-business-time'></i>
    &emsp;
    <p class='visible-at-small'><br>positions</p>
  </div>
  <div class='cat type-publication'>
    &emsp;
    <i class='color-more-faded fas fa-fw fa-file-invoice'></i>
    &emsp;
    <p class='visible-at-small'><br>publications</p>
  </div>
  <div class='cat type-service'>
    &emsp;
    <i class='color-more-faded fas fa-fw fa-hands-helping'></i>
    &emsp;
    <p class='visible-at-small'><br>service</p>
  </div>
  <div class='cat type-lecture'>
    &emsp;
    <i class='color-more-faded fas fa-fw fa-microphone-alt'></i>
    &emsp;
    <p class='visible-at-small'><br>lectures</p>
  </div>
  <div class='cat type-life_event'>
    &emsp;
    <i class='color-more-faded fas fa-fw fa-cake-candles'></i>
    &emsp;
    <p class='visible-at-small'><br>life events</p>
  </div>
</div>

<div class='events'>
{%- assign sorted_updates = site.updates | sort: 'date' | reverse -%}
{%- for event in sorted_updates -%}
  {%- assign event_photo = site.baseurl | append: '/assets/img/photos/' | append: event.photo -%}
  {%- assign highlight = event.highlight | default: site.default_highlight[event.type] -%}
  <div class='pure-g event type-{{- event.type -}}'>
    <div class='pure-u-1-8 pure-u-sm-1-12 event-date'>
      {%- if event.end_date != null -%}
        {{- event.end_date | date: "%b" -}}<i>{{event.end_date | date: "%y"}}</i><br><b>&vellip;</b><br>
      {%- endif -%}
      {{- event.date | date: "%b" -}}<i>{{- event.date | date: "%y" -}}</i>
    </div>
    <div class='pure-u-1-12 event-icon color-more-faded {% if highlight -%} color-{{- highlight -}} {%- endif %}'>
      <i class='fas fa-fw fa-{{ event.icon | default: site.default_icon[event.type] }}'></i>
    </div>
    <div class='pure-u-19-24 pure-u-sm-5-6 event-description'>
      {% if event.photo != null -%}
        <div class='visible-at-medium float-right-medium' style='height:100%'>
          <a class='photo-box' href='{{event_photo}}'><img src='{{event_photo}}'/></a>
        </div>
      {%- endif %}
      <span class='heading'>{%- include tools/text_process.md data=event.headline -%}</span>
      {% if event.location != null -%}<div class='event-location'>(&hairsp;{{- event.location -}}&hairsp;)</div>{%- endif %}
      <p>
        {% include tools/text_process.md data=event.content %}
        {%- if event.type == "publication" and event.publink -%}
          {%- assign publink = site.baseurl | append: '/publications/' | append: event.publink -%}
          {%- for pub in site.publications -%}
            {%- if pub.id == publink and pub.tweet %}
              <blockquote class='tweet'>{% include tools/text_process.md data=pub.tweet para=true %}</blockquote>
            {%- endif %}
          {%- endfor %}
        {%- endif -%}
        {% if event.photo != null -%}
          <br>
          <a class='hidden-at-medium' href='{{event_photo}}'><img src='{{event_photo}}'/></a>
        {%- endif %}
      </p>
    </div>
  </div>
{%- endfor -%}
</div>

<script>
  var events_container = document.getElementsByClassName('events')[0];

  function select(cat) {
    setTimeout(function() {
      Array.prototype.forEach.call(document.getElementsByClassName('event'), function(e) {
        if(typeof cat === 'undefined' || e.classList.contains(cat)) {
          e.style.display = 'flex';
        } else {
          e.style.display = 'none';
        }
      });
      events_container.style.opacity = 1;
    }, 150);
  }

  Array.prototype.forEach.call(document.getElementsByClassName('cat'), function(cat) {
    cat.onclick = function(){
      events_container.style.opacity = 0;
      if(cat.classList.contains('selected')) {
        cat.classList.remove('selected');
        select();
      } else {
        Array.prototype.forEach.call(document.getElementsByClassName('cat'),
                                     cat => cat.classList.remove('selected'));
        class_cat = Array.from(cat.classList).filter(c => c.startsWith('type-'))[0];
        cat.classList.add('selected');
        select(class_cat);
      }
    };
  });
</script>