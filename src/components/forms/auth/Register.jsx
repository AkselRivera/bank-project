'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormInput } from '../../shared'
import { Button, Toast } from 'flowbite-react'
import Link from 'next/link'
import { register as handleRegister } from '../../../actions/auth'
import { HiX } from 'react-icons/hi'
import { useRouter } from 'next/navigation'

export function Register() {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const router = useRouter()

  const [invalid, setInvalid] = useState(false)
  const [message, setMessage] = useState('')

  let password = watch('passwordRegister')
  const onSubmit = async (data) => {
    const response = await handleRegister({
      name: data.nameRegister,
      email: data.emailRegister,
      password: data.passwordRegister,
      password_confirmation: data.password_confirmationRegister,
    })
    if (!response.ok) {
      setInvalid(true)
      const data = await response.json()
      setMessage(data?.message)
    } else {
      router.replace('/')
      reset()
    }
  }

  return (
    <form
      className="flex w-full max-w-2xl p-8 py-12 flex-col gap-4 rounded shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      {invalid && (
        <Toast className="absolute top-0 right-0 m-4">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
            <HiX className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">{message}</div>
          <Toast.Toggle />
        </Toast>
      )}

      <FormInput
        register={register}
        validations={{
          required: 'Full name is required',
          minLength: {
            value: 6,
            message: 'Name must be at least 6 characters',
          },
        }}
        errors={errors}
        label="Full name"
        name="nameRegister"
        type="text"
        placeholder="John Doe"
      />
      <FormInput
        register={register}
        validations={{ required: 'Email is required' }}
        errors={errors}
        label="Email"
        name="emailRegister"
        type="email"
        placeholder="email@email.com"
      />
      <FormInput
        register={register}
        validations={{ required: 'Password is required' }}
        errors={errors}
        label="Password"
        name="passwordRegister"
        type="password"
        placeholder="* * * * * * *"
      />
      <FormInput
        register={register}
        validations={{
          required: 'Password confirmation is required',
          validate: {
            match: (value) => value === password || "Passwords don't match",
          },
        }}
        errors={errors}
        label="Password"
        name="password_confirmationRegister"
        type="password"
        placeholder="* * * * * * *"
      />

      <div className="flex items-center gap-2">
        Already have an account?
        <Link
          href="/login"
          className="text-blue-600 hover:underline dark:text-blue-500"
        >
          Sign in
        </Link>
      </div>
      <Button
        className="ease-in-out delay-300 transition-all duration-300 font-bold"
        gradientDuoTone="purpleToBlue"
        type="submit"
      >
        Sign up
      </Button>
    </form>
  )
}
