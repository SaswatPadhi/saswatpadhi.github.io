---
icon: diagram-project

post_date: 2024-01-01

title: 'My Mermaid Setup'
tagline: 'MathJax support, pan and zoom, auto resizing, and more'

categories: [ 'sw/js' ]

mermaid: true

js: ./scripts
---

I recently learned about [Mermaid],
while I was searching for libraries to render some diagrams
in my [previous blog post](../2023-12_qubes-audio-control/).
And I instantly fell in love with Mermaid,
and its [Markdown]-style syntax for creating diagrams.
I neither had to worry about the HTML [`<canvas>`][HTML canvas]
or [`<svg>`][SVG] syntax, nor the JS/CSS for the diagrams.
Mermaid _just works_, right out of the box, and beautifully so!

However, since I was already using [Prism] for syntax highlighting,
and [MathJax] for rendering math on my blog,
I quickly ran into a few issues
in getting all of the to play nice with each other.
Given how popular each of these libraries is,
I was hoping to find some answers on StackOverflow or or their GitHub repos,
but unfortunately I didn't any solutions that worked for me.
Since I spent a few hours tweaking various configs
and finally got everything to work nicely together,
in less than 100 lines of changes,
I thought I'd document my journey in this blog post.

<details>
<summary>
<strong>tl;dr for the impatient</strong>
</summary>
```html {% raw %}
<html>
  <head>
    ...
    <!-- Disable Prism on snippets with `.no-highlight` -->
    <script data-reject-selector=".no-highlight *"
            src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/filter-highlight-all/prism-filter-highlight-all.min.js">
    </script>
  </head>
  <body>
    <script>
      /* Enable Mermaid only on `.language-mermaid` snippets
         with `.no-highlight` that are not inside collapsed `<details> */
      const mmdCodeSelector =
        "pre.no-highlight code.language-mermaid:not(details:not([open]) .language-mermaid)";
      
      /* Selector for node and edge labels for MathJax typesetting */
      const mmdLabelSelector =
        "code.language-mermaid[data-processed='true'] svg[id^='mermaid'] span[class$='Label'], \
         code.language-mermaid[data-processed='true'] svg[id^='mermaid'] span[class*='Label ']";

      function SVGPanZoomResize (panZoom) {
        panZoom.resize().fit().center();
      }

      /* Mermaid callback for MathJax typesetting and SVG Pan Zoom */
      function mmdCallback (svgId) {
        MathJax.typeset(document.getElementById(svgId).querySelectorAll(mmdLabelSelector));

        svg.style.maxWidth = 'unset';
        const oldHeight = svg.getBoundingClientRect().height;
        const panZoom = svgPanZoom(svg, { controlIconsEnabled: true });
        svg.style.height = oldHeight + 'px';
        SVGPanZoomResize(panZoom);
      }

      document.addEventListener('DOMContentLoaded', function () {
        mermaid.initialize({ startOnLoad: false });
        mermaid.run({ querySelector: mmdCodeSelector, postRenderCallback: mmdCallback });

        /* Resize, fit and center diagrams on window resize */
        window.addEventListener("resize", function () {
          Array.prototype.forEach.call(
            document.querySelectorAll('svg > g.svg-pan-zoom_viewport'),
            g => {
              const svg = g.parentElement;
              const panZoom = svgPanZoom(svg);
              SVGPanZoomResize(panZoom);
              const vh = g.getBoundingClientRect().height
                  , vw = g.getBoundingClientRect().width;
              svg.style.height = (svg.getBoundingClientRect().width * vh / vw) + 'px';
              SVGPanZoomResize(panZoom);
            }
          );
        });

        /* Render Mermaid diagrams inside collapsed `<details> only when they are opened */
        Array.prototype.forEach.call(
          document.getElementsByTagName('details'),
          d => d.addEventListener(
            "toggle",
            (e) => mermaid.run({
              nodes: d.querySelectorAll(mmdCodeSelector),
              postRenderCallback: mmdCallback
            })
        ))
      });
      ...
    </script>
  </body>
