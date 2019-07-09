## react-router 版本对比
> 4.x 5.x 相比 2.x 3.x在写法上有很大不同
1. 2.x是集中式路由，路由都写在一起 然后在组件中写this.props.children
2. 4.x以后 路由更为组件化了，完全可以把路由当作一个普通组件使用，也就是路由分散了
3. 5.x主要是更好的适配了react16

## 心得体会
1. 4.x之后的嵌套路由写法更符合我的直觉
2. 使用exact属性代替IndexRoute 路由组件也更统一
3. JS控制跳转的方式更简单了，之前通过react的context属性 现在使用props传递match history
