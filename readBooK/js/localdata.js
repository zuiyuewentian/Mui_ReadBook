/***************** 操作本地文件  陈程 2018年4月8日23:00:41*****************/
//保存图书本地json
function SaveLocalJson(data) {
	localStorage.setItem("MyBook", data);
}

//查询所有保存本地json
function GetLocalJson() {
	var readtext = localStorage.getItem("MyBook");
	var readJson = JSON.parse(readtext);
	return readJson;
}

//更新小说最后阅读的章节Id
function UpdateLocalLastRead(novelId, lastReadId) {
	var readtext = localStorage.getItem("MyBook");
	var readJson = JSON.parse(readtext);
	var count = Object.keys(readJson).length;
	for(i = 0; i < count; i++) {
		if(readJson[i].NovelId == novelId) {
			readJson[i].LastReadId = lastReadId;
		}
	}
	var jsontext = JSON.stringify(readJson);
	SaveLocalJson(jsontext);
}

//删除本地保存图书
function RemoveMyBook() {
	localStorage.removeItem("MyBook");
}
/***************** end *****************/