</html>
{% endraw %} ```
{: .line-numbers }
</details>


#### <i class='fas fa-paint-roller'></i> Suppressing Prism

The first issue I had to tackle was turning off the syntax highlighting from Prism,
because Mermaid didn't seem to like syntax-highlighted Mermaid code.
I show an example in the right-most column below:

<div class='pure-g' markdown='1' style='margin-bottom: 0;'>
  <div class='pure-u-1-2'>
  <center><strong>Mermaid then Prism</strong></center>
  {% include_relative basic-example.md id='#prism-on-mermaid'
      more='style="margin: 0.25em 0.25em 0 0.25em;"' hl=' ' pz=' ' %}
  </div>
  <div class='pure-u-1-2'>
  <center><strong>Prism then Mermaid</strong></center>
  {% include_relative basic-example.md id='#mermaid-on-prism'
     more='style="margin: 0.25em 0.25em 0 0.25em;"' hl=' ' pz=' ' %}
  </div>
</div>

In the left-most column,
I show result when Mermaid successfully renders a diagram
but then Prism picks it up again for syntax highlighting.
It became clear that Prism and Mermaid must run mutually exclusively:

1. _Prism_ runs only on snippets that are to be _syntax highlighted_;
   Mermaid rendering must be disabled on them.
2. _Mermaid_ runs only on snippets that are to be _rendered as diagrams_;
   Prism syntax highlighting must be disabled on them.

Here are the expected results when neither interferes with the other:

<div class='pure-g' markdown='1' style='margin-bottom: 0;'>
  <div class='pure-u-1-2'>
  <center><strong>Expected Highlighting</strong></center>
  {% include_relative basic-example.md
     more='style="margin: 0.25em 0 0 0;"' hl=' ' pz=' ' %}
  </div>
  <div class='pure-u-1-2'>
  <center><strong>Expected Rendering</strong></center>
  {% include_relative basic-example.md
     more='style="margin: 0.25em 0 0 0;"' %}
  </div>
</div>

I took some inspiration from [this old (2019) PR](https://github.com/srid/emanote/pull/318),
in particular from [the following snippet](https://github.com/srid/emanote/pull/318/files#diff-625dc92d987b975bd7c29ade81a8776254957d6e17e5c31053b088b5dac28b5cR94-R104):

```js
<script>
/*
  Custom code from Emanote to selectively skip class="language-mermaid"
*/
(function() {
  var elements = document.querySelectorAll('pre > code[class*="language"]:not(.language-mermaid)');
  for (var element of elements) {
    Prism.highlightElement(element, false);
  }
})();
</script>
```
{: .line-numbers }

Prism now provides [a plugin](https://prismjs.com/plugins/filter-highlight-all/)
for easily filtering elements to selectively syntax highlight,
but essentially the authors chose to disable Prism on any `<code>` snippet that has `language-mermaid` class.
That solves the conflict with Mermaid, but also closes the door to syntax highlighting Mermaid snippets!
I wanted to implement something a bit more flexible.

I started using a new class `no-highlight` to suppress Prism syntax highlighting selectively.
Using the `filterHighlightAll` plugin, it's a simple one-liner:

```html
<script data-reject-selector=".no-highlight *"
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/filter-highlight-all/prism-filter-highlight-all.min.js">
</script>
```
{: data-line="2" }

The `data-reject-selector` attribute set to `.no-highlight *`
instructs Prism to suppress syntax highlighting within subtrees under nodes with the `no-highlight` class.
So now we have handled the Prism side of the issue ---
we can use this class on our snippets to stop Prism from interfering with Mermaid rendering.
Adding a class is also super easy in Markdown:[^markdown]

```none
`&grave;`mermaid &lcub;% raw %&rcub;
  graph LR

  A --> B
