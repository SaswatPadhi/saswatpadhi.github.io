{%- assign tag = include.tag | default: 'em' -%}
{%- capture highlighted_name -%}<{{ tag }} class='color-faded color-medium-accent'>{{ site.author.name }}</{{ tag }}>{%- endcapture -%}

{%- capture authors -%}
  {{ include.data | join: ',&nbsp; ' }}
{%- endcapture -%}
{%- capture result -%}
  {%- include tools/text_process.md data=authors -%}
{%- endcapture -%}

{{- result | replace: site.author.name, highlighted_name -}}