/*
 * @Author: 梁敏智
 * @Date: 2022-05-28 18:38:53
 * @LastEditors: 梁敏智
 * @LastEditTime: 2022-05-28 18:40:08
 * @Description: 用来南京邮电大学满意度评价的脚本，教学质量评价->
 */

// 教学质量评价
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