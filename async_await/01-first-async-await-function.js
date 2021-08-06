const fetch = require('node-fetch')

// function getZhihuColunm(id) {
//   const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
//   fetch(url)
//     .then(response => response.json())
//     .then(column => {
//       console.log(`NAME: ${column.title}`)
//       console.log(`INTRO: ${column.intro}`)
//     })
// }

async function getZhihuColunm(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  const column = await response.json()
  console.log(`NAME: ${column.title}`)
  console.log(`INTRO: ${column.intro}`)
}

getZhihuColunm('feweekly')