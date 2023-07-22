"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationPanes = exports.BannerContainer = exports.Sliders = exports.Scroll = exports.HoverMenus = exports.ClickMenus = exports.InView = void 0;
function InView() {
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        return (rect.top >= 0) && (rect.bottom <= el.parentElement.getBoundingClientRect().height) || (rect.left >= 0) && (rect.right <= el.parentElement.getBoundingClientRect().width);
    }
    document.querySelectorAll("*[in-view]").forEach(function (element) {
        element.parentElement.addEventListener('wheel', function () {
            if (isScrolledIntoView(element))
                element.hidden = false;
            else
                element.hidden = true;
        });
    });
}
exports.InView = InView;
function ClickMenus() {
    var _a, _b;
    var styleElement = document.createElement('style');
    ;
    styleElement.textContent = "\n  /*click-menu styles*/\n  *[click-menu] *[title]{cursor:pointer}\n  *[click-menu] *[options].hidden{display: none}\n  *[click-drop] *[title]{cursor:pointer}\n  *[click-drop] *[options].hidden{display: none}\n  ";
    document.head.appendChild(styleElement);
    var menus_listeners_array = [];
    (document.querySelectorAll('*[click-menu]') || []).forEach(function (menu) { return menus_listeners_array.push({
        title: menu.querySelector('*[title]'),
        options: menu.querySelector('*[options]')
    }); });
    for (var _i = 0, menus_listeners_array_1 = menus_listeners_array; _i < menus_listeners_array_1.length; _i++) {
        var menu = menus_listeners_array_1[_i];
        (_a = menu.options) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
    }
    window.addEventListener('click', function (event) {
        var _a, _b, _c, _d, _e, _f;
        for (var _i = 0, menus_listeners_array_2 = menus_listeners_array; _i < menus_listeners_array_2.length; _i++) {
            var menu = menus_listeners_array_2[_i];
            if (((_a = menu === null || menu === void 0 ? void 0 : menu.title) === null || _a === void 0 ? void 0 : _a.contains(event.target)) || ((_b = menu === null || menu === void 0 ? void 0 : menu.options) === null || _b === void 0 ? void 0 : _b.contains(event.target)))
                (_c = menu.options) === null || _c === void 0 ? void 0 : _c.classList.remove('hidden');
            else if (!((_e = (_d = menu.options) === null || _d === void 0 ? void 0 : _d.classList) === null || _e === void 0 ? void 0 : _e.contains('hidden')))
                (_f = menu.options) === null || _f === void 0 ? void 0 : _f.classList.add('hidden');
        }
    });
    var menus_listeners_array2 = [];
    (document.querySelectorAll('*[click-drop]') || []).forEach(function (menu) { return menus_listeners_array2.push({
        title: menu.querySelector('*[title]'),
        options: menu.querySelector('*[options]')
    }); });
    for (var _c = 0, menus_listeners_array2_1 = menus_listeners_array2; _c < menus_listeners_array2_1.length; _c++) {
        var menu = menus_listeners_array2_1[_c];
        (_b = menu.options) === null || _b === void 0 ? void 0 : _b.classList.add('hidden');
    }
    window.addEventListener('click', function (event) {
        var _a, _b, _c;
        for (var _i = 0, menus_listeners_array2_2 = menus_listeners_array2; _i < menus_listeners_array2_2.length; _i++) {
            var menu = menus_listeners_array2_2[_i];
            if (((_a = menu === null || menu === void 0 ? void 0 : menu.title) === null || _a === void 0 ? void 0 : _a.contains(event.target)) || ((_b = menu === null || menu === void 0 ? void 0 : menu.options) === null || _b === void 0 ? void 0 : _b.contains(event.target)))
                (_c = menu.options) === null || _c === void 0 ? void 0 : _c.classList.remove('hidden');
        }
    });
}
exports.ClickMenus = ClickMenus;
function HoverMenus() {
    var _a, _b, _c, _d;
    var styleElement = document.createElement('style');
    styleElement.textContent = "\n  /*hover-menu styles*/\n  *[hover-menu] *[title]{cursor:pointer}\n  *[hover-menu] *[options].hidden{display: none}\n  *[absolute-hover-menu]{}\n  *[absolute-hover-menu] *[title]{cursor:pointer}\n  *[absolute-hover-menu] *[options]{display: none}\n  *[absolute-hover-menu]:hover *[options]{display:block}\n  *[hover-drop] *[title]{cursor:pointer}\n  *[hover-drop] *[options].hidden{display: none}\n  ";
    document.head.appendChild(styleElement);
    var menus_listeners_array = [];
    (document.querySelectorAll('*[hover-menu]') || []).forEach(function (menu) { return menus_listeners_array.push({
        title: menu.querySelector('*[title]'),
        options: menu.querySelector('*[options]')
    }); });
    var _loop_1 = function (menu) {
        (_a = menu.title) === null || _a === void 0 ? void 0 : _a.addEventListener("mouseover", function () { var _a; return (_a = menu.options) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden'); });
        (_b = menu.options) === null || _b === void 0 ? void 0 : _b.classList.add('hidden');
    };
    for (var _i = 0, menus_listeners_array_3 = menus_listeners_array; _i < menus_listeners_array_3.length; _i++) {
        var menu = menus_listeners_array_3[_i];
        _loop_1(menu);
    }
    window.addEventListener('click', function (event) {
        var _a, _b, _c, _d, _e, _f;
        for (var _i = 0, menus_listeners_array_4 = menus_listeners_array; _i < menus_listeners_array_4.length; _i++) {
            var menu = menus_listeners_array_4[_i];
            if (((_a = menu === null || menu === void 0 ? void 0 : menu.title) === null || _a === void 0 ? void 0 : _a.contains(event.target)) || ((_b = menu === null || menu === void 0 ? void 0 : menu.options) === null || _b === void 0 ? void 0 : _b.contains(event.target)))
                (_c = menu.options) === null || _c === void 0 ? void 0 : _c.classList.remove('hidden');
            else if (!((_e = (_d = menu.options) === null || _d === void 0 ? void 0 : _d.classList) === null || _e === void 0 ? void 0 : _e.contains('hidden')))
                (_f = menu.options) === null || _f === void 0 ? void 0 : _f.classList.add('hidden');
        }
    });
    var menus_listeners_array3 = [];
    (document.querySelectorAll('*[hover-drop]') || []).forEach(function (menu) { return menus_listeners_array3.push({
        title: menu.querySelector('*[title]'),
        options: menu.querySelector('*[options]')
    }); });
    var _loop_2 = function (menu) {
        (_c = menu.title) === null || _c === void 0 ? void 0 : _c.addEventListener("mouseover", function () { var _a; return (_a = menu.options) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden'); });
        (_d = menu.options) === null || _d === void 0 ? void 0 : _d.classList.add('hidden');
    };
    for (var _e = 0, menus_listeners_array3_1 = menus_listeners_array3; _e < menus_listeners_array3_1.length; _e++) {
        var menu = menus_listeners_array3_1[_e];
        _loop_2(menu);
    }
}
exports.HoverMenus = HoverMenus;
var direction;
(function (direction) {
    direction[direction["Up"] = 0] = "Up";
    direction[direction["Down"] = 1] = "Down";
    direction[direction["Left"] = 2] = "Left";
    direction[direction["Right"] = 3] = "Right";
})(direction || (direction = {}));
function scrollToTopSmoothly(containerElement, targetTop, duration) {
    var startTop = containerElement.scrollTop;
    var distance = targetTop - startTop;
    var startTime = performance.now();
    function scrollStep(timestamp) {
        var currentTime = timestamp || performance.now();
        var elapsed = currentTime - startTime;
        var scrollProgress = Math.min(elapsed / duration, 1);
        var easing = easeInOutCubic(scrollProgress);
        var newScrollTop = startTop + distance * easing;
        containerElement.scrollTop = newScrollTop;
        if (elapsed < duration)
            window.requestAnimationFrame(scrollStep);
    }
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    window.requestAnimationFrame(scrollStep);
}
function scrollToClosestElementTop(containerElement) {
    var containerRect = containerElement.getBoundingClientRect();
    var containerTop = containerRect.top;
    var containerHeight = containerRect.height;
    var closestElement = null;
    var closestDistance = Number.MAX_SAFE_INTEGER;
    containerElement.querySelectorAll('*[scroll-stop] , .full-slider-view').forEach(function (element) {
        var boundingRect = element.getBoundingClientRect();
        var distanceToContainerTop = boundingRect.top - containerTop + (boundingRect.height / 2);
        if (distanceToContainerTop >= 0 && distanceToContainerTop < closestDistance && distanceToContainerTop <= containerHeight) {
            closestElement = element;
            closestDistance = distanceToContainerTop;
        }
    });
    if (closestElement)
        scrollToTopSmoothly(containerElement, containerElement.scrollTop + closestElement.getBoundingClientRect().top - containerRect.top, 100);
}
function scrollToLeftSmoothly(containerElement, targetLeft, duration) {
    var startLeft = containerElement.scrollLeft;
    var distance = targetLeft - startLeft;
    var startTime = performance.now();
    function scrollStep(timestamp) {
        var currentTime = timestamp || performance.now();
        var elapsed = currentTime - startTime;
        var scrollProgress = Math.min(elapsed / duration, 1);
        var easing = easeInOutCubic(scrollProgress);
        var newScrollLeft = startLeft + distance * easing;
        containerElement.scrollLeft = newScrollLeft;
        if (elapsed < duration)
            window.requestAnimationFrame(scrollStep);
    }
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    window.requestAnimationFrame(scrollStep);
}
function scrollToClosestElementLeft(containerElement) {
    var containerRect = containerElement.getBoundingClientRect();
    var containerLeft = containerRect.left;
    var containerWidth = containerRect.width;
    var closestElement = null;
    var closestDistance = Number.MAX_SAFE_INTEGER;
    containerElement.querySelectorAll('*[scroll-stop] , .full-slider-view').forEach(function (element) {
        var boundingRect = element.getBoundingClientRect();
        var distanceToContainerLeft = boundingRect.left - containerLeft + (boundingRect.width / 2);
        if (distanceToContainerLeft >= 0 && distanceToContainerLeft < closestDistance && distanceToContainerLeft <= containerWidth) {
            closestElement = element;
            closestDistance = distanceToContainerLeft;
        }
    });
    if (closestElement)
        scrollToLeftSmoothly(containerElement, containerElement.scrollLeft + closestElement.getBoundingClientRect().left - containerRect.left, 100);
}
var dir;
function Scroll() {
    var styleElement = document.createElement('style');
    ;
    styleElement.textContent = "\n    *[no-scrollbar]{\n      scrollbar-width: thin;\n      scrollbar-color: transparent transparent;\n    }\n    *[no-scrollbar]::-webkit-scrollbar {\n      width:0;\n    }\n    *[no-scrollbar]::-webkit-scrollbar-track {\n      background-color: transparent;\n    }\n    *[no-scrollbar]::-webkit-scrollbar-thumb {\n      background-color: transparent;\n    }\n    *[vertical-scroll] {overflow-y: auto;}\n    *[horozontal-scroll] {overflow-x: auto;white-space: nowrap;}\n    *[horozontal] {display: inline-block;}\n  ";
    document.head.appendChild(styleElement);
    document.querySelectorAll('*[vertical-scroll],*[horozontal-scroll]').forEach(function (scrollContainer) {
        scrollContainer.addEventListener('touchstart', handleTouchStart);
        scrollContainer.addEventListener('touchmove', handleTouchMoveVertical);
        scrollContainer.addEventListener('touchend', handleTouchEnd);
    });
    document.querySelectorAll('*[horozontal-scroll]').forEach(function (scrollContainer) {
        scrollContainer.addEventListener('wheel', handleScrollHorozontal);
        scrollContainer.addEventListener('touchmove', handleTouchMoveHorozontal);
    });
    document.querySelectorAll('*[vertical-scroll]').forEach(function (scrollContainer) {
        scrollContainer.addEventListener('wheel', handleScrollVertical);
        scrollContainer.addEventListener('touchmove', handleTouchMoveVertical);
    });
    var t;
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
    function handleRight(container) {
        container.scrollLeft += 10;
        dir = direction.Left;
        if (t)
            clearTimeout(t);
        t = setTimeout(function () {
            handleStop(container);
        }, 100);
    }
    function handleLeft(container) {
        container.scrollLeft -= 10;
        dir = direction.Right;
        if (t)
            clearTimeout(t);
        t = setTimeout(function () {
            handleStop(container);
        }, 100);
    }
    function handleDown(container) {
        container.scrollTop -= 10;
        dir = direction.Up;
        if (t)
            clearTimeout(t);
        t = setTimeout(function () {
            handleStop(container);
        }, 100);
    }
    function handleUp(container) {
        container.scrollTop += 10;
        dir = direction.Down;
        if (t)
            clearTimeout(t);
        t = setTimeout(function () {
            handleStop(container);
        }, 100);
    }
    var touchStartX = 0;
    var touchStartY = 0;
    function handleTouchStart(event) {
        event.preventDefault();
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
    }
    var handleTouchEnd = function (event) {
        return touchStartX = touchStartY = 0;
    };
    function handleTouchMoveHorozontal(event) {
        event.preventDefault();
        var scrollContainer = event.currentTarget;
        var touchX = event.touches[0].clientX;
        var touchY = event.touches[0].clientY;
        var deltaX = touchX - touchStartX;
        var deltaY = touchY - touchStartY;
        if (Math.abs(deltaX) > Math.abs(deltaY))
            if (deltaX > 0)
                handleRight(scrollContainer);
            else
                handleLeft(scrollContainer);
    }
    function handleScrollHorozontal(event) {
        event.preventDefault();
        var deltaY = event.deltaY;
        var scrollContainer = event.currentTarget;
        if (deltaY < 0)
            handleRight(scrollContainer);
        else if (deltaY > 0)
            handleLeft(scrollContainer);
    }
    function handleScrollVertical(event) {
        event.preventDefault();
        var deltaY = event.deltaY;
        var scrollContainer = event.currentTarget;
        if (deltaY < 0)
            handleDown(scrollContainer);
        else if (deltaY > 0)
            handleUp(scrollContainer);
    }
    function handleTouchMoveVertical(event) {
        event.preventDefault();
        var scrollContainer = event.currentTarget;
        var touchX = event.touches[0].clientX;
        var touchY = event.touches[0].clientY;
        var deltaX = touchX - touchStartX;
        var deltaY = touchY - touchStartY;
        if (Math.abs(deltaX) > Math.abs(deltaY)) { }
        else if (deltaY > 0)
            handleUp(scrollContainer);
        else
            handleDown(scrollContainer);
    }
}
exports.Scroll = Scroll;
function Sliders() {
    var styleElement = document.createElement('style');
    ;
    styleElement.textContent = "\n    *[slider] *[vertical-view]{\n      overflow-y:hidden;\n    }\n    *[slider] *[horozontal-view]{\n      overflow-x: hidden;\n      white-space: nowrap;\n    }\n    *[slider] .full-slider-view{\n      width:100%;\n      height:100%;\n      position:relative;\n    }\n    *[slider] *[horozontal-view] .full-slider-view{\n      display:inline-block;\n    }\n  ";
    document.head.appendChild(styleElement);
    document.querySelectorAll('*[slider]').forEach(function (element) {
        var next_button = element === null || element === void 0 ? void 0 : element.querySelector('*[next]');
        var prev_button = element === null || element === void 0 ? void 0 : element.querySelector('*[prev]');
        var indexes = element === null || element === void 0 ? void 0 : element.querySelector('*[indexes]');
        var Index = 0;
        var type = 'vertical';
        var view = element === null || element === void 0 ? void 0 : element.querySelector('*[vertical-view]');
        if (!view) {
            view = element === null || element === void 0 ? void 0 : element.querySelector('*[horozontal-view]');
            type = 'horozontal';
        }
        function SetIndexus(index) {
            Array.from((indexes === null || indexes === void 0 ? void 0 : indexes.children) || []).forEach(function (element, i) {
                console.log(element);
                if (index == i)
                    element.classList.add('activeIndex');
                else
                    element.classList.remove('activeIndex');
            });
        }
        SetIndexus(0);
        view.scrollLeft = view.scrollTop = 0;
        if (!view)
            throw new Error('slider requires horozontal-view or vertical-view');
        Array.from(view.children).forEach(function (element) { return element.classList.add('full-slider-view'); });
        var LEFT = 0;
        var TOP = 0;
        function next_slide() {
            if (type === 'vertical') {
                TOP += view.getBoundingClientRect().height;
                if (TOP < 0)
                    TOP = 0;
                if (TOP > (view.getBoundingClientRect().height * view.children.length) - (view.getBoundingClientRect().height))
                    TOP = 0;
                scrollToTopSmoothly(view, TOP, 500);
                scrollToClosestElementTop(view);
                Index = TOP / view.getBoundingClientRect().height;
            }
            else {
                LEFT += view.getBoundingClientRect().width;
                if (LEFT < 0)
                    LEFT = 0;
                if (LEFT > (view.getBoundingClientRect().width * view.children.length) - (view.getBoundingClientRect().width))
                    LEFT = 0;
                scrollToLeftSmoothly(view, LEFT, 500);
                scrollToClosestElementLeft(view);
                Index = LEFT / view.getBoundingClientRect().width;
            }
            SetIndexus(Index);
        }
        function prev_slide() {
            if (type === 'vertical') {
                TOP -= view.getBoundingClientRect().height;
                if (TOP < 0)
                    TOP = (view.getBoundingClientRect().height * view.children.length) - (view.getBoundingClientRect().height);
                scrollToTopSmoothly(view, TOP, 500);
                scrollToClosestElementTop(view);
                Index = TOP / view.getBoundingClientRect().height;
            }
            else {
                LEFT -= view.getBoundingClientRect().width;
                if (LEFT < 0)
                    LEFT = (view.getBoundingClientRect().width * view.children.length) - (view.getBoundingClientRect().width);
                scrollToLeftSmoothly(view, LEFT, 500);
                scrollToClosestElementLeft(view);
                Index = LEFT / view.getBoundingClientRect().width;
            }
            SetIndexus(Index);
        }
        function handleStop(container) {
            switch (dir) {
                case direction.Up:
                case direction.Left:
                    prev_slide();
                    break;
                case direction.Down:
                case direction.Right:
                    next_slide();
                    break;
            }
        }
        if (next_button)
            next_button.addEventListener('click', next_slide);
        if (prev_button)
            prev_button.addEventListener('click', prev_slide);
        var t;
        function handleRight(container) {
            container.scrollLeft -= 10;
            dir = direction.Left;
            if (t)
                clearTimeout(t);
            t = setTimeout(function () {
                handleStop(container);
            }, 100);
        }
        function handleLeft(container) {
            container.scrollLeft += 10;
            dir = direction.Right;
            if (t)
                clearTimeout(t);
            t = setTimeout(function () {
                handleStop(container);
            }, 100);
        }
        function handleDown(container) {
            container.scrollTop -= 10;
            dir = direction.Up;
            if (t)
                clearTimeout(t);
            t = setTimeout(function () {
                handleStop(container);
            }, 100);
        }
        function handleUp(container) {
            container.scrollTop += 10;
            dir = direction.Down;
            if (t)
                clearTimeout(t);
            t = setTimeout(function () {
                handleStop(container);
            }, 100);
        }
        var touchStartX = 0;
        var touchStartY = 0;
        function handleTouchStart(event) {
            event.preventDefault();
            touchStartX = event.touches[0].clientX;
            touchStartY = event.touches[0].clientY;
        }
        var handleTouchEnd = function (event) {
            return touchStartX = touchStartY = 0;
        };
        function handleTouchMoveHorozontal(event) {
            event.preventDefault();
            var scrollContainer = event.currentTarget;
            var touchX = event.touches[0].clientX;
            var touchY = event.touches[0].clientY;
            var deltaX = touchX - touchStartX;
            var deltaY = touchY - touchStartY;
            if (Math.abs(deltaX) > Math.abs(deltaY))
                if (deltaX > 0)
                    handleRight(scrollContainer);
                else
                    handleLeft(scrollContainer);
        }
        function handleScrollHorozontal(event) {
            event.preventDefault();
            var deltaY = event.deltaY;
            var scrollContainer = event.currentTarget;
            if (deltaY < 0)
                handleRight(scrollContainer);
            else if (deltaY > 0)
                handleLeft(scrollContainer);
        }
        function handleScrollVertical(event) {
            event.preventDefault();
            var deltaY = event.deltaY;
            var scrollContainer = event.currentTarget;
            if (deltaY < 0)
                handleDown(scrollContainer);
            else if (deltaY > 0)
                handleUp(scrollContainer);
        }
        function handleTouchMoveVertical(event) {
            event.preventDefault();
            var scrollContainer = event.currentTarget;
            var touchX = event.touches[0].clientX;
            var touchY = event.touches[0].clientY;
            var deltaX = touchX - touchStartX;
            var deltaY = touchY - touchStartY;
            if (Math.abs(deltaX) > Math.abs(deltaY)) { }
            else if (deltaY > 0)
                handleUp(scrollContainer);
            else
                handleDown(scrollContainer);
        }
        if (element.getAttribute("wheel-nav")) {
            view.addEventListener('wheel', handleScrollVertical);
            view.addEventListener('wheel', handleScrollHorozontal);
        }
        if (element.getAttribute("touch-nav")) {
            view.addEventListener('touchstart', handleTouchStart);
            view.addEventListener('touchmove', handleTouchMoveVertical);
            view.addEventListener('touchend', handleTouchEnd);
            view.addEventListener('touchmove', handleTouchMoveHorozontal);
            view.addEventListener('touchmove', handleTouchMoveVertical);
        }
    });
}
exports.Sliders = Sliders;
function BannerContainer() {
    (document.querySelectorAll('*[app-container]') || []).forEach(function (element) {
        var banner = element.querySelector("*[banner]");
        var app = element.querySelector("*[app]");
        var bannerConfStr = banner.getAttribute('banner');
        var conf = {
            align: "top",
            height: "80px",
            small: {
                on: "1000",
                align: "top",
                height: "60px",
            }
        };
        function get_op(t) {
            if (t == 'top' || t == 'bottom')
                return 'height';
            if (t == 'left' || t == 'right')
                return 'width';
            return '';
        }
        function get_opi_op(t) {
            if (t == 'top' || t == 'bottom')
                return 'width';
            if (t == 'left' || t == 'right')
                return 'height';
            return '';
        }
        var sml_splited = bannerConfStr.split("small:");
        var c;
        var small_c;
        if (sml_splited === null || sml_splited === void 0 ? void 0 : sml_splited[1]) {
            c = sml_splited[0].split(',');
            small_c = sml_splited[1].split(',');
        }
        else
            c = sml_splited[0].split(',');
        if (c === null || c === void 0 ? void 0 : c[0])
            conf.align = c === null || c === void 0 ? void 0 : c[0];
        if (c === null || c === void 0 ? void 0 : c[1])
            conf.height = c === null || c === void 0 ? void 0 : c[1];
        if (small_c === null || small_c === void 0 ? void 0 : small_c[0])
            conf.small.on = small_c === null || small_c === void 0 ? void 0 : small_c[0];
        if (small_c === null || small_c === void 0 ? void 0 : small_c[1])
            conf.small.align = small_c === null || small_c === void 0 ? void 0 : small_c[1];
        if (small_c === null || small_c === void 0 ? void 0 : small_c[2])
            conf.small.height = small_c === null || small_c === void 0 ? void 0 : small_c[2];
        function SetNormal() {
            banner.style = "\n        position:absolute;\n        ".concat(conf.align, ":0;\n        ").concat(get_op(conf.align), ":").concat(conf.height, ";\n        ").concat(get_opi_op(conf.align), ":100%;\n      ");
            app.style = "\n        position:absolute;\n        ".concat(conf.align, ":").concat(conf.height, ";\n        ").concat(get_op(conf.align), ":calc(100% - ").concat(conf.height, ");\n        ").concat(get_opi_op(conf.align), ":100%;\n      ");
        }
        function SetSmall() {
            banner.style = "\n        position:absolute;\n        ".concat(conf.small.align, ":0;\n        ").concat(get_op(conf.small.align), ":").concat(conf.small.height, ";\n        ").concat(get_opi_op(conf.small.align), ":100%;\n      ");
            app.style = "\n        position:absolute;\n        ".concat(conf.small.align, ":").concat(conf.small.height, ";\n        ").concat(get_op(conf.small.align), ":calc(100% - ").concat(conf.small.height, ");\n        ").concat(get_opi_op(conf.small.align), ":100%;\n      ");
        }
        function Set() {
            if ((window.innerWidth <= Number(conf.small.on)))
                SetSmall();
            else
                SetNormal();
        }
        window.addEventListener('resize', Set);
        Set();
    });
}
exports.BannerContainer = BannerContainer;
function NavigationPanes() {
    document.querySelectorAll('*[navigation-pane]').forEach(function (element) {
        var _a;
        var navControl = element.querySelector('*[navigation]');
        var children = Array.from((_a = element.querySelector('*[panes]')) === null || _a === void 0 ? void 0 : _a.children) || [];
        children.master = element.querySelector('*[master]');
        Array.from(navControl.children).forEach(function (element) {
            if (element.getAttribute('openIndex')) {
                element.addEventListener('click', function () {
                    for (var _i = 0, children_2 = children; _i < children_2.length; _i++) {
                        var child = children_2[_i];
                        child.hidden = true;
                    }
                    children[element.getAttribute('openIndex')].hidden = false;
                });
            }
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var child = children_1[_i];
                child.hidden = true;
            }
            if (children.master)
                children.master.hidden = false;
        });
    });
}
exports.NavigationPanes = NavigationPanes;
function Plugins() {
    InView();
    ClickMenus();
    HoverMenus();
    Scroll();
    Sliders();
    BannerContainer();
    NavigationPanes();
}
exports.default = Plugins;
