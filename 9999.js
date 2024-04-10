var test = function (s) {
  var newMap = new Map()
  var newSet = new Set()

  for (i = 0; i < s.length; i++) {
    let c = s[i]
    newMap.set(c, i);
    newSet.add(c);
  }
  console.log('newMap', newMap, typeof (newMap));
  console.log('newSet', newSet, typeof (newSet));
}

var s = "cbacdcbc"
test(s)

/** 
 * Map()可以設置鍵值對(key value pair)
 * newMap Map(4) = { 'c' => 7, 'b' => 6, 'a' => 2, 'd' => 4 }
 * 
 * Set()只保留key
 * newSet Set(4) = { 'c', 'b', 'a', 'd' }
 * 
 * 兩者都是object(物件)
 * 兩者都會過濾重複的key
 */