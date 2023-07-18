# HTML-plugins cheatsheet

```html
<!--scrollabal div with banner-->
<div app-container style="
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
">
  <!--set banner-->
  <div banner="top,80px small:1000,left,70px">
    BANNER
  </div>
  <!--main app-->
  <div app>
    <!--menu options, menus should work inside each other-->
    <div click-menu>
      <button title>click me</button>
      <div options>
        <li>option</li>
        <li>option</li>
        <li>option</li>
        when you click outside the menu it will close
      </div>
    </div>
    <div hover-menu>
      <button title>hover me</button>
      <div options>
        <li>option</li>
        <li>option</li>
        <li>option</li>
        when you click outside the menu it will close
      </div>
    </div>
    <div absolute-hover-menu>
      <button title>hover me</button>
      <div options>
        <li>option</li>
        <li>option</li>
        <li>option</li>
        when you hover outside the menu it will close
      </div>
    </div>
  <!--warning:sliders,vertical,horozontal scroll can't be inside each other, they are standalone elements-->
  <div horozontal-scroll no-scrollbar style="width:100px;height:100px">
    <h1 horozontal scroll-stop style="width:100%">
      test
    </h1>
    <h1 horozontal scroll-stop style="width:100%">
      test2
    </h1>
    <h1 horozontal scroll-stop style="width:100%">
      test3
    </h1>
    <h1 horozontal scroll-stop style="width:100%">
      test4
    </h1>
  </div>
  <div vertical-scroll style="height:80px;top:100px;">
    <h1 scroll-stop>test</h1>
    <h1 scroll-stop>test2</h1>
    <h1 scroll-stop>test3</h1>
    <h1 scroll-stop>test4</h1>
  </div>
  <div slider>
    <button prev>prev</button>
    <div horozontal-view style="width:100px;height:100px;">
      <div>
        SLIDE A
      </div>
      <div>
        SLIDE B
      </div>
      <div>
        SLIDE C
      </div>
      <div>
        SLIDE D
      </div>
    </div>
    <button next>next</button>
  </div>
  <div slider>
    <button prev>prev</button>
    <div vertical-view style="width:100px;height:100px;">
      <div>
        SLIDE A
      </div>
      <div>
        SLIDE B
      </div>
      <div>
        SLIDE C
      </div>
      <div>
        SLIDE D
      </div>
    </div>
    <button next>next</button>
  </div>
  </div>
</div>
```
