const fs = require('fs')
const path = require('path')

var getFolderInfo = function (dir, fileList = []) {
  var list = fs.readdirSync(dir)
  list.forEach(function (filename) {
    let filePath = path.join(dir, filename)
    var stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      let obj = { type: 'directory', name: filename, child: [] }
      fileList.push(obj)
      getFolderInfo(filePath, obj.child)
    } else {
      fileList.push({ type: 'file', name: filename, sizeByte: stat.size })
    }
  })
  return fileList
}

var getFolderAllFile = function (dir, results = []) {
  var list = fs.readdirSync(dir)
  list.forEach(function (file) {
    file = path.join(dir, file)
    var stat = fs.statSync(file)
    if (stat && stat.isDirectory()) results = results.concat(getFolderAllFile(file))
    else results.push(file)
  })
  return results
}

module.exports = {
  getStructure: function (dir) {
    return getFolderInfo(dir, [])
  },
  getAllFile: function (dir) {
    return getFolderAllFile(dir, [])
  }
}
