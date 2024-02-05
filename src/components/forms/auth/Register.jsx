'use client'

import { useForm } from 'react-hook-form'
import { FormInput } from '../../shared'
import { Button } from 'flowbite-react'
import Link from 'next/link'

export function Register() {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  let password = watch('passwordRegister')
  const onSubmit = (data) => {
    console.log(data)
    reset()
  }
  return (
    <form
      className="flex w-full max-w-2xl p-8 py-12 flex-col gap-4 rounded shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
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
