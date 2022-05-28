 * @Author: 梁敏智
 * @Date: 2022-05-28 18:31:12
 * @LastEditors: 梁敏智
 * @LastEditTime: 2022-05-28 18:40:51
 * @Description：用于南京邮电大学课程评价以及教学质量评价的脚本，教程如下
# NJUPT-automatic-evaluation-script
&emsp;南京邮电大学期末自动评价脚本，我只测试过`Chrome`浏览器，是可行的，其他常用的浏览器应该都可以。

# 问题

&emsp;如果按照下面教程，代码出现问题的情况，请自行刷新浏览器重新尝试。

# 用法介绍一、课程评价

## 1、依次点击问卷调查，课程评价，打开课程评价页面

![image-20220528185711507](https://imagere.oss-cn-beijing.aliyuncs.com/img/202205281857590.png)

## 2、右键页面，点击检查

![image-20220528185757922](https://imagere.oss-cn-beijing.aliyuncs.com/img/202205281857021.png)

## 3、切换到控制台（英文版的是：`Console`），并复制粘贴如下代码，也就是`课程评价.js`文件的代码，按下回车。等待全部评价完成，即可点击提交。

![image-20220528190033917](https://imagere.oss-cn-beijing.aliyuncs.com/img/202205281900039.png)

```javascript
// 也就是'课程评价.js'文件的代码（此行不要复制）
var obj = frames['iframeautoheight'].contentDocument.getElementById("pjkc")
var length = obj.options.length
console.log("你有", length, "门课程需要进行课程评价")
var finished = 0;
var task = window.setInterval(function () {
	if (finished == length - 1) {
		window.clearInterval(task)
	}
	var allselects = frames['iframeautoheight'].contentDocument.getElementsByTagName("select");
	for (var j = 1; j < allselects.length; j++) {
		if (j == allselects.length / 2 - 1 || j == allselects.length / 2 + 1) {
			allselects[j].value = "相对认同" 
		} else allselects[j].value = "完全认同"
	}
	finished++;
	frames['iframeautoheight'].contentDocument.getElementById("Button1").click()
	console.log("任务进度：", finished, " / ", length, " 门课")
}, 1000);
```

# 用法介绍二、教学质量评价

***&emsp;和上面一样的，不过我还是写了一点教程。***

## 1、点击教学质量评价，打开教学质量评价主页面

![image-20220528190304452](https://imagere.oss-cn-beijing.aliyuncs.com/img/202205281903546.png)

## 2、右键页面，点击检查

![image-20220528190431520](https://imagere.oss-cn-beijing.aliyuncs.com/img/202205281904616.png)

## 3、切换到控制台（英文版的是：`Console`），并复制粘贴如下代码，也就是`教学质量评价.js`文件的代码，按下回车。等待全部评价完成，即可点击提交。

![image-20220528190621902](https://imagere.oss-cn-beijing.aliyuncs.com/img/202205281906022.png)

```JavaScript
// 也就是'教学质量评价.js'文件的代码（此行不要复制）
var obj = frames['iframeautoheight'].contentDocument.getElementById("pjkc")
var length = obj.options.length
console.log("你有", length, "门课程需要进行教学质量")
var finished = 0;
var task = window.setInterval(function () {
	if (finished == length - 1) {
		window.clearInterval(task)
	}
	var allselects = frames['iframeautoheight'].contentDocument.getElementsByTagName("select");
	for (var j = 1; j < allselects.length; j++) {
		if (j % 7 == 1) {   // 每7个选项选一个为较好，剩下的都选好，可以自己在这里编辑
			allselects[j].value = "较好";
		} else allselects[j].value = "好";
	}
	finished++;
	frames['iframeautoheight'].contentDocument.getElementById("Button1").click()
	console.log("任务进度：", finished, " / ", length, " 门课")
}, 1000);
```



---

# 更新（此条不重要）

&emsp;之前我用过别人的脚本两年了，但是今年好像用不了了，原因应该是南邮今年使用了`iframe`元素的原因，所以我对脚本做了更新。有什么问题可以提出来。



