const fetch = require('node-fetch')

const getZhihuColunm = async (id) => {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
  const response = await fetch(url)
  return await response.json()
}

class APIClient {
  async getColumn(id) {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    const response = await fetch(url)
    return await response.json()
  }
}

(async () => {
  const client = new APIClient()
  const column = await client.getColumn('feweekly')
  // const column = await getZhihuColunm('feweekly')
  console.log(`NAME: ${column.title}`)
  console.log(`INTRO: ${column.intro}`)
})()