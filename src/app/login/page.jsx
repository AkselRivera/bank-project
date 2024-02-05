import { Login } from '../../components/forms'

export const metadata = {
  title: 'Welcomre back!',
  description: 'Login to your account - Banks',
}

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center gap-8 items-center w-full h-screen">
      <h1 className="text-3xl font-bold">Welcome back!</h1>

      <Login />
    </div>
  )
}
