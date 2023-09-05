# 2023年夏季《移动软件开发》实验报告



<center>姓名：甘海  学号：21020007018</center>

| 姓名和学号？      | XXXX，200023230    |
| ----------- | ----------------- |
| 本实验属于哪门课程？  | 中国海洋大学23夏《移动软件开发》 |
| 实验名称？       | 实验4：高校新闻网         |
| 博客地址？       | XXXXXXX           |
| Github仓库地址？ | XXXXXXX           |

（备注：将实验报告发布在博客、代码公开至 github 是 **加分项**，不是必须做的）



## **一、实验目标**

1、综合所学知识创建完整的前端新闻小程序项目；能够在开发过程中熟练掌握真机预览、调试等操作.



## 二、实验步骤

### 2.1 页面配置

- 创建页面文件
- 删除和修改文件：类似前述实验，此处不再赘述
- 创建其他文件：本项目还需要自定义文件，即：image——用来存放图片素材、utils——用于存放公共JS文件
- 完成之后的目录结构

![1](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\1.png)

### 2.2 视图设计

- 导航栏设计

![2](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\2.png)

- tabBar设计

![3](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\3.png)

- 页面设计
  1. 首页设计：首页主要包含两部分内容，即幻灯片滚动和新闻列表，计划使用swiper组件、view组件


> 由于文档中所给的swiperImage中的临时新闻数据已经失效了，所以在common.js中重新寻找一个链接进行填充

![4](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\4.png)

- 2. 效果如下图

![5](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\5.png)

- 个人中心页设计：个人中心页主要包含两个板块，即登录面板和我的收藏。登录面板用于显示用户的微信头像和昵称，我的收藏用于显示收藏在本地的新闻列表
  - 计划使用view组件进行整体布局，对自定义的id名称解释如下
    1. myLogin：登录面板
    2. myIcon：微信头像图片
    3. nickName：微信昵称
    4. myFavorites：我的收藏
- 效果展示如下，此时可以显示完整的样式效果。由于尚未获得微信用户数据和收藏在本地的缓存数据，所以暂时无法显示实际内容，仅供作为样式参考

![6](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\6.png)

- 新闻页设计

  > 新闻业是用于给用户浏览新闻全文的，需要用户点击首页的新闻里列表，然后在新窗口打开该页面。新闻页包括新闻标题、新闻图片、新闻正文和新闻日期

  由于暂时没有做点击跳转的逻辑设计，所以可以在微信web开发者工具顶端工具栏中找到普通编译下拉选项，选择添加编译模式，然后追加对于detail页面的直接浏览效果

- 计划使用view组件进行整体布局，对自定义的class名称解释如下

  1. container：整体容器
  2. title：新闻标题区域
  3. poster：新闻图片区域
  4. content：新闻正文区域
  5. add_date：新闻日期区域

- 效果如下图

![7](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\7.png)

### 2.3 公共逻辑

- 正常来说数据应该由网站群管理平台提供新闻接口，由于隐私安全、开发者条件限制等一系列问题，这里采用模拟数据进行代替。假设已经获取到了数据，将其放在公共JS文件(utils/common.js)

![8](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\8.png)

- 在这里使用了3条新闻记录作为示范，开发者可以自行添加或者修改内容
- 接下来在common.js中添加自定义函数getNewList和getNewsDetail，分别用于获取新闻列表信息和指定ID的新闻正文内容

![9](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\9.png)

### 2.4 首页逻辑

> 首页主要有两个功能需要实现，一是展示新闻列表，二是点击新闻标题可以跳转对应的内容页面进行浏览

- 新闻列表展示：通过在index.js中定义common变量，然后通过该变量来调用js的数据接口，于是可以得到返回结果

![10](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\10.png)

- 点击跳转新闻内容：若希望用户点击新闻标题即可实现跳转，需要首先为新闻列表项目添加点击事件，然后在对应的JS文件中写出逻辑代码。此时已经可以通过主页进行跳转了

