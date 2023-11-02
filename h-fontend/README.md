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