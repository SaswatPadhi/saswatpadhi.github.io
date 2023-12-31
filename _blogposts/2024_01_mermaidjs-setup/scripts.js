document.addEventListener('DOMContentLoaded', function () {
  mermaid.run({
    querySelector: '#prism-on-mermaid code, \
                    #mermaid-in-details code, \
                    #mathjax-in-mermaid code',
    postRenderCallback: function () {
      // continue rendering in a callback
      // to avoid lots of parallel async renderings
      // which results in blank diagrams sometimes
      mermaid.run({
        querySelector: '#svgpanzoom-1 code, \
                        #svgpanzoom-2 code',
        postRenderCallback: function (svgId) {
          const svg = document.getElementById(svgId);
          svg.style.fontSize = '15px';
          svg.style.maxWidth = 'unset';
    
          const oldHeight = svg.getBoundingClientRect().height;
          const panZoom = svgPanZoom(svg, {
            controlIconsEnabled: true,
            mouseWheelZoomEnabled: false,
          });
          svg.style.height = Math.round(oldHeight) + 'px';
          SVGPanZoomResize(panZoom);
        }
      });
    
      window.addEventListener("resize", function () {
        SVGPanZoomResize(svgPanZoom(document.querySelector('#svgpanzoom-2 code svg')));
      });
    }
  });

  const observer = new MutationObserver(
    (ml, o) => {
      if (document.querySelector("#mermaid-on-prism code span.token")) {
        mermaid.run({ querySelector: '#mermaid-on-prism code' });
        observer.disconnect();
      }
    }
  );
  observer.observe(
    document.querySelector("#mermaid-on-prism code"),
    { childList: true, subtree: true }
  );
});
