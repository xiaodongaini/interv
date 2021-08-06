/* 初始化事件处理程序和时间处理对象 */
var EventUtil = {
  addHandler: function(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },
  removeHandler: function(element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  },
  getEvent: function(event) {
    return event ? event : window.event;
  },
  getTarget: function(event) {
    return event.target || event.srcElement;
  },
  preventDefault: function(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  stopPropagation: function(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  }
}

/** 初始化超量原因数组 */
var reasonArr = [
  {
    key: 'reason1',
    value: '心功能不全'
  },
  {
    key: 'reason2',
    value: '凝血功能障碍、抗凝药物影响'
  },
  {
    key: 'reason3',
    value: '造血功能障碍'
  },
  {
    key: 'reason4',
    value: '肿瘤侵犯重要脏器'
  },
  {
    key: 'reason5',
    value: '相同部位既往手术史'
  },
  {
    key: 'reason6',
    value: '失血量预测偏小'
  },
  {
    key: 'reason7',
    value: '高龄（大于70岁）'
  },
  {
    key: 'reason8',
    value: '儿童患者（小于12岁）'
  },
  {
    key: 'reason9',
    value: '肺功能不全'
  }
]

function hideModal (type, callBack) {
  if (type !== 3) {
    var maskDiv = document.getElementById('maskDiv');
    var modalDiv = document.getElementById('modalDiv');
    // 删除蒙层和弹出框
    document.body.removeChild(maskDiv);
    document.body.removeChild(modalDiv);
  }
  callBack(type);
}

function setStyle (obj, styleString) {
  obj.setAttribute("style", styleString);
  obj.style.cssText = styleString;
}

var height = document.body.scrollHeight || document.documentElement.scrollHeight;
var width = document.body.scrollWidth || document.documentElement.scrollWidth;

function renderModal (txt, callBack) {
  var xmlDoc = null;
  if (window.DOMParser) {
    parser=new DOMParser();
    xmlDoc=parser.parseFromString(txt, "text/xml");
  } else {
    // Internet Explorer
    xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async="false";
    xmlDoc.loadXML(txt);
  }
  /** 获取xml文件内容 */
  var summary = xmlDoc.getElementsByTagName("Summary")[0].childNodes[0].nodeValue;
  var detailTitle = xmlDoc.getElementsByTagName("DetailsLinkTitle")[0].childNodes[0].nodeValue;
  var detailLink = xmlDoc.getElementsByTagName("DetailsLinkUrl")[0].childNodes[0].nodeValue;
  var predictInfoArr = xmlDoc.getElementsByTagName("PredictInfo");
  var reminder = xmlDoc.getElementsByTagName("Reminder")[0].childNodes[0].nodeValue;

  /** 创建modal弹出框背景蒙层 */
  var maskDiv = document.createElement("div");
  // var style = "height:100%; width:100%; position:absolute; _position:absolute; z-index: 10; color: #6C72FF;" + 
  //   "left: 0; top: 0; right: 0; bottom: 0;" +
  //   "background: #000; -webkit-opacity: 0.5; -moz-opacity: 0.5; -khtml-opacity: 0.5;" +
  //   "opacity: .5; filter:alpha(opacity=50); -ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)'" +
  //   "filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=50);";
  var style = "position: absolute; left: 0; right: 0; top: 0; bottom: 0;" +
    "background-color: #000; height: " + height +"px; width: " + width + "px;" +
    "-webkit-opacity: 0.5; -moz-opacity: 0.5; -khtml-opacity: 0.5;" +
    "opacity: .5; filter:alpha(opacity=50); -ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)'" +
    "filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=50);";
  maskDiv.setAttribute("id", "maskDiv");
  // maskDiv.setAttribute("style", style);
  setStyle(maskDiv, style);

  /** 创建弹出框 */
  var modalDiv = document.createElement("div");
  var innerStyle = "position: absolute; width: 600px; min-height: 430px;" +
    "left: 50%; top: 50%; margin-left: -300px; margin-top: -200px; text-align: center;" +
    "border-radius: 5px; background: #fff; padding: 28px 60px; z-index: 11; color: red;"
  // modalDiv.setAttribute("style", innerStyle);
  setStyle(modalDiv, innerStyle);
  modalDiv.setAttribute("id", "modalDiv");

  /** 为弹出框添加内容 */
  /** 添加首行标题 */
  var title = document.createElement("div");
  var titleStyle = "height: 26px; line-height: 26px; text-align: center; font-size: 18px;" +
    "font-weight: bold; margin-bottom: 46px; color: red;"
  title.innerText = "AI预测结果";
  modalDiv.appendChild(title);
  setStyle(title, titleStyle);
  /** 添加推荐备血量 */
  var summaryDiv = document.createElement("div");
  var summaryStyle = "height: 20px; line-height: 20px; text-align: center; font-size: 14px; " +
    "color: #6C72FF; font-weight: 600; margin-bottom: 20px;";
  // summaryDiv.setAttribute("style", summaryStyle);
  setStyle(summaryDiv, summaryStyle);
  summaryDiv.innerText = summary;
  modalDiv.appendChild(summaryDiv);
  /** 添加预测信息 */
  var predictInfoStyle = "height: 24px; line-height: 24px; text-align: left; font-size: 14px;" +
    "color: #54657E; font-weight: 500;";
  for (var i = 0; i < predictInfoArr.length; i++) {
    var infoItemDiv = document.createElement("div");
    // infoItemDiv.setAttribute("style", predictInfoStyle);
    setStyle(infoItemDiv, predictInfoStyle);
    infoItemDiv.innerText = predictInfoArr[i].childNodes[0].nodeValue;
    modalDiv.appendChild(infoItemDiv);
  }
  /** 添加提示信息 */
  var reminderDiv = document.createElement("div");
  var reminderStyle = "margin-top: 30px; line-height: 20px; font-size: 14px; color: #54657E;" +
    "text-align: left; margin-bottom: 20px;";
  // reminderDiv.setAttribute("style", reminderStyle);
  setStyle(reminderDiv, reminderStyle);
  reminderDiv.innerText = reminder;
  modalDiv.appendChild(reminderDiv);
  /** 添加点击查看预测详情按钮 */
  var detailBtn = document.createElement("div");
  var link = document.createElement("a");
  var detailBtnStyle = "display: inline-block; _zoom:1; *display:inline; border: 1px solid #6C72FF; margin: 0 auto;" +
    "height: 28px; line-height: 28px; text-align: center; padding: 0 16px;" +
    "font-size: 14px; font-weight: bold; cursor: pointer; border-radius: 50px;";
  // detailBtn.setAttribute("style", detailBtnStyle);
  setStyle(detailBtn, detailBtnStyle);
  var linkStyle = "text-decoration: none; color: #6C72FF;";
  link.setAttribute("href", detailLink);
  link.setAttribute("target", "_blank");
  // link.setAttribute("style", linkStyle);
  setStyle(link, linkStyle);
  link.innerText = detailTitle;
  detailBtn.appendChild(link);
  modalDiv.appendChild(detailBtn);
  /** 添加分隔线 */
  var line = document.createElement("div");
  var lineStyle = "position: absolute; left: 0; top: 360px; right: 0;"
    + "border-top: 1px solid #ECEFF4;";
  // line.setAttribute("style", lineStyle);
  setStyle(line, lineStyle);
  modalDiv.appendChild(line);
  /** 添加按钮 */
  var btnCon = document.createElement("div");
  var btnConStyle = "margin: 60px auto; width: 420px; height: 40px;";
  // btnCon.setAttribute("style", btnConStyle);
  setStyle(btnCon, btnConStyle);
  var acceptBtn = document.createElement("div");
  var btnStyle = "display: inline-block; _zoom:1; *display:inline; width: 188px; height: 40px; cursor: pointer;" +
    "line-height: 38px; color: #fff; font-size: 14px; font-weight: bold; text-align: center;";
  var leftBtnStyle = "margin-right: 40px; background: #6C72FF;";
  var rightBtnStyle = "background: #C1C3EB;";
  // acceptBtn.setAttribute("style", btnStyle + leftBtnStyle);
  setStyle(acceptBtn, btnStyle + leftBtnStyle);
  acceptBtn.setAttribute("id", "acceptBtn");
  acceptBtn.innerText = "接受推荐";
  var manualBtn = document.createElement("div");
  // manualBtn.setAttribute("style", btnStyle + rightBtnStyle);
  setStyle(manualBtn, btnStyle + rightBtnStyle);
  manualBtn.setAttribute("id", "manualBtn");
  manualBtn.innerText = "手工输入";
  btnCon.appendChild(acceptBtn);
  btnCon.appendChild(manualBtn);
  modalDiv.appendChild(btnCon);

  /** 将蒙层和弹出框插入DOM中 */
  document.body.appendChild(maskDiv);
  document.body.appendChild(modalDiv);
  /** 为两个按钮绑定事件 */
  EventUtil.addHandler(acceptBtn, 'click', function() {
    hideModal(2, callBack);
  });
  EventUtil.addHandler(manualBtn, 'click', function() {
    hideModal(1, callBack);
  })
}

function renderReason (callBack) {
  /** 创建modal弹出框背景蒙层 */
  var maskDiv = document.createElement("div");
  // var style = "position: fixed; z-index: 10; color: #6C72FF;" + 
  //   "left: 0; top: 0; right: 0; bottom: 0;" +
  //   "background: #000; -webkit-opacity: 0.5; -moz-opacity: 0.5; -khtml-opacity: 0.5;" +
  //   "opacity: .5; filter:alpha(opacity=50); -ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)'" +
  //   "filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=50);";
  var style = "position: absolute; left: 0; right: 0; top: 0; bottom: 0;" +
    "background-color: #000; height: " + height +"px; width: " + width + "px;" +
    "-webkit-opacity: 0.5; -moz-opacity: 0.5; -khtml-opacity: 0.5;" +
    "opacity: .5; filter:alpha(opacity=50); -ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)'" +
    "filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=50);";
  maskDiv.setAttribute("id", "maskDiv");
  // maskDiv.setAttribute("style", style);
  setStyle(maskDiv, style);

  /** 创建弹出框 */
  var modalDiv = document.createElement("div");
  var innerStyle = "position: absolute; width: 600px; min-height: 560px;" +
    "left: 50%; top: 50%; margin-left: -300px; margin-top: -200px; text-align: center;" +
    "border-radius: 5px; background: #fff; padding: 28px 60px; z-index: 11;"
  // modalDiv.setAttribute("style", innerStyle);
  setStyle(modalDiv, innerStyle);
  modalDiv.setAttribute("id", "modalDiv");
  /** 为弹出框添加内容 */
  /** 添加首行标题 */
  var title = document.createElement("div");
  var titleStyle = "height: 26px; line-height: 26px; text-align: center; font-size: 18px;" +
    "font-weight: bold; color: #54657E; margin-bottom: 46px;"
  // title.setAttribute("style", titleStyle);
  setStyle(title, titleStyle);
  title.innerText = "超量原因";
  modalDiv.appendChild(title);
  /** 添加选择超量原因说明 */
  var subTitle = document.createElement("div");
  var subTitleStyle = "height: 20px; line-height: 20px; font-weight: 500; text-align: left;" +
    "font-size: 14px; color: #54657E; margin-bottom: 14px;"
  // subTitle.setAttribute("style", subTitleStyle);
  setStyle(subTitle, subTitleStyle);
  subTitle.innerText = "您输入的用血量超过建议用血量，请选择原因";
  modalDiv.appendChild(subTitle);
  /** 添加超量原因选择项 */
  var itemCon = document.createElement("div");
  var itemConStyle = "width: 540px; text-align: left; font-size: 0; margin-bottom: 24px;"
  // itemCon.setAttribute("style", itemConStyle);
  setStyle(itemCon, itemConStyle);
  for (var i = 0; i < reasonArr.length; i++) {
    var reasonItem = document.createElement("div");
    var reasonItemStyle = "display: inline-block; _zoom:1; *display:inline; width: 260px; height: 28px;" +
      "line-height: 28px; font-size: 14px; color: #54657E;";
    // reasonItem.setAttribute("style", reasonItemStyle);
    setStyle(reasonItem, reasonItemStyle);

    var checkbox = document.createElement("input");
    var checkboxStyle = "width: 14px; height: 14px; cursor: pointer; margin-right: 5px;";
    // checkbox.setAttribute("style", checkboxStyle);
    setStyle(checkbox, checkboxStyle);
    checkbox.setAttribute("id", reasonArr[i]["key"]);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("value", reasonArr[i]["value"]);
    reasonItem.appendChild(checkbox);

    var label = document.createElement("label");
    var labelStyle = "cursor: pointer;";
    label.setAttribute("for", reasonArr[i]["key"]);
    // label.setAttribute("style", labelStyle);
    setStyle(label, labelStyle);
    label.innerText = reasonArr[i]["value"];
    reasonItem.appendChild(label);
    itemCon.appendChild(reasonItem);
  }
  modalDiv.appendChild(itemCon);
  /** 添加分隔线 */
  var line = document.createElement("div");
  var lineStyle = "position: absolute; left: 0; top: 460px; right: 0;"
    + "border-top: 1px solid #ECEFF4;";
  // line.setAttribute("style", lineStyle);
  setStyle(line, lineStyle);
  modalDiv.appendChild(line);
  /** 添加其他原因title */
  var otherReasonTitle = document.createElement("div");
  // otherReasonTitle.setAttribute("style", subTitleStyle);
  setStyle(otherReasonTitle, subTitleStyle);
  otherReasonTitle.innerText = "其他原因";
  modalDiv.appendChild(otherReasonTitle);
  /** 添加其他原因输入框 */
  var otherReasonDiv = document.createElement("div");
  var otherReasonTxt = document.createElement("textarea");
  var otherReasonTxtStyle = "width: 100%; height: 70px; font-size: 13px; color: #54657E;" +
    "resize: none; border: 1px solid #C8D4E0; margin-bottom: 9px;";
  // otherReasonTxt.setAttribute("style", otherReasonTxtStyle);
  setStyle(otherReasonTxt, otherReasonTxtStyle);
  otherReasonTxt.setAttribute("id", "resonTxt");
  otherReasonDiv.appendChild(otherReasonTxt);
  modalDiv.appendChild(otherReasonDiv);
  /** 添加注意文本 */
  var noteInfo = document.createElement("div");
  var noteInfoStyle = "height: 20px; line-height: 20px; text-align: left; color: #6C72FF;" +
  "font-size: 14px;";
  // noteInfo.setAttribute("style", noteInfoStyle);
  setStyle(noteInfo, noteInfoStyle);
  noteInfo.innerText = "注意：点击取消或关闭按钮需要重新填写超量原因";
  modalDiv.appendChild(noteInfo);
  /** 添加确定和取消按钮 */
  var btnCon = document.createElement("div");
  var btnConStyle = "margin: 60px auto; width: 420px; height: 40px;";
  // btnCon.setAttribute("style", btnConStyle);
  setStyle(btnCon, btnConStyle);
  var confirmBtn = document.createElement("div");
  var btnStyle = "display: inline-block; _zoom:1;*display:inline; width: 188px; height: 40px; cursor: pointer;" +
    "line-height: 38px; color: #fff; font-size: 14px; font-weight: bold; text-align: center;";
  var leftBtnStyle = "margin-right: 40px; background: #6C72FF;";
  var rightBtnStyle = "background: #C1C3EB;";
  // confirmBtn.setAttribute("style", btnStyle + leftBtnStyle);
  setStyle(confirmBtn, btnStyle + leftBtnStyle);
  confirmBtn.setAttribute("id", "confirmBtn");
  confirmBtn.innerText = "确定";
  var cancelBtn = document.createElement("div");
  // cancelBtn.setAttribute("style", btnStyle + rightBtnStyle);
  setStyle(cancelBtn, btnStyle + rightBtnStyle);
  cancelBtn.setAttribute("id", "cancelBtn");
  cancelBtn.innerText = "取消";
  btnCon.appendChild(confirmBtn);
  btnCon.appendChild(cancelBtn);
  modalDiv.appendChild(btnCon);

  /** 将蒙层和弹出框插入DOM中 */
  document.body.appendChild(maskDiv);
  document.body.appendChild(modalDiv);

  /** 为确定和取消按钮绑定事件 */
  EventUtil.addHandler(confirmBtn, 'click', function() {
    var checkArr = [];
    var checkboxList = document.getElementsByTagName("input");
    for(var i = 0; i < checkboxList.length; i++) {
      if (checkboxList[i]['type'] === 'checkbox' && checkboxList[i]['checked']) {
        checkArr.push(checkboxList[i]['value']);
      }
    }
    var reasonTxt = document.getElementById("resonTxt");
    var otherReasonValue = reasonTxt.value;
    if (checkArr.length === 0 && !otherReasonValue) {
      alert('请至少选择一项超量原因或者填写其他原因！');
    } else {
      var maskDiv = document.getElementById('maskDiv');
      var modalDiv = document.getElementById('modalDiv');
      // 删除蒙层和弹出框
      document.body.removeChild(maskDiv);
      document.body.removeChild(modalDiv);
      var checkReason = checkArr.join('$$$');
      var result = otherReasonValue ? checkReason + '###' + otherReasonValue : checkReason;
      callBack(result);
    }
  });
  EventUtil.addHandler(cancelBtn, 'click', function() {
    var maskDiv = document.getElementById('maskDiv');
    var modalDiv = document.getElementById('modalDiv');
    // 删除蒙层和弹出框
    document.body.removeChild(maskDiv);
    document.body.removeChild(modalDiv);
  })
}