&lcub;% endraw %&rcub; `&grave;`
{: .no-highlight }
```

The final piece of the puzzle is to turn off Mermaid rendering
on snippets that are to be syntax highlighted --- those that don't have the `.no-highlight` class.
We achieve this with the following event listener that initializes Mermaid
on [`DOMContentLoaded`](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event):

```js {% raw %}
document.addEventListener('DOMContentLoaded', function () {
  mermaid.initialize({ startOnLoad: false });
  mermaid.run({ querySelector: 'pre.no-highlight code.language-mermaid' });
});
{% endraw %} ```
{: .line-numbers data-line="3" }

We turn off the automatic rendering on load by setting `startOnLoad` to `false`,
and manually invoke `mermaid.run` with a `querySelector`
that filters out snippets with `.no-highlight` class.

#### <i class='fas fa-eye-slash'></i> Rendering Inside `<details>`

The next issue on my plate was debugging invisible Mermaid diagrams inside `<details>` ---
I didn't see any errors on the console
and DOM inspection revealed that diagrams were indeed being generated,
but they were super, ultra, tiny!
Here's an example:

<div class='pure-g' markdown='1' style='margin-bottom: 0;'>
  <div class='pure-u-1-2'>
  <center><strong>Default Behavior</strong></center>
  <details style='margin: 0.25em 0.25em 0;'>
  <summary>Tiny diagram</summary>
  {% include_relative basic-example.md id='#mermaid-in-details' %}
  </details>
  </div>
  <div class='pure-u-1-2'>
  <center><strong>Expected Behavior</strong></center>
  <details style='margin: 0.25em 0.25em 0;'>
  <summary>Good diagram</summary>
  {% include_relative basic-example.md %}
  </details>
  </div>
</div>

This issue has been observed on other collapsible elements (tabs, sections etc.),
and has been reported across several repos:

- mermaid.init() on hidden items is not displaying labels
  [=fa^link^fa=](https://github.com/mermaid-js/mermaid/issues/444)
- Chart does not render if parent element is not displayed
  [=fa^link^fa=](https://github.com/mermaid-js/mermaid/issues/1846)
- Mermaid rendering but not appearing within Content Tabs
  [=fa^link^fa=](https://github.com/squidfunk/mkdocs-material/issues/3377)
- Mermaid diagrams don't render inside closed Details elements
  [=fa^link^fa=](https://github.com/squidfunk/mkdocs-material/issues/3559)
- Mermaid charts don't render in hidden elements (tabs, collapsible sections)
  [=fa^link^fa=](https://gitlab.com/gitlab-org/gitlab-docs/-/issues/1276)

However, I was unable to find a satisfactory solution in these reports.
I think the only working solution I found
was in [a comment](https://github.com/mermaid-js/mermaid/issues/444#issuecomment-345314759)
on one of the bug reports.
I didn't like the idea of re-initializing Mermaid every time though.
Instead, I chose to use the `mermaid.run` API to render a collapsed element only when it's expanded.
Extending the `DOMContentLoaded` listener from the previous section,
we now have:

```js {% raw %}
const mmdCodeSelector =
  "pre.no-highlight code.language-mermaid:not(details:not([open]) .language-mermaid)";

