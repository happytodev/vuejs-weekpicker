# vuejs-weekpicker

This is a vue.js weekpicker component. It implements Vuex to share datas with other components or parent app.

Shared datas  are :

- Year
- Week number
- From and to infos corresponding to year and week choosed by user

Here is what this component looks like

![vuejs-weekpicker](https://user-images.githubusercontent.com/425998/56010974-fe95b100-5ce5-11e9-8136-180d7535e352.png)


## How to configure it

In your main file app.js, add these lines :

```
import WeekPicker from 'vuejs-weekpicker'
import store from './store/store'

Vue.use(WeekPicker)


Vue.config.productionTip = false

```

In your new Vue instance, add call to store : 

```
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
```

In your src folder add a folder named 'store'.

In this folder add a file store.js

In this file, you can copy the code you can found [here](https://github.com/itanea/vuejs-weekpicker/blob/master/src/store/store.js)

## How to use it 

Just call the week-picker tag :

```
<week-picker></week-picker>
```

or like this 

```
<week-picker />
```

By default, the locale is english 'en'

You can change the locale with this syntax :

```
<week-picker week-picker-locale='fr'></week-picker>
```

For now, only english and french are supported.

Nota : param week-picker-locale is not required.

## Roadmap

To do list for this component :

- [X] Add under week selector the from date and to date. Example : for the week 2019/15, the result will be 'From 20190408 To 20190414'
- [ ] Add ability to hide from/to information
- [X] Add VueX implementation to help to communicate with parent and others components
- [ ] Add ability to change component color to match with others components

## Changelog
- 20190414 v0.3.0 Add Vuex implementation
- 20190412 v0.2.0 Add 'from/to' functionnality
- 20190412 v0.1.8 First functionnal version 
