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
    <em>Office</em>: &nbsp; [BOS17 - Amazon], Boston, MA
    <br>
    <em>Email (Work)</em>: &nbsp; saspadhi <i class='fas fa-fw fa-sm fa-at'></i> amazon <i class='fas fa-fw fa-xs fa-circle' style='font-size: 0.5em; vertical-align: 25%;'></i> com
    <br>
    <em>Email (Private)</em>: &nbsp; saswatpadhi <i class='fas fa-fw fa-sm fa-at'></i> protonmail <i class='fas fa-fw fa-xs fa-circle' style='font-size: 0.5em; vertical-align: 25%;'></i> com
</p>

#### <i class='fas fa-fw fa-sm fa-glasses'></i> Research Interests

<p>
    Programming Languages, &nbsp; Software Verification, &nbsp; Statistical Learning, &nbsp; Program Synthesis
</p>

</div>
<br>
<div class='pure-u-1 pure-u-md-13-24 bot-left' markdown='1'>

#### <i class='fas fa-fw fa-sm fa-user'></i> Bio

<div class='pure-g' style='text-align: justify; margin-top: -1em'>
<div class='pure-u-1 pure-u-md-22-24' markdown='1'>

I am an <span class='color-medium-accent'>applied scientist</span> in the proof platforms (P2) team
within the [Automated Reasoning Group][ARG] at [Amazon Web Services][AWS].
I am currently working on adding unbounded proof support to our verification infrastructure.

Before joining AWS, I graduated with a Ph.D. in [CS][CS@UCLA] from [UCLA] in 2020,
and a B.Tech. (Hons.) in [CSE][CS@IITB] from [IIT Bombay] in 2014.

I am interested in all aspects of
<span class='color-highlight'>designing and implementing high-performance systems
that have strong correctness guarantees</span>.
My PhD research was focused around using program synthesis and statistical learning techniques
to aid development of formally verified software.

</div>
</div>

</div>
<div class='pure-u-1 pure-u-md-11-24 bot-right' markdown='1'>

#### <i class='far fa-fw fa-sm fa-clock'></i> Recent Updates *&middot; &middot; &middot;* ([&#x200a;Details&#x200a;]({{ site.baseurl }}/updates))

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

[BOS17 - Amazon]:        https://www.google.com/maps/place/BOS17+-+Amazon/@42.3500003,-71.0511696,15z/data=!4m5!3m4!1s0x0:0x4c0f5065bae455b2!8m2!3d42.3500003!4d-71.0511696
[formal specifications]: https://en.wikipedia.org/wiki/Formal_specification
[invariants]:            https://en.wikipedia.org/wiki/Invariant_(mathematics)#Invariants_in_computer_science
