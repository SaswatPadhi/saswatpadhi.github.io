---
layout: default

css: [ 'index' ]

icon: home
title: Home
---

<div class='pure-g'>

<div class='pure-u-1 pure-u-sm-1-2 pure-u-md-13-24 top-left'> {% include front_pic.html %} </div>

<div class='pure-u-1 pure-u-sm-1-2 pure-u-md-11-24 top-right' markdown='1'>

#### <i class='far fa-fw fa-sm fa-paper-plane'></i> Contact Me

<p class='indented' markdown='1'>
    <em>Office</em>: &nbsp; [BOS17 - Amazon], Boston, MA
    <br>
    <em>Email</em>: &nbsp; saspadhi <i class='fas fa-fw fa-sm fa-at'></i> amazon.com
    <br>
    <em>Skype</em>: &nbsp; saswat[d<i class='fas fa-fw fa-xs fa-circle' style='font-size: 0.5em; vertical-align: 25%;'></i>t]padhi
</p>

#### <i class='fas fa-fw fa-sm fa-glasses'></i> Research Interests

<p>
    Programming Languages, &nbsp; Program Synthesis and Verification, &nbsp; Statistical Learning
</p>

</div>
<br>
<div class='pure-u-1 pure-u-md-13-24 bot-left' markdown='1'>

#### <i class='fas fa-fw fa-sm fa-user'></i> Bio

<div class='pure-g' style='text-align: justify; margin-top: -1em'>
<div class='pure-u-1 pure-u-md-22-24' markdown='1'>

I recently started working as an <span class='color-medium-accent'>applied scientist</span>
in [Michael Whalen]’s proof platforms (P2) team
within the [Automated Reasoning Group][ARG] at [Amazon Web Services][AWS].

My current research is focused on <span class='color-highlight'>using program synthesis
to aid users in writing highly reliable software</span>.
I design techniques to help developers generate [formal specifications] for their programs
{% comment -%}
<span class='superscript'>[&thinsp;[PLDI&apos;16]({{ site.baseurl }}/publications/pldi2016_pie), [OOPSLA&apos;18]({{ site.baseurl }}/publications/oopsla2018_flashprofile)&thinsp;]</span>
{%- endcomment -%}
as well as synthesize sufficient [invariants] that provably establish their correctness.
{% comment -%}
<span class='superscript'>[&thinsp;[PLDI&apos;16]({{ site.baseurl }}/publications/pldi2016_pie), [CAV&apos;19]({{ site.baseurl }}/publications/cav2019_overfitting)&thinsp;]</span>
{%- endcomment %}

I graduated with a Ph.D. in [CS][CS@UCLA] from [UCLA] in 2020,
and a B.Tech. (Hons.) in [CSE][CS@IITB] from [IIT Bombay] in 2014.

</div>
</div>

</div>
<div class='pure-u-1 pure-u-md-11-24 bot-right' markdown='1'>

#### <i class='far fa-fw fa-sm fa-clock'></i> Recent Updates *&middot; &middot; &middot;* ([&#x200a;Details&#x200a;]({{ site.baseurl }}/updates))

{% include front_updates.html %}

</div>
</div>

{% include common_abbrv.md %}
{% include common_links.md %}

[BOS17 - Amazon]:        https://www.google.com/maps/place/BOS17+-+Amazon/@42.3500003,-71.0511696,15z/data=!4m5!3m4!1s0x0:0x4c0f5065bae455b2!8m2!3d42.3500003!4d-71.0511696
[formal specifications]: https://en.wikipedia.org/wiki/Formal_specification
[invariants]:            https://en.wikipedia.org/wiki/Invariant_(mathematics)#Invariants_in_computer_science
