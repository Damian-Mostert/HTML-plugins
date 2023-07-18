export function InView(){
  function isScrolledIntoView(el:any) {
    var rect = el.getBoundingClientRect();
    return (rect.top >= 0) && (rect.bottom <= el.parentElement.getBoundingClientRect().height)||(rect.left >= 0) && (rect.right <= el.parentElement.getBoundingClientRect().width)
  }
  document.querySelectorAll("*[in-view]").forEach((element:any) => {
    element.parentElement.addEventListener('wheel',()=> {
      if(isScrolledIntoView(element))element.hidden=false;
      else element.hidden=true
    })
  });
}
export function ClickMenus(){
  const styleElement = document.createElement('style');
  styleElement.textContent = `
  /*click-menu styles*/
  *[click-menu] *[title]{cursor:pointer}
  *[click-menu] *[options].hidden{display: none}
  `;
  document.head.appendChild(styleElement)
  var menus_listeners_array:{ title:Element|null;options:Element|null }[]=[];
  (document.querySelectorAll('*[click-menu]')||[]).forEach((menu:Element)=>menus_listeners_array.push({
    title:menu.querySelector('*[title]')as HTMLDivElement,
    options:menu.querySelector('*[options]')as HTMLDivElement
  }))
  for (const menu of menus_listeners_array)menu.options?.classList.add('hidden')
  window.addEventListener('click',event=>{
    for (const menu of menus_listeners_array)
      if (menu?.title?.contains(event.target as Node) || menu?.options?.contains(event.target as Node))
        menu.options?.classList.remove('hidden')
      else if(!menu.options?.classList?.contains('hidden'))
        menu.options?.classList.add('hidden')
  })
}
export function HoverMenus(){
  const styleElement = document.createElement('style');
  styleElement.textContent = `
  /*hover-menu styles*/
  *[hover-menu] *[title]{cursor:pointer}
  *[hover-menu] *[options].hidden{display: none}
  `;
  document.head.appendChild(styleElement)
  var menus_listeners_array:{ title:Element|null;options:Element|null }[]=[];
  (document.querySelectorAll('*[hover-menu]')||[]).forEach((menu:Element)=>menus_listeners_array.push({
    title:menu.querySelector('*[title]')as HTMLDivElement,
    options:menu.querySelector('*[options]')as HTMLDivElement
  }))
  for (const menu of menus_listeners_array){
    menu.title?.addEventListener("mouseover",() =>menu.options?.classList.remove('hidden'))
    menu.options?.classList.add('hidden')
  }
  window.addEventListener('click',event=>{
    for (const menu of menus_listeners_array)
      if (menu?.title?.contains(event.target as Node) || menu?.options?.contains(event.target as Node))
        menu.options?.classList.remove('hidden')
      else if(!menu.options?.classList?.contains('hidden'))
        menu.options?.classList.add('hidden')
  })
}
enum direction{
  Up,
  Down,
  Left,
  Right
}
function scrollToTopSmoothly(containerElement:any, targetTop:any, duration:any) {
  const startTop = containerElement.scrollTop;
  const distance = targetTop - startTop;
  const startTime = performance.now();
  function scrollStep(timestamp:any) {
    const currentTime = timestamp || performance.now();
    const elapsed = currentTime - startTime;
    const scrollProgress = Math.min(elapsed / duration, 1);
    const easing = easeInOutCubic(scrollProgress);
    const newScrollTop = startTop + distance * easing;
    containerElement.scrollTop = newScrollTop;
    if (elapsed < duration)
      window.requestAnimationFrame(scrollStep);
  }
  function easeInOutCubic(t:any) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }
  window.requestAnimationFrame(scrollStep);
}
function scrollToClosestElementTop(containerElement:any) {
  const containerRect = containerElement.getBoundingClientRect();
  const containerTop = containerRect.top;
  const containerHeight = containerRect.height;
  let closestElement:any = null;
  let closestDistance = Number.MAX_SAFE_INTEGER;
  containerElement.querySelectorAll('*[scroll-stop] , .full-slider-view').forEach((element:any) => {
    const boundingRect = element.getBoundingClientRect()
    const distanceToContainerTop = boundingRect.top - containerTop + (boundingRect.height/2)
    if (distanceToContainerTop >= 0 && distanceToContainerTop < closestDistance && distanceToContainerTop <= containerHeight) {
      closestElement = element;
      closestDistance = distanceToContainerTop;
    }
  })
  if(closestElement)
    scrollToTopSmoothly(
      containerElement,
      containerElement.scrollTop + closestElement.getBoundingClientRect().top - containerRect.top,
      100
    )
}
function scrollToLeftSmoothly(containerElement:any, targetLeft:any, duration:any) {
  const startLeft = containerElement.scrollLeft;
  const distance = targetLeft - startLeft;
  const startTime = performance.now();
  function scrollStep(timestamp:any) {
    const currentTime = timestamp || performance.now();
    const elapsed = currentTime - startTime;
    const scrollProgress = Math.min(elapsed / duration, 1);
    const easing = easeInOutCubic(scrollProgress);
    const newScrollLeft = startLeft + distance * easing;
    containerElement.scrollLeft = newScrollLeft;
    if (elapsed < duration)
      window.requestAnimationFrame(scrollStep);
  }
  function easeInOutCubic(t:any) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }
  window.requestAnimationFrame(scrollStep);
}
function scrollToClosestElementLeft(containerElement:any) {
  const containerRect = containerElement.getBoundingClientRect();
  const containerLeft = containerRect.left;
  const containerWidth = containerRect.width;
  let closestElement:any = null;
  let closestDistance = Number.MAX_SAFE_INTEGER;
  containerElement.querySelectorAll('*[scroll-stop] , .full-slider-view').forEach((element:any) => {
    const boundingRect = element.getBoundingClientRect()
    const distanceToContainerLeft = boundingRect.left - containerLeft + (boundingRect.width / 2)
    if (distanceToContainerLeft >= 0 && distanceToContainerLeft < closestDistance && distanceToContainerLeft <= containerWidth) {
      closestElement = element;
      closestDistance = distanceToContainerLeft;
    }
  })
  if(closestElement)
    scrollToLeftSmoothly(
      containerElement,
      containerElement.scrollLeft + closestElement.getBoundingClientRect().left - containerRect.left,
      100
    )
}
var dir:direction
export function Scroll() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    *[no-scrollbar]{
      scrollbar-width: thin;
      scrollbar-color: transparent transparent;
    }
    *[no-scrollbar]::-webkit-scrollbar {
      width:0;
    }
    *[no-scrollbar]::-webkit-scrollbar-track {
      background-color: transparent;
    }
    *[no-scrollbar]::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
    *[vertical-scroll] {overflow-y: auto;}
    *[horozontal-scroll] {overflow-x: auto;white-space: nowrap;}
    *[horozontal] {display: inline-block;}
  `;
  document.head.appendChild(styleElement)
  document.querySelectorAll('*[vertical-scroll],*[horozontal-scroll]').forEach(scrollContainer => {
    scrollContainer.addEventListener('touchstart', handleTouchStart)
    scrollContainer.addEventListener('touchmove', handleTouchMoveVertical)
    scrollContainer.addEventListener('touchend', handleTouchEnd)
  })
  document.querySelectorAll('*[horozontal-scroll]').forEach(scrollContainer => {
    scrollContainer.addEventListener('wheel', handleScrollHorozontal)
    scrollContainer.addEventListener('touchmove', handleTouchMoveHorozontal)
  })
  document.querySelectorAll('*[vertical-scroll]').forEach(scrollContainer => {
    scrollContainer.addEventListener('wheel', handleScrollVertical)
    scrollContainer.addEventListener('touchmove', handleTouchMoveVertical)
  })
  var t:any
  function handleStop(container:any) {
    switch (dir) {
      case direction.Up:case direction.Down:
        scrollToClosestElementTop(container)
      break;
      case direction.Left:case direction.Right:
        scrollToClosestElementLeft(container)
      break;
    }
  }
  function handleRight(container:any){
    container.scrollLeft+=10;
    dir = direction.Left
    if(t)clearTimeout(t)
    t = setTimeout(() => {
      handleStop(container)
    },100);
  }
  function handleLeft(container:any){
    container.scrollLeft-=10
    dir = direction.Right
    if(t)clearTimeout(t)
    t = setTimeout(() => {
      handleStop(container)
    },100);
  }
  function handleDown(container:any){
    container.scrollTop-=10
    dir = direction.Up
    if(t)clearTimeout(t)
    t = setTimeout(() => {
      handleStop(container)
    },100);
  }
  function handleUp(container:any){
    container.scrollTop+=10
    dir = direction.Down
    if(t)clearTimeout(t)
    t = setTimeout(() => {
      handleStop(container)
    },100);
  }
  let touchStartX:number = 0
  let touchStartY:number = 0
  function handleTouchStart(event:any) {
    event.preventDefault()
    touchStartX = event.touches[0].clientX
    touchStartY = event.touches[0].clientY
  }
  var handleTouchEnd=(event:any)=>
    touchStartX=touchStartY=0
  function handleTouchMoveHorozontal(event:any) {
    event.preventDefault()
    const scrollContainer = event.currentTarget
    const touchX = event.touches[0].clientX
    const touchY = event.touches[0].clientY
    const deltaX = touchX - touchStartX
    const deltaY = touchY - touchStartY
    if (Math.abs(deltaX) > Math.abs(deltaY))
    if (deltaX > 0)
      handleRight(scrollContainer)
    else
      handleLeft(scrollContainer)
  }
  function handleScrollHorozontal(event:any) {
    event.preventDefault()
    const deltaY = event.deltaY;
    const scrollContainer = event.currentTarget
    if (deltaY < 0)
      handleRight(scrollContainer)
    else if (deltaY > 0)
      handleLeft(scrollContainer)
  }
  function handleScrollVertical(event:any) {
    event.preventDefault()
    const deltaY = event.deltaY;
    const scrollContainer = event.currentTarget
    if (deltaY < 0)
      handleDown(scrollContainer)
    else if (deltaY > 0)
      handleUp(scrollContainer)
  }
  function handleTouchMoveVertical(event:any) {
    event.preventDefault()
    const scrollContainer = event.currentTarget
    const touchX = event.touches[0].clientX
    const touchY = event.touches[0].clientY
    const deltaX = touchX - touchStartX
    const deltaY = touchY - touchStartY
    if (Math.abs(deltaX) > Math.abs(deltaY)){}else
      if (deltaY > 0)
        handleUp(scrollContainer)
      else
        handleDown(scrollContainer)
  }
}
export function Sliders(){
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    *[slider] *[vertical-view]{
      overflow-y:auto;
      scrollbar-width: thin;
      scrollbar-color: transparent transparent;
    }
    *[slider] *[horozontal-view]{
      overflow-x: auto;white-space: nowrap;
      scrollbar-width: thin;
      scrollbar-color: transparent transparent;
    }
    *[slider] *[horozontal-view]::-webkit-scrollbar,*[slider] *[vertical-view]::-webkit-scrollbar {
      width:0;
    }
    *[slider] *[horozontal-view]::-webkit-scrollbar-track, *[slider] *[vertical-view]::-webkit-scrollbar-track {
      background-color: transparent;
    }
    *[slider] *[horozontal-view]::-webkit-scrollbar-thumb,*[slider] *[vertical-view]::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
    *[slider] .full-slider-view{
      width:100%;
      height:100%;
      position:relative;
    }
    *[slider] *[horozontal-view] .full-slider-view{
      display:inline-block;
    }
  `;
  document.head.appendChild(styleElement)
  document.querySelectorAll('*[slider]').forEach((element:any) => {
    const next_button:any = element?.querySelector('*[next]')
    const prev_button:any = element?.querySelector('*[prev]')
    var type = 'vertical'
    var view:any = element?.querySelector('*[vertical-view]')
    if(!view){
      view = element?.querySelector('*[horozontal-view]')
      type = 'horozontal'
    }
    if(!view)
      throw new Error('slider requires horozontal-view or vertical-view')
    Array.from(view.children).forEach((element:any) => element.classList.add('full-slider-view'))
    var LEFT = 0
    var TOP = 0
    function next_slide() {
      if (type === 'vertical') {
        TOP += view.getBoundingClientRect().height;
        const maxScrollTop = (view.parentElement.scrollHeight - 1) * view.getBoundingClientRect().height;
        TOP = Math.min(TOP, maxScrollTop);
        scrollToTopSmoothly(view, TOP, 500);
        scrollToClosestElementTop(view);
        if (TOP < 0) TOP = 0;
      } else {
        LEFT += view.getBoundingClientRect().width;
        const maxScrollLeft = (view.parentElement.scrollWidth - 1) * view.getBoundingClientRect().width;
        LEFT = Math.min(LEFT, maxScrollLeft);
        scrollToLeftSmoothly(view, LEFT, 500);
        scrollToClosestElementLeft(view);
        if (LEFT < 0) LEFT = 0;
      }
    }
    function prev_slide() {
      if (type === 'vertical') {
        TOP -= view.getBoundingClientRect().height;
        TOP = Math.max(TOP, 0);
        const maxScrollTop = view.getBoundingClientRect().height*(view.children.length-2);
        TOP = Math.min(TOP, maxScrollTop);
        scrollToTopSmoothly(view, TOP, 500);
        scrollToClosestElementTop(view);
      } else {
        LEFT -= view.getBoundingClientRect().width;
        LEFT = Math.max(LEFT, 0);
        const maxScrollLeft = view.getBoundingClientRect().width*(view.children.length-2);
        LEFT = Math.min(LEFT, maxScrollLeft);
        scrollToLeftSmoothly(view, LEFT, 500);
        scrollToClosestElementLeft(view);
      }
    }

    function handleStop(container:any) {
      switch (dir) {
        case direction.Up: case direction.Left:
          prev_slide()
        break;
        case direction.Down:case direction.Right:
          next_slide()
        break;
      }
    }
    if(next_button)
      next_button.addEventListener('click',next_slide)
    if(prev_button)
      prev_button.addEventListener('click',prev_slide)
    var t:any
    function handleRight(container:any){
      container.scrollLeft+=10;
      dir = direction.Left
      if(t)clearTimeout(t)
      t = setTimeout(() => {
        handleStop(container)
      },100);
    }
    function handleLeft(container:any){
      container.scrollLeft-=10
      dir = direction.Right
      if(t)clearTimeout(t)
      t = setTimeout(() => {
        handleStop(container)
      },100);
    }
    function handleDown(container:any){
      container.scrollTop-=10
      dir = direction.Up
      if(t)clearTimeout(t)
      t = setTimeout(() => {
        handleStop(container)
      },100);
    }
    function handleUp(container:any){
      container.scrollTop+=10
      dir = direction.Down
      if(t)clearTimeout(t)
      t = setTimeout(() => {
        handleStop(container)
      },100);
    }
    let touchStartX:number = 0
    let touchStartY:number = 0
    function handleTouchStart(event:any) {
      event.preventDefault()
      touchStartX = event.touches[0].clientX
      touchStartY = event.touches[0].clientY
    }
    var handleTouchEnd=(event:any)=>
    touchStartX=touchStartY=0
    function handleTouchMoveHorozontal(event:any) {
      event.preventDefault()
      const scrollContainer = event.currentTarget
      const touchX = event.touches[0].clientX
      const touchY = event.touches[0].clientY
      const deltaX = touchX - touchStartX
      const deltaY = touchY - touchStartY
      if (Math.abs(deltaX) > Math.abs(deltaY))
      if (deltaX > 0)
      handleRight(scrollContainer)
      else
      handleLeft(scrollContainer)
    }
    function handleScrollHorozontal(event:any) {
      event.preventDefault()
      const deltaY = event.deltaY;
      const scrollContainer = event.currentTarget
      if (deltaY < 0)
      handleRight(scrollContainer)
      else if (deltaY > 0)
      handleLeft(scrollContainer)
    }
    function handleScrollVertical(event:any) {
      event.preventDefault()
      const deltaY = event.deltaY;
      const scrollContainer = event.currentTarget
      if (deltaY < 0)
      handleDown(scrollContainer)
      else if (deltaY > 0)
      handleUp(scrollContainer)
    }
    function handleTouchMoveVertical(event:any) {
      event.preventDefault()
      const scrollContainer = event.currentTarget
      const touchX = event.touches[0].clientX
      const touchY = event.touches[0].clientY
      const deltaX = touchX - touchStartX
      const deltaY = touchY - touchStartY
      if (Math.abs(deltaX) > Math.abs(deltaY)){}else
      if (deltaY > 0)
      handleUp(scrollContainer)
      else
      handleDown(scrollContainer)
    }
    view.addEventListener('touchstart', handleTouchStart)
    view.addEventListener('touchmove', handleTouchMoveVertical)
    view.addEventListener('touchend', handleTouchEnd)
    view.addEventListener('wheel', handleScrollHorozontal)
    view.addEventListener('touchmove', handleTouchMoveHorozontal)
    view.addEventListener('wheel', handleScrollVertical)
    view.addEventListener('touchmove', handleTouchMoveVertical)
  })
}
export default function Plugins(){
  InView()
  ClickMenus()
  HoverMenus()
  Scroll()
  Sliders()
}
