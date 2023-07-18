# HTML-plugins cheatsheet

```html
<div>
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
```
