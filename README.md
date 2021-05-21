
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## 总结：todoList功能
    1、组件拆分，绘制静态组件
    2、动态组件初始化列表（判断数据放在哪个组件的state中）
        2.1、放在自身的state
        2.2、放在共同父组件的state（状态提升）
    3、父子通信
        3.1、父-->子：通过props传递
        3.2、子-->父：通过props传递，要求父提前给子传递一个函数
    4、defaultchecked和checked的区别
    5、状态在哪里操作状态就在哪里
