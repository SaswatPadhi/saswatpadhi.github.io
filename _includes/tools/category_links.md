{% for all_cat in include.categories -%}
  {%- assign prefix = "" | split: "" -%}
  <span class='category'>&ensp;
    {%- assign cats = all_cat | split: "/" -%}
    {%- for cat in cats -%}
      {%- assign prefix = prefix | push: cat -%}
      {%- if forloop.first -%} # {%- else -%} / {%- endif -%}
      &thinsp;<a href='/blog/#{{ prefix | join: "_"}}' class='color-medium-accent'>{{ cat }}</a>
      {%- unless forloop.last -%} &thinsp; {%- endunless -%}
    {%- endfor -%}
  &ensp;</span>
{% endfor -%}