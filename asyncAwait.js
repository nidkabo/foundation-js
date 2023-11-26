const fetchData = () => Promise.reject('data not found')

const getData = async () => {
  try {
    const res = await fetchData()

    console.log('Hi')
    console.log(res)
  } catch (err) {
    console.log(err)
  } finally {
    console.log('done')
  }
}

// getData()

// then and catch, if we need to get data1 to use in fetchData2
const fetchData1 = () => Promise.resolve('data1')
const fetchData2 = () => Promise.resolve('data2')
const fetchData3 = () => Promise.resolve('data3')

/* fetchData1()
  .then((res) => {
    console.log(res)
    fetchData2()
      .then((res) => {
        console.log(res)
        fetchData3()
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  })
  .catch((err) => {
    console.log(err)
  }) */

// async/await solve the callback hell
const getMultipleData = async () => {
  try {
    const result = await fetchData1()
    const result2 = await fetchData2()
    const result3 = await fetchData3()

    console.log(result)
    console.log(result2)
    console.log(result3)
  } catch (err) {
    console.log(err)
  }
}

getMultipleData()
