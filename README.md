# vuejs-weekpicker

Here is what this component looks like

![vuejs-weekpicker](https://user-images.githubusercontent.com/425998/56010974-fe95b100-5ce5-11e9-8136-180d7535e352.png)


## How to configure it

In your main file app.js, add these lines :

```
import WeekPicker from 'vuejs-weekpicker'
Vue.use(WeekPicker)
```

## How to use it 

Just call the week-picker tag :

```
<week-picker></week-picker>
```

By default, the locale is english 'en'
You can change the locale with this syntax :

```
<week-picker weekPickerLocale='fr'></week-picker>
```

For now, only english and french are supported.

## Roadmap

To do list for this component :

[X] Add under week selector the from date and to date. Example : for the week 2019/15, the result will be 'From 20190408 To 20190414'
[ ] Add ability to hide from/to information
[ ] Add VueX implementation to help to communicate with parent and others components

## Changelog
- 20190412 v0.2.0 Add 'from/to' functionnality
- 20190412 v0.1.8 First functionnal version 
