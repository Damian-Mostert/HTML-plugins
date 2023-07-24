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
# example [Angular app](https://github.com/Damian-Mostert/angular-base-app)
