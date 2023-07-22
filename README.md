# HTML-plugins embed HTML
```html
<script type="module">
  include Plugins from '/Plugins/index.js'
  Plugins() 
</script>
```
# HTML-plugins embed Angular
```ts
import Plugins from './Plugins'  
export default class App{
  ngOnInit(){
    Plugins()
  }
}
```
# HTML-plugins embed React
```jsx
import Plugins from './Plugins/react'; 
export default function App() {
  return (
    <div>
        code here 
      <Plugins/>
    </div>
  );
}
```
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
    <h1>Banner</h1>
  </div>
  <!--main app small-->
  <div app app-container navigation-pane>
    <div banner="top,40px" navigation><!--navigation banner-->
      <button style="width:80px" openIndex="0">Pane A</button><button style="width:80px" openIndex="1">Pane B</button><button style="width:80px" openIndex="2">Pane C</button><button style="width:80px" openIndex="3">Pane D</button>
    </div>
    <!--navigation panes-->
    <div panes app>
        <div master box-pad="50px">
        <h1>pane A Master</h1>
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
          <div hover-drop="true">
            <button title="true">hover me</button>
              <div options="true">
               <li>option</li>
               <li>option</li>
               <li>option</li>
 this menu wont close after you hovered over its title
              </div>
             </div>
            <div click-drop="true">
              <button title="true">click me</button>
                <div options="true">
                 <li>option</li>
                 <li>option</li>
                 <li>option</li>
                    this menu wont close after you clicked its title
                </div>
              </div>
        </div>
        <div box-pad="50px">
          <h1>pane B</h1>
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
          <div vertical-scroll style="height:50px;top:100px;">
            <h1 scroll-stop>test</h1>
            <h1 scroll-stop>test2</h1>
            <h1 scroll-stop>test3</h1>
            <h1 scroll-stop>test4</h1>
          </div>
        </div>
        <div box-pad="50px">
          <h1>pane C</h1>
          <div slider>
            <div horozontal-view style="background: grey;width:100px;height:100px;">
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
            <button prev>prev</button><button next>next</button>
          </div>
          <div slider>
            <div vertical-view style="background: grey;width:100px;height:100px;">
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
            <button prev>prev</button><button next>next</button>
          </div>
        </div>
        <div box-pad="50px">
          <h1>pane D</h1>
        </div>
    </div>
  </div>
</div>
```
```jsx
import React, { useState} from 'react';
import Head from 'next/head';
import styles from './Home.module.css';
import Plugins from './Plugins/react';
export default function Home() {
  return (
    <div className={styles.Body} app-container="true">
      <Head>
        <title>API</title>
      </Head>
        <div banner="top,80px small:1000,left,70px">
          <h1>Banner</h1>
        </div>
        <div app="true" app-container="true" navigation-pane="true">
          <div banner="top,40px" navigation="true">
            <button openIndex="0">Pane A</button><button openIndex="1">Pane B</button><button openIndex="2">Pane C</button><button openIndex="3">Pane D</button>
          </div>
          <div panes="true" app="true">
              <div master="true" box-pad="50px">
              <h1>pane A Master</h1>
                <div click-menu="true">
                  <button title="true">click me</button>
                  <div options="true">
                    <li>option</li>
                    <li>option</li>
                    <li>option</li>
                    when you click outside the menu it will close
                  </div>
                </div>
                <div hover-menu="true">
                  <button title="true">hover me</button>
                  <div options="true">
                    <li>option</li>
                    <li>option</li>
                    <li>option</li>
                    when you click outside the menu it will close
                  </div>
                </div>
                <div absolute-hover-menu="true">
                  <button title="true">hover me</button>
                  <div options="true">
                    <li>option</li>
                    <li>option</li>
                    <li>option</li>
                    when you hover outside the menu it will close
                  </div>
                </div>
              </div>
              <div box-pad="50px">
                <h1>pane B</h1>
                <div horozontal-scroll="true" no-scrollbar="true">
                  <h1 horozontal="true" scroll-stop="true">
                    test
                  </h1>
                  <h1 horozontal="true" scroll-stop="true">
                    test2
                  </h1>
                  <h1 horozontal="true" scroll-stop="true">
                    test3
                  </h1>
                  <h1 horozontal="true" scroll-stop="true">
                    test4
                  </h1>
                </div>
                <div vertical-scroll="true">
                  <h1 scroll-stop="true">test</h1>
                  <h1 scroll-stop="true">test2</h1>
                  <h1 scroll-stop="true">test3</h1>
                  <h1 scroll-stop="true">test4</h1>
                </div>
              </div>
              <div box-pad="50px">
                <h1>pane C</h1>
                <div slider="true">
                  <div horozontal-view="true">
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
                  <button prev="true">prev</button><button next="true">next</button>
                </div>
                <div slider="true">
                  <div vertical-view="true">
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
                  <button prev="true">prev</button><button next="true">next</button>
                </div>
              </div>
              <div box-pad="50px">
                <h1>pane D</h1>
              </div>
          </div>
        </div>
      <Plugins/>
    </div>
  );
}

```
slideshow options
```html
<style>
/*set indexes active index styles*/
*[indexes] .activeIndex{
  color:red
}
</style>
<h1>Contact</h1>
  <div slider >
    <div indexes>
      <label>A</label>
      <label>B</label>
      <label>C</label>
      <label>D</label>
    </div>
    <div horozontal-view style="background: grey;width:100%;height:500px;">
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
    <button prev>prev</button><button next>next</button>
  </div>
  <div slider>
    <div vertical-view style="background: grey;width:100%;height:500px;"><!--main slides-->
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
    <button prev>prev</button><!--button for previos tab-->
    <button next>next</button><!--button for next tab-->
  </div>
  <div slider touch-nav="true" wheel-nav="true"> <!--whell-nav will allow tab switching to happen with whell, same with touch but just with touch(mobile)-->
    <div vertical-view style="background: grey;width:100%;height:500px;">
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
    <button prev>prev</button><button next>next</button>
  </div>
```
