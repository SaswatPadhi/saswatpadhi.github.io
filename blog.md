---
layout: page

css: [ 'blog' ]

icon: edit
title: Blog
---

<div class='container pure-g'>
  <div class='posts pure-u-1-1 pure-u-sm-4-5'>
    {%- assign raw_tree = "" %}
    {%- assign blogposts = site.blogposts | sort: 'post_date' | reverse -%}
    {% for post in blogposts -%}
      {% assign post_url = post.url | replace: "index.html", "" %}
      <div class='post'>
        <span class='date heading'>
          {%- capture post_date -%}
            {{- post.post_date | date: "%b =qq= %y" -}}
          {%- endcapture -%}
          {%- include tools/text_process.md data=post_date -%}
          &thinsp;<i class='fas fa-fw fa-2xs fa-caret-right'></i>
        </span>
        <i class='fas fa-sm fa-fw fa-{{ post.icon }}'></i>
        &thinsp;<a href='{{ post_url }}' class='title'>
          {%- include tools/text_process.md data=post.title -%}
        </a>
        <br>
        <div class='tagline'>
          {% include tools/text_process.md data=post.tagline %}
        </div>
        {% if post.categories -%}
        <div class='categories'>
          {% for cat in post.categories -%}
            {%- assign parts = cat | split: '/' -%}
            {%- assign prefix = "" | split: "" -%}
            <span class='category {% for p in parts %} {% assign prefix = prefix | push: p %} cat-{{ prefix | join: "_" }} {% endfor %}'>&ensp;
            {%- assign cur_path = "" -%}
            {%- for part in parts -%}
              {%- if cur_path == "" -%}
                {%- assign cur_path = part -%}
              {%- else -%}
                {% assign cur_path = cur_path | append: "/" | append: part %}
              {%- endif -%}
              {%- assign raw_tree = raw_tree | append: "," | append: cur_path -%}
              {%- if forloop.first -%} # {%- else -%} / {%- endif -%}
                &thinsp;<a href='' class='color-medium-accent'>{{ part }}</a>
              {%- unless forloop.last -%} &thinsp; {%- endunless -%}
            {%- endfor -%}
            &ensp;</span>
          {% endfor -%}
        </div>
        {%- endif -%}
      </div>
    {%- endfor %}
  </div>
  <div class='cat-explorer pure-u-1-1 pure-u-sm-1-5'>
    <h3>Categories</h3>
    <div class='pure-g'>
      {%- assign unique_tree = raw_tree | split: "," | uniq | sort -%}
      {%- assign first_root = 1 -%}
      {%- for item in unique_tree -%}
        {%- if item != "" -%}
          {%- assign parts = item | split: '/' -%}
          {%- assign depth = parts.size | minus: 1 -%}
          {%- assign label = parts | last -%}
          {%- assign all_parts = parts | join: '_' -%}

          {%- assign count = 0 -%}
          {%- for post in blogposts -%}
            {%- assign match = false -%}
            {%- for cat in post.categories -%}
              {%- if cat == item -%}
                {%- assign match = true -%}
              {%- else -%}
                {%- assign prefix = item | append: "/" -%}
                {%- assign prefix_len = prefix | size -%}
                {%- assign cat_prefix = cat | slice: 0, prefix_len -%}
                {%- if cat_prefix == prefix -%}
                  {%- assign match = true -%}
                {%- endif -%}
              {%- endif -%}
            {%- endfor -%}
            {%- if match -%}
              {%- assign count = count | plus: 1 -%}
            {%- endif -%}
          {%- endfor -%}

          {% if depth == 0 -%}
          {%- if first_root == 1 -%}
          {%- assign first_root = 0 -%}
          {%- else -%}
          </div>
          {%- endif -%}
          <div class='pure-u-1-2 pure-u-sm-1-1'>
          {%- endif %}
          <div id='{{ all_parts }}'
               class="cat {% if depth == 0 -%}cat-root{%- endif -%}"
               style="padding-left: {{ depth }}em">
            {% if depth == 0 -%}
              <i class="cat-icon fas fa-fw fa-folder-open"></i>
            {% else -%}
              <i class="cat-icon fas fa-fw fa-arrow-turn-up fa-rotate-90"></i>
            {% endif -%}
            <a onclick="event.preventDefault()">{{ label }}</a>
            <small>({{ count }})</small>
          </div>
        {%- endif -%}
      {%- endfor -%}
    </div>
  </div>
</div>

<script>
  const posts_container = document.getElementsByClassName('posts')[0];

  function selectPosts(cat) {
    setTimeout(function() {
      console.log('x' + cat + 'x')
      const posts = document.getElementsByClassName('post')
      if(typeof cat === 'undefined') {
        Array.prototype.forEach.call(posts, p => p.style.display = 'block');
      }
      else {
        Array.prototype.forEach.call(posts, p => p.style.display = 'none');
        Array.from(posts).filter(p => p.querySelector('.category.cat-' + cat))
                         .forEach(p => p.style.display = 'block');
      }
      posts_container.style.opacity = 1;
    }, 150);
  }

  function setCat(cat) {
    posts_container.style.opacity = 0;
    Array.prototype.forEach.call(
      document.getElementsByClassName('cat'),
      c => c.classList.remove('selected')
    );
    if (cat) {
      cat.classList.add('selected');
      selectPosts(cat.id);
    } else {
      selectPosts();
    }
  }

  Array.prototype.forEach.call(
    document.getElementsByClassName('cat'),
    function(cat) {
      cat.onclick = function() {
        if (cat.classList.contains('selected')) {
          window.location.hash = '';
          history.replaceState('', document.title, window.location.pathname);
        } else {
          window.location.hash = cat.id;
        }
      };
    }
  );

  function checkHash() {
    var hash = window.location.hash.substring(1).toLowerCase();
    if (hash) {
      var cat = document.getElementById(hash);
      if (cat && !cat.classList.contains('selected')) setCat(cat);
    } else if (document.querySelector('.cat.selected')) {
      setCat();
    }
  }

  window.addEventListener('load', checkHash);
  window.addEventListener('hashchange', checkHash);
</script>
