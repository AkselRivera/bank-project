export async function login({ email, password }) {
  try {
    const resp = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    return resp
  } catch (error) {
    return error
  }
}
export async function register(data) {
  try {
    const { name, email, password, password_confirmation } = data
    const resp = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        password,
        password_confirmation,
      }),
    })
    console.log(await resp.json())
    return resp
  } catch (error) {
    return error
  }
}

export async function logout() {
  try {
    const resp = await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return resp
  } catch (error) {
    return error
  }
}

export async function me(request = '') {
  try {
    const token = request ? request.cookies.get('access_token')?.value : ''

    const resp = await fetch('http://localhost:3000/api/auth/me', {
      credentials: 'include',
      headers: {
        Authorization: token,
      },
    })
    return resp
  } catch (error) {
    return error
  }
}
