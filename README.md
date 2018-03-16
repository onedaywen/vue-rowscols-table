## install
```
git clone https://github.com/onedaywen/month_picker.git
cd month_picker
npm i
npm run dev
```
## Tutorial

```
import MonthPicker from 'src/components/month_picker/index.vue';

//vue components
...
data: {
  param: {
    year: '',
    month: '',
    limitStart: '',//'2010-10',
    limitEnd: '',//'2020-3',
  }
},
components: {
  MonthPicker
},
methods: {
  callback (param) {
    console.log('a callback when you pick a month', param);
  }
}
...

//in vue template
<MonthPicker :param="param" :callback="callback">

```
## views
![](https://github.com/onedaywen/month_picker/blob/master/src/components/month_picker/img/one.png)
![](https://github.com/onedaywen/month_picker/blob/master/src/components/month_picker/img/two.png)