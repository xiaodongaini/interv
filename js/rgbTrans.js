// rgb转16进制
function transTo16(str) {
  var aColor = str.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
  var strHex = "#";
  for (var i=0; i<aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      if (hex === "0") {
          hex += hex;    
      }
      strHex += hex;
  }
  return strHex;
}
// rgba 转16进制
function hexify(color) {
  var values = color
    .replace(/rgba?\(/, '')
    .replace(/\)/, '')
    .replace(/[\s+]/g, '')
    .split(',');
  var a = parseFloat(values[3] || 1),
      r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
      g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
      b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
  return "#" +
    ("0" + r.toString(16)).slice(-2) +
    ("0" + g.toString(16)).slice(-2) +
    ("0" + b.toString(16)).slice(-2);
}

var myHex = hexify('rgba(255,232,186,0.4)'); // "#f5faf3"

console.log(myHex);

// 16进制转rgb
//hex -> rgb
function hexToRgb(hex) {
  return 'rgb(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5))
          + ',' + parseInt('0x' + hex.slice(5, 7)) + ')';
}

// 16进制转rgba
//hex -> rgba
function hexToRgba(hex, opacity) {
  return 'rgba(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5)) + ','
          + parseInt('0x' + hex.slice(5, 7)) + ',' + opacity + ')';
}

var sHex = '#ff008b';
console.log('十六进制格式：', sHex);
console.log('RGB格式：', hexToRgb(sHex));
console.log('RGBA格式：', hexToRgba(sHex, 0.5));