(function (doc, win) {
  "use strict"

  const initial_css = {
    position: 'absolute',
    float: 'left',
    borderRadius: '50%',
    width: '0px',
    height: '0px',
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
    zIndex: 999999,
    boxShadow: '0 0 5px red',
    transition: 'opacity 0.33s ease, height 0.25s ease, width 0.25s ease'
  }

  const body = doc.getElementsByTagName('body')[0]
  const tail = doc.createElement('div')

  let last_timer = null
  function mouse_pointing(e) {
    clearTimeout(last_timer)
    tail.style.opacity = 1
    tail.style.left = e.pageX - 32 + 'px'
    tail.style.top = e.pageY - 32 + 'px'
    last_timer = setTimeout(function () { tail.style.opacity = 0 }, 1000)
  }

  let toggleBind = false
  function toggleMousePointer () {
    toggleBind = !toggleBind
    if (!toggleBind) {
      tail.style.width = '0px'
      tail.style.height = '0px'
      body.style.cursor = 'auto'
    } else {
      tail.style.width = '64px'
      tail.style.height = '64px'
      body.style.cursor = 'none'
      
    }
  }

  function initModule () {
    Object.assign(tail.style, initial_css)
    body.appendChild(tail)
    document.addEventListener('mousemove', mouse_pointing)
    Reveal.addKeyBinding({ keyCode:20, key:'CAPSLOCK', description:'Toggle Mouse Pointer' },
                         toggleMousePointer)
  }

  initModule()
})(document, window)