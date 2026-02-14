---
layout: page

mathjax: true

css: [ 'updates' ]

icon: timeline fa-xs fa-rotate-270
title: Updates
---

<div class='categories'>
  <div class='cat type-award'>
    &nbsp;
    <i class='color-more-faded fas fa-fw fa-trophy'></i>
    &nbsp;
    <p class='visible-above-small'><br>awards</p>
  </div>
  <div class='cat type-position'>
    &nbsp;
    <i class='color-more-faded fas fa-fw fa-business-time'></i>
    &nbsp;
    <p class='visible-above-small'><br>positions</p>
  </div>
  <div class='cat type-publication'>
    &nbsp;
    <i class='color-more-faded fas fa-fw fa-file-invoice'></i>
    &nbsp;
    <p class='visible-above-small'><br>publications</p>
  </div>
  <div class='cat type-service'>
    &nbsp;
    <i class='color-more-faded fas fa-fw fa-hands-helping'></i>
    &nbsp;
    <p class='visible-above-small'><br>service</p>
  </div>
  <div class='cat type-talk'>
    &nbsp;
    <i class='color-more-faded fas fa-fw fa-microphone-alt'></i>
    &nbsp;
    <p class='visible-above-small'><br>talks</p>
  </div>
  <div class='cat type-milestone'>
    &nbsp;
    <i class='color-more-faded fas fa-fw fa-cake-candles'></i>
    &nbsp;
    <p class='visible-above-small'><br>milestones</p>
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
        <div class='visible-above-medium float-right-medium' style='height:100%'>
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
          <a class='hidden-above-medium' href='{{event_photo}}'><img src='{{event_photo}}'/></a>
        {%- endif %}
      </p>
    </div>
  </div>
{%- endfor -%}
</div>

<script>
  const events_container = document.getElementsByClassName('events')[0];

  function selectType(catType) {
    setTimeout(function() {
      Array.prototype.forEach.call(
        document.getElementsByClassName('event'),
        function(e) {
          if(typeof catType === 'undefined' || e.classList.contains(catType)) {
            e.style.display = 'flex';
          } else {
            e.style.display = 'none';
          }
        }
      );
      events_container.style.opacity = 1;
    }, 150);
  }

  function setCat(cat) {
    events_container.style.opacity = 0;
    Array.prototype.forEach.call(
      document.getElementsByClassName('cat'),
      c => c.classList.remove('selected')
    );
    if (cat) {
      cat.classList.add('selected');
      selectType(Array.from(cat.classList).filter(c => c.startsWith('type-'))[0]);
    } else {
      selectType();
    }
  }

  Array.prototype.forEach.call(
    document.getElementsByClassName('cat'),
    function(cat) {
      cat.onclick = function() {
        var catType = Array.from(cat.classList).filter(c => c.startsWith('type-'))[0].substring(5);
        if (cat.classList.contains('selected')) {
          window.location.hash = '';
          history.replaceState('', document.title, window.location.pathname);
        } else {
          window.location.hash = catType;
        }
      };
    }
  );

  function checkHash() {
    var hash = window.location.hash.substring(1).toLowerCase();
    if (hash) {
      Array.prototype.forEach.call(
        document.getElementsByClassName('cat'),
        function(cat) {
          var catType = Array.from(cat.classList).filter(c => c.startsWith('type-'))[0].substring(5);
          if (catType === hash && !cat.classList.contains('selected')) {
            setCat(cat);
          }
        }
      );
    } else if (document.querySelector('.cat.selected')) {
      setCat();
    }
  }

  window.addEventListener('load', checkHash);
  window.addEventListener('hashchange', checkHash);
</script>
