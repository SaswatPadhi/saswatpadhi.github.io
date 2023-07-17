---
layout: page

mathjax: true

css: [ 'publications' ]

icon: paperclip
title: Publications
---

<div class='pure-g instructions'>
  <div class='pure-u-1-3'>
    <a href='https://scholar.google.com/citations?user=42ZJT4wAAAAJ&hl=en' target='_blank'><i class='fas fa-fw fa-lg fa-user-graduate'></i> Google Scholar</a>
  </div>
  <div class='pure-u-1-3'>
    <a href='https://dblp.uni-trier.de/pers/hd/p/Padhi:Saswat' target='_blank'><i class='fas fa-fw fa-lg fa-book'></i> DBLP Entry</a>
  </div>
  <div class='pure-u-1-3'>
    <a onclick='toggle_tweets()'><i class='fab fa-fw fa-lg fa-twitter'></i> Paper Summaries</a>
  </div>
</div>

#### <i class='fas fa-fw fa-file-alt'></i> Conference Papers

{% include tools/pubs_filter.md type="conference" %}

#### <i class='fas fa-fw fa-book'></i> Journal Papers

{% include tools/pubs_filter.md type="journal" %}

#### <i class='fas fa-fw fa-file-alt'></i> Workshop &amp; Industry Papers

{% include tools/pubs_filter.md type="workshop|industry" %}

<hr>

#### <i class='fas fa-fw fa-file-invoice'></i> Reports &amp; Theses

{% include tools/pubs_filter.md type="report|thesis" %}

<hr>

#### <i class='fas fa-fw fa-file-contract'></i> Patent Grants &amp; Applications

{% for year_publications in grouped_publications -%}
  {%- assign publications = year_publications.items | sort: 'month' | reverse -%}
  {%- for article in publications -%}
    {%- if article.type != 'patent' -%} {%- continue -%} {%- endif -%}

<div class='pure-g paper-table'>
  <div class='pure-u-1-3 pure-u-sm-1-4 pure-u-md-5-24 pure-u-lg-1-6 paper-left'>
    <span class='target'>
      {{ article.DOI.target }} {{ article.year }}
    </span>
    <br>
    <sup>[&thinsp;<a href='https://patents.google.com/patent/US{{ article.DOI.number }}/en'>{{ article.DOI.number }}</a>&thinsp;]</sup>
  </div>
  <div class='pure-u-2-3 pure-u-sm-3-4 pure-u-md-19-24 pure-u-lg-5-6 paper-right'>
  <div>
    <a class='title color-highlight' href='{{ article.url }}'>{{ article.title }}</a><br>
    <div class='authors'>{% include tools/format_authors.md data=article.authors %}</div>
  </div>
  </div>
</div>

  {%- endfor -%}
{%- endfor -%}

<script>
function toggle_tweets() {
  Array.prototype.forEach.call(document.getElementsByClassName('tweet'), function(t) {
    if (t.parentElement.classList.contains('hovering')) {
      t.parentElement.classList.remove('hovering');
      t.style.transitionDelay = '';
    } else {
      t.style.transitionDelay = '0s';
      t.parentElement.classList.add('hovering');
    }
  });
}
</script>
