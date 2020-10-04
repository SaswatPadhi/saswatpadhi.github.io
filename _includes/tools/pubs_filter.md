{%- assign grouped_publications = site.publications | group_by: 'year' | sort: 'name' | reverse -%}
{%- for year_publications in grouped_publications -%}
  {%- assign publications = year_publications.items | sort: 'month' | reverse -%}
  {%- for article in publications -%}
    {%- if article.type != include.type -%} {%- continue -%} {%- endif -%}

<div class='pure-g paper-table'>
  <div class='pure-u-1-3 pure-u-sm-1-4 pure-u-md-5-24 pure-u-lg-1-6 paper-left'>
      {% if article.type != "manuscript" -%}
        <span style='letter-spacing: 0.025em;' class='target'>
          {%- capture target -%}
            {{- article.target.short }} =qq= {{ article.year | slice: 2,2 -}}
          {%- endcapture -%}
          {%- include tools/text_process.md data=target -%}
        </span><br>
      {%- else -%}
        <div style='font-size: 0.8em;' class='target'>{{- article.target.short -}}</div>
      {%- endif %}
    <div class='icons'>(
    {%- if article.to_appear -%}
      <em style='letter-spacing: 0.25px;'>... To Appear ...</em>
    {%- elsif article.DOI or article.links.PDF or article.links.Slides %}
        <a href='{{ article.url }}#bibtex-citation'><i class='fas fa-fw fa-quote-left'></i></a>
        {% if article.links.PDF -%}
          <a href='{% include tools/text_process.md data=article.links.PDF %}'><i class='far fa-file-pdf'></i></a>
        {%- endif %}
        {% if article.links.Slides -%}
          <a href='{% include tools/text_process.md data=article.links.Slides %}'><i class='fas fa-fw fa-desktop'></i></a>
        {%- endif %}
    {% endif %})</div>
  </div>
  <div class='pure-u-2-3 pure-u-sm-3-4 pure-u-md-19-24 pure-u-lg-5-6 paper-right'>
    <div>
      <a class='title highlighted' href='{{ article.url }}'>{{ article.title }}</a><br>
      <div class='authors'>{% include tools/format_authors.md data=article.authors %}</div>
      {%- if article.awards %}
        <div class='awards color-accent'>
          {%- for award in article.awards -%}
            &loang;&hairsp;<i class='fas fa-fw fa-sm fa-{{ award.icon }}'></i>&nbsp; {% include tools/text_process.md data=award.desc %}&hairsp;&roang; &nbsp;
          {%- endfor -%}
        </div>
      {% endif -%}
      {%- if article.tweet -%}
        <blockquote class='tweet'>{%- include tools/text_process.md data=article.tweet para=true -%}</blockquote>
      {%- endif -%}
    </div>
  </div>
</div>

  {%- endfor -%}
{%- endfor -%}