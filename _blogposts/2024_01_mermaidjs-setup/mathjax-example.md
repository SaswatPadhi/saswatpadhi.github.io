```{{ include.lang | default: 'mermaid' }} {% raw %}
  graph LR

  classDef invisible fill:black,stroke:black

  A($x = y$)
  B($y = z$)
  X( ):::invisible
  C($x = z$)

  A --- X
  B --- X
  X -- $\mathrm{\ transitivity\ }$ --> C
{% endraw %} ```
{: {{ include.id }} .no-highlight .no-pan-zoom style='margin: 0.25em 1em 0;' }
