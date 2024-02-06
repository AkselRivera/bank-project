export async function createAccountLink(data) {
  try {
    const body = JSON.stringify(data)

    const resp = await fetch(`/api/accounts/${data?.account}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })

    // console.log(await resp.json())
    return resp
  } catch (error) {
    return error
  }
}
