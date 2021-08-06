const fetch = require('node-fetch')

const sleep = (timeout = 2000) => new Promise(resolve => {
  setTimeout(resolve, timeout)
})

async function getZhihuColunm(id) {
  await sleep(2000)
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  return await response.json()
}

const showColumnInfo = async () => {
  console.time('showColumnInfo')
  // const weeklyPromise = getZhihuColunm('feweekly')
  // const toolingtipsPromise = getZhihuColunm('toolingtips')

  const weekly = await getZhihuColunm('feweekly')
  const toolingtips = await getZhihuColunm('toolingtips')

  console.log(`NAME: ${weekly.title}`)
  console.log(`INTRO: ${weekly.intro}`)

  console.log(`NAME: ${toolingtips.title}`)
  console.log(`INTRO: ${toolingtips.intro}`)
  console.timeEnd('showColumnInfo')
}

showColumnInfo()
