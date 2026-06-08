---
layout: page
permalink: /archive/
title: Posts Archive
published: false

---


<div id="archives">
  <section id="archive">
     <h3>Most Recent Posts</h3>
      {% assign posts = site.posts | where_exp: "post", "post.wip != true" | where_exp: "post", "post.draft != true" %}
      {% for post in posts %}
          {% capture month %}{{ post.date | date: '%B %Y' }}{% endcapture %}
          {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
          {% if forloop.first %}
      <ul class="this">
          {% else %}
          {% if year != current_year %}
      </ul>
      <h2 style="text-align:left;">{{ post.date | date: '%Y' }}</h2>
      <ul class="past">
          {% endif %}
          {% if month != current_month %}
          <h3 style="text-align:left;">{{ post.date | date: '%B %Y' }}</h3>
          {% endif %}
          {% endif %}
          <p><b><a href="{{ site.baseurl }}{{ post.url }}">{% if post.title and post.title != "" %}{{post.title}}{% else %}{{post.excerpt |strip_html}}{%endif%}</a></b> - {% if post.date and post.date != "" %}{{ post.date | date: "%e %B %Y" }}{%endif%}</p>
          {% assign current_month = month %}
          {% assign current_year = year %}
          {% endfor %}
      {% if posts.size > 0 %}
      </ul>
      {% endif %}
    <h3>Oldest Posts</h3>
  </section>
</div>
