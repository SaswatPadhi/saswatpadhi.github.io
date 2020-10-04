{% assign base_font = site.fonts.base | default: 'Noto Sans' %}
{% assign head_font = site.fonts.head | default: 'Montserrat' %}
{% assign mono_font = site.fonts.mono | default: 'Ubuntu Mono' %}

$site-font-stack-base: '{{ base_font }}', sans-serif;
$site-font-stack-head: '{{ head_font }}', sans-serif;
$site-font-stack-mono: '{{ mono_font }}', monospace;

$site-tagline: {{ site.tagline | default: '' | size }};
$site-tooltips: {{ site.theme.tooltips | default: 'enabled' }};
$site-hover-light: {{ site.theme.hover_light | default: 'enabled' }};