![11](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\11.png)

### 2.5 新闻业逻辑

> 新闻业主要有两个功能需要实现，一是显示对应新闻，二是可以添加/取消新闻收藏

- 显示对应新闻：在首页逻辑中已经实现了页面跳转并携带新闻ID编号，现在需要在新闻业接收ID编号，并查询对应的新闻内容。现在便可以成功地根据新闻的编号id来获取对应的新闻内容了

![12](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\12.png)

- 添加/取消收藏：修改detail.wxml代码，追加两个button组件作为添加/取消收藏新闻的按钮，并使用wx:if和wx:else属性使其每次只存在一个。
- 在detail.js的onLoad函数中判断当前新闻是否已经被收藏过了

![13](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\13.png)

- 之后在detail.js文件中追加addFavorites和cancelFavorites函数，用于点击添加/取消新闻收藏
- 从下图可以看出，已经把文章article的数据添加到了本地缓存里面

![14](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\14.png)

### 2.6 个人中心页逻辑

> 个人中心页主要有3个功能需要实现，一是获取微信用户信息；二是获取收藏列表；三是浏览收藏的新闻

- 获取微信用户信息：修改my.wxml代码，追加button组件作为登录按钮，并且使用wx:if和wx:else属性让未登录时只显示按钮，登录后只显示头像和昵称![15](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\15.png)
- 使用wx.getUserProfile方式获取微信用户的信息，成功展示信息在个人页面

![16](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\16.png)

- 获取收藏列表：修改my.wxml代码，将我的收藏后面的数字更改为动态数据效果。之后通过wx.getStorageInfoSync获取本地的收藏缓存，之后再存储在data中，方便展示信息

![17](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\17.png)

- 考虑到登录成功之后用户还可以手动更改新闻的收藏状态，因此修改my.js中的onShow函数，判断如果是登录状态就刷新一下收藏列表。因为之前仅在用户登录的时候渲染收藏数据，但是当用户切换到其他页面的时候，它有可能重新收藏或者取消收藏新闻，所以每次切换回来时需要重新加载![18](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\18.png)
- 成功更新收藏列表

![19](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\19.png)

![20](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\20.png)

- 浏览收藏的新闻：点击浏览已经收藏的新闻和首页的点击跳转新闻内容功能类似


![21](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\21.png)

![22](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\22.png)

## 三、程序运行结果

列出程序的最终运行结果及截图。

### 3.1 首页

![22](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\23.png)



### 3.2 详情页

![23](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\22.png)

### 3.3 登录前

![24](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\24.png)

### 3.4 登录后

![25](C:\Users\shineahead\Desktop\移动软件开发\img\lab4\25.png)

## 四、问题总结与体会

描述实验过程中所遇到的问题，以及是如何解决的。有哪些收获和体会，对于课程的安排有哪些建议。

### 4.1 遇到的问题

- 问题一：在detail.js文件中，调用wx.getStorageSync函数一直报错

- 解决：原来是传参的时候多了引号...

  ```javascript
  let id = options.id
  //检查当前新闻是否在收藏夹中
  var article = wx.getStorageSync('id')

  ```

- 问题二：个人界面的onShow函数不起作用

- 解决：主页的收藏按钮有bug，导致我以为个人界面的onShow函数没有起作用

### 4.2 收获和体会

- 首先，学会了跳转界面的时候携带参数，在onLoad函数里面来获取携带的参数
- 其次，学会了如何把一些数据存储在本地缓存中去，例如：收藏按钮非常需要这个功能
- 对于for循环渲染数据方法的使用了解更加深入了
- 学会了通过控制台调试程序的方法，可以通过console.log打印信息来帮助debug

### 4.3 课程安排的建议

课程安排挺合理的，通过跟着文档动手写代码便可以学到知识。只是文档中没有给出某些代码的解释，如果能够给
出未出现过的代码解释的话就更好了

