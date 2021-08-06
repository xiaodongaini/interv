var test1 = '<a><element>>xxxxx</element></a>'
var reg = /(<\w+>\w*)([><])(\w*<\/\w+>)/g
var a = test1.replace(reg, function(match, group1, group2, group3){
  if (group2 == '>') {
    return group1 + '&gt;' + group3;
  } else {
    return group1 + '&lt;' + group3;
  }
})
