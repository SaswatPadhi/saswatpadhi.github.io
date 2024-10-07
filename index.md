---
layout: default

css: [ 'index' ]

icon: home
title: Home
---

<div class='pure-g'>

<div class='pure-u-1 pure-u-sm-1-2 pure-u-md-13-24 top-left'> 
{% if site.author.photo %}
  {%- if site.author.photo.local -%}
    {%- assign photo_url = site.baseurl | append: '/' | append: site.author.photo.local -%}
  {%- else -%}
    {%- assign photo_url = site.author.photo.remote -%}
  {%- endif %}
  <div>
    <img alt='{{ site.author.photo.alt }}' src='{{ photo_url }}'
         style='width: 60%; max-width: 200px; margin: 1.25em auto 0 auto; border-radius: 0.5em; box-shadow: 0em 0.15em 0.5em gray; display: block;'/>
  </div>
{% endif %}
</div>

<div class='pure-u-1 pure-u-sm-1-2 pure-u-md-11-24 top-right' markdown='1'>

#### <i class='far fa-fw fa-sm fa-paper-plane'></i> Contact Me

<p class='indented' markdown='1'>
  <em>Office</em>: &nbsp; [Google TM-2], San Jose, CA
  <br>
  <em>Email (Work)</em>: &nbsp; spadhi <i class='fas fa-fw fa-sm fa-at'></i> google &bull; com
  <br>
  <em>Email (Personal)</em>: &nbsp; saswatpadhi <i class='fas fa-fw fa-sm fa-at'></i> protonmail &bull; com
</p>

#### <i class='fas fa-fw fa-sm fa-glasses'></i> Research Interests

<p>
  Statistical Learning,
  Software Synthesis &amp; Verification
</p>

</div>
<br>
<div class='pure-u-1 pure-u-md-13-24 bot-left' markdown='1'>

#### <i class='fas fa-fw fa-sm fa-user'></i> About Me

<div class='pure-g' style='text-align: justify; margin-top: -1em'>
<div id='bio' class='pure-u-1 pure-u-md-22-24' markdown='1'>

I am a <span class='color-medium-accent'>senior software engineer</span>
in the [chromeOS] organization at Google.
Prior to that, I was an <span class='color-medium-accent'>applied scientist</span>
in the [Automated Reasoning Group][ARG] at [Amazon Web Services][AWS].

Before joining the industry,
I graduated with a <span class='color-medium-accent'>Ph.D.</span> in [CS][CS@UCLA] from [UCLA] in 2020,
and a <span class='color-medium-accent'>B.Tech. (Hons.)</span> in [CSE][CS@IITB] from [IIT Bombay] in 2014.

I consider myself a <span class='color-highlight'>backend generalist</span>,
and am primarily interested in <span class='color-highlight'>low-level systems software</span>.
My doctoral research was specialized on software analysis, synthesis and formal verification.

</div>
</div>

</div>
<div class='pure-u-1 pure-u-md-11-24 bot-right' markdown='1'>

<h4>
  <i class='fas fa-fw fa-xs fa-rotate-90 fa-timeline'></i>
  Recent Updates
  <b>&middot; &middot; &middot;</b>
  (<a href='{{ site.baseurl }}/updates'>&#x200a;Details&#x200a;</a>)
</h4>

<div class='pure-g table'>
  {%- assign sorted_updates = site.updates | sort: 'date' | reverse -%}
  {%- for event in sorted_updates limit: 6 -%}
    {%- assign eventdate = event.date | date: '%s' -%}
    {%- assign highlight = event.highlight | default: site.default_highlight[event.type] -%}
    <div class='pure-u-1-8 pure-u-sm-1-12 pure-u-md-1-6 event-date'>
    {%- if event.end_date == null -%}
      {{- event.date | date: "%b" -}}<i>{{- event.date | date: "%y" -}}</i>
    {%- else -%}
      {%- assign year = event.date | date: "%y" -%}
      {%- assign end_year = event.end_date | date: "%y" -%}
      <div class='multimonth'>{{- event.end_date | date: "%b" -}}<i>{{- end_year -}}</i><br><b>&#8942;</b><br>
      {{- event.date | date: "%b" -}}<i>{{- year -}}</i>
      </div>
    {% endif %}
    </div>
    <div class='pure-u-1-12 event-icon color-more-faded {% if highlight %} color-{{ highlight }} {% endif %}'>
      <i class='fas fa-fw fa-{{ event.icon | default: site.default_icon[event.type] }}'></i>
    </div>
    <div class='pure-u-19-24 pure-u-sm-5-6 pure-u-md-3-4 event-description'>
      {% include tools/text_process.md data=event.headline %}
      {% if event.location != null -%}
        <div class='event-location'>(&hairsp;{{event.location}}&hairsp;)</div>
      {%- endif %}
    </div>
  {% endfor %}
</div>

</div>
</div>

{% include common_abbrv.md %}
{% include common_links.md %}

[Google TM-2]:           https://www.google.com/maps/place/255+W+Tasman+Dr,+San+Jose,+CA+95134/@37.4119214,-121.9559877,17z/data=!3m1!4b1!4m6!3m5!1s0x808fc9ac1afd3753:0xf9adfba7f8b6bdac!8m2!3d37.4119214!4d-121.953799!16s%2Fg%2F11bw4pl794
