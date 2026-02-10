---
layout: default

css: [ 'index' ]

icon: home
title: Home
---

<div class='pure-g'>

<div class='pure-u-1 pure-u-sm-1-2 pure-u-md-13-24 top-left'> 
{%- if site.author.photo -%}
  {%- if site.author.photo.local -%}
    {%- assign photo_url = site.baseurl | append: '/' | append: site.author.photo.local -%}
  {%- else -%}
    {%- assign photo_url = site.author.photo.remote -%}
  {%- endif %}
  <div>
    <img alt='{{ site.author.photo.alt }}' src='{{ photo_url }}'/>
  </div>
{% endif -%}
</div>

<div class='pure-u-1 pure-u-sm-1-2 pure-u-md-11-24 top-right' markdown='1'>

#### <i class='far fa-fw fa-sm fa-paper-plane'></i> Contact Me

<p class='indented' markdown='1'>
  <em>Office</em>:&nbsp; [Google Mercer], Seattle, WA
  <br>
  <em>Email (Work)</em>:&nbsp; spadhi <i class='fas fa-fw fa-sm fa-at'></i> google &bull; com
  <br>
  <em>Email (Personal)</em>:&nbsp; saswatpadhi <i class='fas fa-fw fa-sm fa-at'></i> protonmail &bull; com
</p>

#### <i class='fas fa-fw fa-sm fa-glasses'></i> Technical Expertise

<p class='indented' markdown='1'>
  &#x2B29;&nbsp; Program (Performance, Correctness) Analysis
  <br>
  &#x2B29;&nbsp; Systems Architecture (OS, Virtualization)
  <br>
  &#x2B29;&nbsp; Data-Driven Statistical Inference
</p>

</div>
<br>
<div class='pure-u-1 pure-u-md-13-24 bot-left' markdown='1'>

#### <i class='fas fa-fw fa-sm fa-user'></i> About Me

<div class='pure-g' style='text-align: justify; margin-top: -1em'>
<div id='bio' class='pure-u-1 pure-u-md-22-24' markdown='1'>

I am a <span class='color-medium-accent'>senior software engineer</span>
working on the [Compute Engine][GCE] within the [Google Cloud Platform][GCP].
Previously, I have worked on virtualization projects
across [chromeOS] and [Android] platforms within Google,
and as an <span class='color-medium-accent'>applied scientist</span>
in the [Automated Reasoning Group][ARG] at [Amazon Web Services][AWS].

Before joining the industry,
I earned a <span class='color-medium-accent'>Ph.D.</span> in [CS][CS@UCLA] at [UCLA] in 2020,
specializing in program analysis.
Prior to that, I completed my <span class='color-medium-accent'>B.Tech. (Hons.)</span>
in [Computer Science and Engineering][CS@IITB] from [IIT Bombay] in 2014.

I consider myself to be a <span class='color-highlight'>systems generalist</span>;
interested in <span class='color-highlight'>low-level architecture</span>
and <span class='color-highlight'>performance optimization</span>.

</div>
</div>

</div>
<div class='pure-u-1 pure-u-md-11-24 bot-right' markdown='1'>

<h4>
  <i class='fas fa-fw fa-xs fa-rotate-90 fa-timeline'></i>
  Recent <a href='{{ site.baseurl }}/updates'>Updates</a>
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

[Google Mercer]:           https://www.google.com/maps/place/Google+Mercer/@47.6248655,-122.3389669,742m/data=!3m2!1e3!4b1!4m6!3m5!1s0x5490150074d45627:0xa8f9d4181a08bcb1!8m2!3d47.6248619!4d-122.3363866!16s%2Fg%2F11y3lwdhml