document.addEventListener('DOMContentLoaded', function () {
  mermaid.initialize({ startOnLoad: false });
  mermaid.run({ querySelector: mmdCodeSelector });

  Array.prototype.forEach.call(
    document.getElementsByTagName('details'),
    d => d.addEventListener(
      "toggle",
      (e) => mermaid.run({ nodes: d.querySelectorAll(mmdCodeSelector) })
    )
  )
});
{% endraw %} ```
{: .line-numbers data-line="1-2,6,12" }

The `mmdCodeSelector` identifies `code` elements to be rendered,
which are currently visible (not within a collapsed `details`).
In line 6, we locate all such `code` elements under `body`,
and perform the first round of rendering right after DOM initialization.
In line 9, we defer the rendering of the collapsed `code` elements,
until a `toggle` event is triggered on an an ancestor `details` element.
Upon receiving this trigger, we use our selector again
to locate and render _newly visible_ `code` elements
_only under the toggled_ `details` _element_.
This only happens once per `details` element ---
a collapsed rendered diagram is not re-rendered when opened again.

The `querySelector` is now significantly longer and complex,
with nested CSS [`:not` pseudoselectors](https://developer.mozilla.org/en-US/docs/Web/CSS/:not).
So let's go over it carefully.
The following graph outlines the DOM hierarchy that the selector searches for:

{% include_relative mermaid-selector.md %}

In a nutshell, the selector identifies:

- `code` element(s) of `language-mermaid` class, <br>
  _(so they are expected to have Mermaid content in it)_
- that are under some `pre` element of `.no-highlight` class, <br>
  _(so they are expected to be rendered, not syntax highlighted)_
- that does `:not` have:
  - a `details` ancestor that does `:not` currently have the `open` attribute <br>
    _(so it is not currently not-open, i.e. it is visible)_

#### <i class='fas fa-infinity'></i> Rendering MathJax

The next issue is a bit of a niche one,
but I was surprised to see it reported on Mermaid repo before ---
Mermaid does not render math, or more specifically [LaTeX],
inside labels. For example:

<div class='pure-g' markdown='1' style='margin-bottom: 0;'>
  <div class='pure-u-1-2'>
  <center><strong>Default Rendering</strong></center>
  {% include_relative mathjax-example.md id="#mathjax-in-mermaid" lang="none" %}
  </div>
  <div class='pure-u-1-2'>
  <center><strong>Expected Rendering</strong></center>
  {% include_relative mathjax-example.md %}
  </div>
</div>

The two most popular libraries for rendering LaTeX on the web
are [KaTeX] and [MathJax].
And neither works out of the box with Mermaid.
I came across the following bug reports on their repo:

- Add support of "LaTeX" in the form of MathJax
  [=fa^link^fa=](https://github.com/mermaid-js/mermaid/issues/2267)
- Adding LaTeX math support via Katex
  [=fa^link^fa=](https://github.com/mermaid-js/mermaid/issues/2776)

It looks like the Mermaid developers are working on adding KaTeX support,
via this PR:

- Mermaid diagrams don't render inside closed Details elements
  [=fa^link^fa=](https://github.com/squidfunk/mkdocs-material/issues/3559)

But from what I understood from the changes,
I think they are adding the rendering logic to Mermaid,
and trying to avoid external dependencies.
I the mean time, I could come up with a pretty easy _fix_,
using Mermaid's _secret_ `postRenderCallback` option.
I didn't find anything in the Mermaid 10.x documentation regarding this function,
but a few searches for "mermaidjs callback support" took me to this bug report:

- Execute code after initialize
  [=fa^link^fa=](https://github.com/mermaid-js/mermaid/issues/176)

where a kind [stranger showed an example](https://github.com/mermaid-js/mermaid/issues/176#issuecomment-1708439969)
usage for `postRenderCallback`.

The idea is to invoke MathJax typesetting on each node and edge label,
after Mermaid is done rendering a diagram.
And since this is to be done _after_ Mermaid rendering,
we don't even need to weaken our [`securityLevel`](https://mermaid.js.org/config/usage.html#securitylevel).
To achieve this, once again, we extend our `DOMContentLoaded` listener:

```js {% raw %}
const mmdCodeSelector =
  "pre.no-highlight code.language-mermaid:not(details:not([open]) .language-mermaid)";
const mmdLabelSelector =
  "code.language-mermaid[data-processed='true'] svg[id^='mermaid'] span[class$='Label'], \
   code.language-mermaid[data-processed='true'] svg[id^='mermaid'] span[class*='Label ']";

function mmdCallback (svgId) {
  MathJax.typeset(document.getElementById(svgId).querySelectorAll(mmdLabelSelector));
}

