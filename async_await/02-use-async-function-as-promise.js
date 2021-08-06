const fetch = require('node-fetch')

async function getZhihuColunm(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  return await response.json()
}

getZhihuColunm('feweekly')
  .then(column => {
    console.log(`NAME: ${column.title}`)
    console.log(`INTRO: ${column.intro}`)
  })
