export function InView() {
  function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    return (
      (rect.top >= 0 && rect.bottom <= el.parentElement.getBoundingClientRect().height) ||
      (rect.left >= 0 && rect.right <= el.parentElement.getBoundingClientRect().width)
    );
  }

  document.querySelectorAll("*[in-view]").forEach((element) => {
    element.parentElement.addEventListener("wheel", () => {
      if (isScrolledIntoView(element)) element.hidden = false;
      else element.hidden = true;
    });
  });
}

export function ClickMenus() {
  const styleElement = document.createElement("style");
  styleElement.textContent = `
  /*click-menu styles*/
  *[click-menu] *[title]{cursor:pointer}
  *[click-menu] *[options].hidden{display: none}
  `;
  document.head.appendChild(styleElement);

  var menus_listeners_array = [];
  (document.querySelectorAll('*[click-menu]') || []).forEach((menu) =>
    menus_listeners_array.push({
      title: menu.querySelector('*[title]'),
      options: menu.querySelector('*[options]'),
    })
  );

  for (const menu of menus_listeners_array)
    menu.options?.classList.add("hidden");

  window.addEventListener("click", (event) => {
    for (const menu of menus_listeners_array) {
      if (menu?.title?.contains(event.target) || menu?.options?.contains(event.target))
        menu.options?.classList.remove("hidden");
      else if (!menu.options?.classList?.contains("hidden"))
        menu.options?.classList.add("hidden");
    }
  });
}

export function HoverMenus() {
  const styleElement = document.createElement("style");
  styleElement.textContent = `
  /*hover-menu styles*/
  *[hover-menu]{}
  *[hover-menu] *[title]{cursor:pointer}
  *[hover-menu] *[options]{display: none}
  *[hover-menu]:hover *[options]{display:block}
  `;
  document.head.appendChild(styleElement);
}