document.addEventListener('DOMContentLoaded', function () {
  mermaid.initialize({ startOnLoad: false });
  mermaid.run({
    querySelector: mmdCodeSelector,
    postRenderCallback: mmdCallback,
  });

  Array.prototype.forEach.call(
    document.getElementsByTagName('details'),
    d => d.addEventListener(
      "toggle",
      (e) => mermaid.run({
        nodes: d.querySelectorAll(mmdCodeSelector),
        postRenderCallback: mmdCallback,
      })
    )
  )
});
{% endraw %} ```
{: .line-numbers data-line="3-5,7-9,15,24" }

Other than the callback stuff, which is self-explanatory,
one interesting bit here is the `mmdLabelSelector`,
which finds:

- `code` element(s) of `language-mermaid` class with `data-processed` attribute set to `true`, <br>
  _(so they have already been processed by Mermaid)_
- that contain `svg` elements having the prefix `mermaid` in their id, <br>
  _(just to be extra sure that we are entering a Mermaid-rendered svg)_
- that contain `span` elements of a class with the suffix `Label` <br>
  _(so it is some label, typically NodeLabel or EdgeLabel, in a Mermaid diagram)_

The selector looks long and ugly because
Selecting elements with a particular class-name suffix is a bit hacky
because of limitations of the CSS specification.
Essentially, under the appropriate `code` and `svg` elements, we look for

- `span` elements with their space-separated class list ending in `Label`, or
- `span` elements with their space-separated class list containing `Label `.

#### <i class='fas fa-magnifying-glass-plus'></i> Pan & Zoom Support

This last section is more of an enhancement, rather than an issue.
A reader who is on a mobile device might have already noticed
that some of the diagrams on this page appear too small on their device.
So, I wanted to add touch-based pan and zoom support to my SVGs.
This is already available in Mermaid's live editor,
so I was hoping to find some config option to enable it in diagrams
outside of the live editor as well.
Unfortunately, I did not.
My searches led me to the following bug reports:

- ZOOM!!!
  [=fa^link^fa=](https://github.com/mermaid-js/mermaid/issues/1860)
- Ability to zoom HTML diagram
  [=fa^link^fa=](https://github.com/mermaid-js/mermaid/issues/2776)
- Add zoom and pan to mermaid diagrams
  [=fa^link^fa=](https://gitlab.com/gitlab-org/gitlab-docs/-/issues/1614)

All three of these are open bug reports with no assigned PR yet,
so maybe we won't have native pan and zoom support in Mermaid any time soon ☹
However, I was able to find the following:

- a [comment on one of the bug reports](https://github.com/mermaid-js/mermaid/issues/2162#issuecomment-1542542439),
  where a kind stranger shares a working example using the [svg-pan-zoom] library
- [this PR](https://github.com/mermaid-js/mermaid-live-editor/pull/957),
  in which the Mermaid devs added pan and zoom to the live editor

This was enough to get me started!
My approach is similar to the one outlined in the comment,
but instead of `await`ing on Mermaid to finish `render`,
and then adding `svgPanZoom` to the rendered SVG,
I decided to do it in the callback function:

```js {% raw %}
function SVGPanZoomResize (panZoom) {
  panZoom.resize().fit().center();
}

