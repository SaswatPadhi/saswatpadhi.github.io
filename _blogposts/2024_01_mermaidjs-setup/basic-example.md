```{{ include.lang | default: 'mermaid' }} {% raw %}
  graph LR

  A --> B
{% endraw %} ```
{: {{ include.id }} {{ include.hl | default: '.no-highlight' }} {{ include.pz | default: '.no-pan-zoom' }} {{ include.more }} }