export function Scroll() {
  const styleElement = document.createElement("style");
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
  document.head.appendChild(styleElement);

  document.querySelectorAll("*[vertical-scroll],*[horozontal-scroll]").forEach((scrollContainer) => {
    scrollContainer.addEventListener("touchstart", handleTouchStart);
    scrollContainer.addEventListener("touchmove", handleTouchMoveVertical);
    scrollContainer.addEventListener("touchend", handleTouchEnd);
  });

  document.querySelectorAll("*[horozontal-scroll]").forEach((scrollContainer) => {
    scrollContainer.addEventListener("wheel", handleScrollHorozontal);
    scrollContainer.addEventListener("touchmove", handleTouchMoveHorozontal);
  });

  document.querySelectorAll("*[vertical-scroll]").forEach((scrollContainer) => {
    scrollContainer.addEventListener("wheel", handleScrollVertical);
    scrollContainer.addEventListener("touchmove", handleTouchMoveVertical);
  });

  function scrollToTopSmoothly(containerElement, targetTop, duration) {
    const startTop = containerElement.scrollTop;
    const distance = targetTop - startTop;
    const startTime = performance.now();

    function scrollStep(timestamp) {
      const currentTime = timestamp || performance.now();
      const elapsed = currentTime - startTime;
      const scrollProgress = Math.min(elapsed / duration, 1);
      const easing = easeInOutCubic(scrollProgress);
      const newScrollTop = startTop + distance * easing;
      containerElement.scrollTop = newScrollTop;

      if (elapsed < duration) window.requestAnimationFrame(scrollStep);
    }

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    window.requestAnimationFrame(scrollStep);
  }

  function scrollToClosestElementTop(containerElement) {
    const containerRect = containerElement.getBoundingClientRect();
    const containerTop = containerRect.top;
    const containerHeight = containerRect.height;
    let closestElement = null;
    let closestDistance = Number.MAX_SAFE_INTEGER;

    containerElement.querySelectorAll("*[scroll-stop]").forEach((element) => {
      const boundingRect = element.getBoundingClientRect();
      const distanceToContainerTop = boundingRect.top - containerTop + boundingRect.height / 2;

      if (
        distanceToContainerTop >= 0 &&
        distanceToContainerTop < closestDistance &&
        distanceToContainerTop <= containerHeight
      ) {
        closestElement = element;
        closestDistance = distanceToContainerTop;
      }
    });

    if (closestElement)
      scrollToTopSmoothly(
        containerElement,
        containerElement.scrollTop + closestElement.getBoundingClientRect().top - containerRect.top,
        100
      );
  }

  function scrollToLeftSmoothly(containerElement, targetLeft, duration) {
    const startLeft = containerElement.scrollLeft;
    const distance = targetLeft - startLeft;
    const startTime = performance.now();

    function scrollStep(timestamp) {
      const currentTime = timestamp || performance.now();
      const elapsed = currentTime - startTime;
      const scrollProgress = Math.min(elapsed / duration, 1);
      const easing = easeInOutCubic(scrollProgress);
      const newScrollLeft = startLeft + distance * easing;
      containerElement.scrollLeft = newScrollLeft;

      if (elapsed < duration) window.requestAnimationFrame(scrollStep);
    }

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    window.requestAnimationFrame(scrollStep);
  }

  function scrollToClosestElementLeft(containerElement) {
    const containerRect = containerElement.getBoundingClientRect();
    const containerLeft = containerRect.left;
    const containerWidth = containerRect.width;
    let closestElement = null;
    let closestDistance = Number.MAX_SAFE_INTEGER;

    containerElement.querySelectorAll("*[scroll-stop]").forEach((element) => {
      const boundingRect = element.getBoundingClientRect();
      const distanceToContainerLeft = boundingRect.left - containerLeft + boundingRect.width / 2;

      if (
        distanceToContainerLeft >= 0 &&
        distanceToContainerLeft < closestDistance &&
        distanceToContainerLeft <= containerWidth
      ) {
        closestElement = element;
        closestDistance = distanceToContainerLeft;
      }
    });

    if (closestElement)
      scrollToLeftSmoothly(
        containerElement,
        containerElement.scrollLeft + closestElement.getBoundingClientRect().left - containerRect.left,
        100
      );
  }

  var dir;

  function handleStop(container) {
    switch (dir) {
      case direction.Up:
      case direction.Down:
        scrollToClosestElementTop(container);
        break;
      case direction.Left:
      case direction.Right:
        scrollToClosestElementLeft(container);
        break;
    }
  }

  var moving = false;
  var t;

  function handleRight(container) {
    container.scrollLeft += 10;
    dir = direction.Left;
    if (t) clearTimeout(t);
    t = setTimeout(() => {
      handleStop(container);
    }, 100);
  }

  function handleLeft(container) {
    container.scrollLeft -= 10;
    dir = direction.Right;
    if (t) clearTimeout(t);
    t = setTimeout(() => {
      handleStop(container);
    }, 100);
  }

  function handleDown(container) {
    container.scrollTop -= 10;
    dir = direction.Up;
    if (t) clearTimeout(t);
    t = setTimeout(() => {
      handleStop(container);
    }, 100);
  }

  function handleUp(container) {
    container.scrollTop += 10;
    dir = direction.Down;
    if (t) clearTimeout(t);
    t = setTimeout(() => {
      handleStop(container);
    }, 100);
  }

  let touchStartX = 0;
  let touchStartY = 0;

  function handleTouchStart(event) {
    event.preventDefault();
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  }

  var handleTouchEnd = (event) => (touchStartX = touchStartY = 0);

  function handleTouchMoveHorozontal(event) {
    event.preventDefault();
    const scrollContainer = event.currentTarget;
    const touchX = event.touches[0].clientX;
    const touchY = event.touches[0].clientY;
    const deltaX = touchX - touchStartX;
    const deltaY = touchY - touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY))
      if (deltaX > 0) handleRight(scrollContainer);
      else handleLeft(scrollContainer);
  }

  function handleScrollHorozontal(event) {
    event.preventDefault();
    const deltaY = event.deltaY;
    const scrollContainer = event.currentTarget;

    if (deltaY < 0) handleRight(scrollContainer);
    else if (deltaY > 0) handleLeft(scrollContainer);
  }

  function handleScrollVertical(event) {
    event.preventDefault();
    const deltaY = event.deltaY;
    const scrollContainer = event.currentTarget;

    if (deltaY < 0) handleDown(scrollContainer);
    else if (deltaY > 0) handleUp(scrollContainer);
  }

  function handleTouchMoveVertical(event) {
    event.preventDefault();
    const scrollContainer = event.currentTarget;
    const touchX = event.touches[0].clientX;
    const touchY = event.touches[0].clientY;
    const deltaX = touchX - touchStartX;
    const deltaY = touchY - touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
    } else if (deltaY > 0) handleUp(scrollContainer);
    else handleDown(scrollContainer);
  }
}

export default function () {
  InView();
  ClickMenus();
  HoverMenus();
  Scroll();
}
