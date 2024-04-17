/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // 避免汙染原始資料
  var simplifiedPath = [];

  // 將字串中的複數/，替換為單個/
  path = path.replace(/\/+/g, '/')
  // console.log('path', path);

  // 以/為基準，將字串分割至陣列裡
  var parts = path.split('/');
  // console.log('parts', parts);

  for (i = 0; i < parts.length; i++) {
    var part = parts[i];
    // 過濾陣列中的.及空字串
    if (part === '.' || part == '') {
      continue
    }

    // 當陣列中的單位不是..時，將其放入simplifiedPath
    // 若為..則使用pop()方法刪除最後一個元素，跳回上一層
    if (part !== '..') {
      simplifiedPath.push(part);
    } else {
      simplifiedPath.pop();
    }
  }

  return '/' + simplifiedPath.join('/');
}

/** Test Case
 * "/home/"                => "/home"
 * "/../"                  => "/"
 * "/home//foo/"           => "/home/foo"
 * "/a/./b/../../c/"       => "/c"
 * "/a/../../b/../c//.//"  => "/c"
 * "/a//b////c/d//././/.." => "/a/b/c"
 */
var path = "/a//b////c/d//././/.."
simplifyPath(path)
