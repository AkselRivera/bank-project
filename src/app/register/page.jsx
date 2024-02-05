import { Register } from '../../components/forms'

export const metadata = {
  title: 'Register to Banks',
  description: 'Become a member! - Banks',
}

export default function RegisterPage() {
  return (
    <div className="flex flex-col justify-center gap-8 items-center w-full h-screen">
      <h1 className="text-3xl font-bold">Become a member!</h1>

      <Register />
    </div>
  )
}
