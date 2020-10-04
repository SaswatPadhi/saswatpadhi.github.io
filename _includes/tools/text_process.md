{%- capture data -%}
  {%- comment -%}
    IMPORTANT: Do NOT remove the space around =qq=.
               It corrects the spacing around quotes.
  {%- endcomment -%}

  {{- include.data | replace: "%URL%", site.url
                   | replace: "%BASE_URL%", site.baseurl
                   | replace: "<p ", "<p markdown='1' "
                   | replace: "<div ", "<div markdown='1' "
                   | replace: "<details ", "<details markdown='1' "
                   | replace: "<section ", "<section markdown='1' "
                   | replace: "<p>", "<p markdown='1'>"
                   | replace: "<div>", "<div markdown='1'>"
                   | replace: "<details>", "<details markdown='1'>"
                   | replace: "<section>", "<section markdown='1'>"
                   | replace: " =qq= ", "&nbsp;&apos;&hairsp;"
                   | replace: "=fa^", "<i class='fas fa-fw fa-"
                   | replace: "^fa=", "'></i>"
                   | replace: "=sc^", "<span class='small-caps'>"
                   | replace: "^sc=", "</span>"
  }}

  {% unless include.no_links -%}{%- include common_links.md -%}{%- endunless %}

  {% unless include.no_abbrv -%}{%- include common_abbrv.md -%}{%- endunless %}
{%- endcapture -%}

{%- capture result -%}
  {{- data | markdownify | strip | replace: "&amp;", "&" -}}
{%- endcapture -%}

{%- if include.para -%}
  {{- result -}}
{%- else -%}
  {%- capture ptag -%} {{- result | slice: 0, 3 -}} {%- endcapture -%}

  {%- if ptag != "<p>" -%}
    {{- result -}}
  {%- else -%}
    {%- assign n = result | size | minus: 3 -%}
    {{- result | slice: 3, n | replace_first: "</p>", "" -}}
  {%- endif -%}
{%- endif -%}