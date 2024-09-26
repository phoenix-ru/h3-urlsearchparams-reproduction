export default defineEventHandler(async (event) => {
  const header = getRequestHeader(event, 'Content-Type')
  console.log({ header })

  // const body = header === 'application/x-www-form-urlencoded'
  //   ? await readFormData(event)
  //   : header === 'multipart/form-data'
  //     ? await readMultipartFormData(event)
  //     : await readBody(event)

  const body = await readBody(event)
  console.log(body)

  return {
    ok: true,
    passedBody: body
  }
})
