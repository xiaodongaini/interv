// ab-cd-ef=》ab-Cd-Ef
'ab-cd-ef'.replace(/(-)(\w)(\w)/g, function(match, group1, group2, group3, 
index, origin){
  console.log('match===========', match)
  return group1 + group2.toUpperCase() + group3;
})

var a = 'lite_haokan/5.9.3.10 (Baidu; P1 8.1.0) lite_haokan/5.9.3.10 (Baidu; P1 8.1.0)/oviv_72_0.1.8_AC8181V/1022517a/A57374193C682CA85DEFA5BF9BBC4A58%7C0/1/5.9.3.10/509031/1'
var b = a.replace(/^(lite_haokan)(.*)(lite_haokan.*)/g, function(match, group1, group2, group3, 
  index, origin){
    console.log('match===========', match)
    return group3;
  })
console.log(b)