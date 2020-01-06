# folder-info
Get the directory structure under the specified path (获取指定路径下的目录结构)

## Installation
```bash
npm install folder-info --save
```

## Usage
```js
const folder = require('folder-info')

/**
 * data
 *    |
 *    tool
 *       |
 *       ---find.js
 *       |
 *       ---do.js
 *    addr
 *       |
 *       ---east.js
 *       |
 *       ---west.js
 * 
*/

let struct = folder.getStructure('./data')

/*
[
  {
    "type": "directory",
    "name": "addr",
    "child": [
      {
        "type": "file",
        "name": "east.js",
        "sizeByte": 279982
      },
      {
        "type": "file",
        "name": "west.js",
        "sizeByte": 0
      }
    ]
  },
  {
    "type": "directory",
    "name": "tool",
    "child": [
      {
        "type": "file",
        "name": "do.js",
        "sizeByte": 0
      },
      {
        "type": "file",
        "name": "find.js",
        "sizeByte": 0
      }
    ]
  }
]
*/

let files = folder.getAllFile('./data')
/*
  [
    "data\\addr\\east.js",
    "data\\addr\\west.js",
    "data\\tool\\do.js",
    "data\\tool\\find.js"
  ] 
*/

```