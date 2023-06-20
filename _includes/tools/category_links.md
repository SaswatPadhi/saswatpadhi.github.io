{% for all_cat in include.categories -%}
  <span class='category'>&ensp;
    {%- assign cats = all_cat | split: "/" -%}
    {%- for cat in cats -%}
      {%- if forloop.first -%} # {%- else -%} / {%- endif -%}
      &thinsp;<a href='' class='color-medium-accent'>{{ cat }}</a>
      {%- unless forloop.last -%} &thinsp; {%- endunless -%}
    {%- endfor -%}
  &ensp;</span>
{% endfor -%}