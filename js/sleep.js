function sleep(time) {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(true)
    }, time * 1000)
  })
}

sleep(2).then(function() {
  console.log('打印休眠之后的结果！')
})

async function test() {
  console.log('休眠之前')
  await sleep(3)
  console.log('休眠之后')
}

test()
