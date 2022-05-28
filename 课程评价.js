/*
 * @Author: 梁敏智
 * @Date: 2022-05-28 18:31:27
 * @LastEditors: 梁敏智
 * @LastEditTime: 2022-05-28 18:40:25
 * @Description: 用来南京邮电大学满意度评价的脚本，问卷调查->课程评价
 */

// 满意度评价
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
			allselects[j].value = "相对认同"  // 中间两个选相对认同，剩下的选认同
		} else allselects[j].value = "完全认同"
	}
	finished++;
	frames['iframeautoheight'].contentDocument.getElementById("Button1").click()
	console.log("任务进度：", finished, " / ", length, " 门课")
}, 1000);

