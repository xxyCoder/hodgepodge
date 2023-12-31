# 图片资源应该如何存放并且引用呢？
- 存放在public或assets目录下
- Public目录处理方式
  - Vite：Vite将public目录中的文件视为静态资源，它们会被直接复制到构建输出目录中，且保持原始文件名和路径。这些文件不会经过任何编译或处理。
  - Webpack：Webpack也可以处理public目录中的文件，但是需要使用相应的loader进行处理。通常，使用file-loader或copy-webpack-plugin将public目录中的文件复制到构建输出目录中。
- Assets目录处理方式：
  - Vite：Vite没有特定的assets目录，项目中的静态资源文件可以放置在任何地方。Vite会自动处理在项目中引用的静态资源，无需额外配置。它会根据需要，将资源文件进行处理和优化，如压缩、合并等，并生成适当的引用路径。
  - Webpack：Webpack通常使用特定的loader来处理assets目录中的文件，如url-loader、file-loader、raw-loader等。这些loader可以处理不同类型的资源文件，并根据配置进行相应的处理和优化。

# 背景图片如何铺满整个屏幕？
```css
img {
   background-size: 100% 100%;
   background-repeat: no-repeat;
}
```

# css的@import不能使用别名@
- 别名@无法识别，可以使用相对路径或绝对路径

# 当页面缩小到一定程度的时候，右边布局会掉下来怎么办？
- 给CSS添加text-wrap:nowrap

# 页面如何做响应式设计呢？
1. 使用媒体查询+相对单位
2. 图像和媒体可以使用max-width:100%
3. 使用百分比

# 设置了position:fixed还有必要设置z-index吗？
- 没必要了，position:fixed默认覆盖其他元素，除非有多个position:fixed才需要

# textarea为什么会与下面有一定空隙呢？
- 是textarea元素的默认vertical-align属性值为baseline。当textarea和其他元素一起显示在同一行上时，textarea可能会对齐到基线，导致下面的元素在垂直方向上留有一定的空隙

# 起别名
- vite.config.js配置用于Rollup，构建模块的时候查找路径
- tsconfig.json是给tsc用的，用于ts构建模块查询路径

# 关于v-show的问题
- 如果使用v-show作为条件判断，且条件判断方式是判断是否为空，不为空展示数据的部分仍然要带上?判断是否有内容，这是因为即使内容为空，也会执行渲染逻辑（只是后面设置display:none），导致没有数据出错

# document.documentElement.scrollTop 一直为0
- 这因为绑定scroll的节点，没有设置滚动条，也就是页面没有滚动，而是其节点的子节点在滚动

# overflow-x失效？
- 这是因为子级宽度没有超过父级的宽度，即使将页面缩小，只要子级没有超过父级宽度都不会出现滚动条

# 路由中params和query的选择？
- params传递标识性信息，如用户id、文章id等 github个人主页就是这样
- query用于筛选、搜索关键字等非标识性信息

# ts-node为什么不能识别在tsconfig.json中的路径别名
- 需要下载额外包来解决改问题，npm i tsconfig-paths -D 去帮助ts-node解析里面的别名

# bcrypt每次对相同的字符串生成hash值都不一样，那么它是如何进行校验的？
- bcrypt 使用一种称为“盐值（salt）”的技术，它为每个密码生成一个唯一的盐值，然后将这个盐值与密码一起哈希。
- 验证的时候 bcrypt 会从存储的哈希值中提取盐值，然后将输入的密码与该盐值结合起来进行哈希，最后与存储的哈希值进行比较