function mmdCallback (svgId) {
  MathJax.typeset(document.getElementById(svgId).querySelectorAll(mmdLabelSelector));

  svg.style.maxWidth = 'unset';
  const oldHeight = svg.getBoundingClientRect().height;
  const panZoom = svgPanZoom(svg, { controlIconsEnabled: true });
  svg.style.height = oldHeight + 'px';
  SVGPanZoomResize(panZoom);
}
{% endraw %} ```
{: .line-numbers data-line="8-12" }

Other than adding `svgPanZoom` to our rendered `svg`,
there is one other interesting bit here.
The svg-pan-zoom library has a [known issue](https://github.com/bumbu/svg-pan-zoom#svg-height-is-broken)
that breaks the SVG's height -- it clips the height to 150px.
To fix this, I save the old height (after Mermaid's rendering) in line 9,
and in line 11 set this as the new height after adding `svgPanZoom`.
Finally, I resize, fit and center the image in line 12, since the height is changed.

So far so good!
The svg-pan-zoom library is quite small and takes care of basic pan and zoom.
However, the diagrams are no longer responsive ---
resizing a page, doesn't automatically resize the diagrams if needed.
Thankfully, the library authors have [considered this use case](https://github.com/bumbu/svg-pan-zoom#demos),
and have provided [a demo](http://bumbu.me/svg-pan-zoom/demo/resize.html)
that shows how to achieve this.
However, the approach in this demo doesn't adjust the SVG container's height.

I compare the default behavior, the demo approach,
and my expected behavior below.
I have added black borders to the `svg` container element,
so we can observe its dimensions compared to the dimensions of the diagram.

<div class='pure-g' markdown='1' style='margin-bottom: 0;'>
  <div class='pure-u-1-3'>
  <center><strong>Default</strong></center>
  {% include_relative svgpanzoom-example.md id="#svgpanzoom-1" lang="none" %}
  </div>
  <div class='pure-u-1-3'>
  <center><strong>Demo</strong></center>
  {% include_relative svgpanzoom-example.md id="#svgpanzoom-2" lang="none" %}
  </div>
  <div class='pure-u-1-3'>
  <center><strong>Expected</strong></center>
  {% include_relative svgpanzoom-example.md %}
  </div>
</div>

On resizing the page, specifically on shrinking the page width,
we observe that:

- the diagram in the left column isn't resized,
  and overflows out of the column
- the diagram in the center column is resized,
  but its container `svg`'s height isn't
- the diagram and its container `svg`'s height in the right column are resized,
  thus leaving no additional padding around it

To observe this issue on a mobile device,
try loading this page in landscape mode
and then rotate your phone to portrait mode to shrink the page width.

Fortunately, this issue is pretty easy to fix.
I list my window resize event listener below:

```js {% raw %}
window.addEventListener("resize", function () {
  Array.prototype.forEach.call(
    document.querySelectorAll('svg > g.svg-pan-zoom_viewport'),
    g => {
      const svg = g.parentElement;
      const panZoom = svgPanZoom(svg);
      SVGPanZoomResize(panZoom);
      const vh = g.getBoundingClientRect().height
          , vw = g.getBoundingClientRect().width;
      svg.style.height = (svg.getBoundingClientRect().width * vh / vw) + 'px';
      SVGPanZoomResize(panZoom);
    }
  );
});
{% endraw %} ```
{: .line-numbers data-line="7,10,11" }

Line 7 is what the library authors suggest in their demo.
In lines 8 and 9, I grab the _viewport_'s (i.e., the actual diagram's) dimensions,
and in line 10, I scale the container `svg`'s height proportionately.
Finally, in line 11, I resize, fit and center the diagram
inside the adjusted container.



[^markdown]: I always wrap my code within `&lcub;% raw %&rcub;` ... `&lcub;% endraw %&rcub;`,
             to disable [Liquid](https://jekyllrb.com/docs/liquid/) rendering inside it.
             In particular, for Mermaid, this is necessary to use {% raw %} `{{ Node }}` {% endraw %}
             syntax for hexagonal nodes.



[HTML canvas]:  https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
[KaTeX]:        https://katex.org/
[LaTeX]:        https://www.latex-project.org
[Markdown]:     https://en.wikipedia.org/wiki/Markdown
[MathJax]:      https://www.mathjax.org/
[Mermaid]:      https://mermaid.js.org/
[Prism]:        https://prismjs.com/
[SVG]:          https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg
[svg-pan-zoom]: https://github.com/bumbu/svg-pan-zoom
