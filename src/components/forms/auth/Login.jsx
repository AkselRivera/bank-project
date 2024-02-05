'use client'

import { useForm } from 'react-hook-form'
import { FormInput } from '../../shared/'
import { Button, Toast } from 'flowbite-react'
import Link from 'next/link'
import { HiX } from 'react-icons/hi'

export function Login() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }
  return (
    <form
      className="flex w-full max-w-2xl p-8 py-12 flex-col gap-4 rounded shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* {!isSubmitSuccessful && (
        <Toast className="absolute top-0 right-0 m-4">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
            <HiX className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">Item has been deleted.</div>
          <Toast.Toggle />
        </Toast>
      )} */}
      <FormInput
        register={register}
        validations={{ required: 'Email is required' }}
        errors={errors}
        label="Email"
        name="email"
        type="email"
        placeholder="email@email.com"
      />
      <FormInput
        register={register}
        validations={{ required: 'Password is required' }}
        errors={errors}
        label="Password"
        name="password"
        type="password"
        placeholder="* * * * * * *"
      />

      <div className="flex items-center gap-2">
        Don't have an account?
        <Link
          href="/register"
          className="text-blue-600 hover:underline dark:text-blue-500"
        >
          Sign up
        </Link>
      </div>
      <Button
        className="ease-in-out delay-300 transition-all duration-300 font-bold"
        gradientDuoTone="purpleToBlue"
        type="submit"
      >
        Sign in
      </Button>
    </form>
  )
}
