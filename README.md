## install
```
git clone https://github.com/onedaywen/vue-rowscols-table.git
cd vue-rowscols-table
npm i
npm run dev
```
## Tutorial

```
import rowscolsTable from 'src/components/rowscols_table/index.vue';

//vue components
...
data: {
  rowscolsTable: {
    titleArr: [
      ...
      String | Object,
      ...
    ],
    contentArr: [
      //tr contentArr的内层数组每一个对象都是一个tr数组
      [
        
      ]
    ]
  }
},
components: {
  rowscolsTable
},
...

//in vue template
<rowscolsTable :param="param">

```
## views
![](https://github.com/onedaywen/vue-rowscols-table/blob/master/src/components/rowscols_table/1.png)