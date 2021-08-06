const fetch = require('node-fetch')
const bluebird = require('bluebird')

async function getZhihuColunm(id) {
  await bluebird.delay(2000)
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  return await response.json()
}

const showColumnInfo = async () => {
  console.time('showColumnInfo')

  const names = ['feweekly', 'toolingtips']
  const promises = names.map( x => getZhihuColunm(x))
  for (const promise of promises) {
    const column = await promise
    console.log(`NAME: ${column.title}`)
    console.log(`INTRO: ${column.intro}`)
  }

  console.timeEnd('showColumnInfo')
}

showColumnInfo()
