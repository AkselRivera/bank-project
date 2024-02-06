'use client'

import { useForm } from 'react-hook-form'
import { FormInput } from '../../shared/'
import { Button, Toast } from 'flowbite-react'
import { createAccountLink } from '../../../actions/account'
import { useState } from 'react'
import { HiX } from 'react-icons/hi'
import { useParams, useRouter } from 'next/navigation'

import { AiOutlineLoading } from 'react-icons/ai'

export function AccountLink({ form_fields }) {
  const router = useRouter()
  const { bank_id } = useParams()

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [invalid, setInvalid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const onSubmit = async (data) => {
    setLoading(true)
    setInvalid(false)
    data.account = bank_id
    const response = await createAccountLink(data)
    if (!response.ok) {
      setInvalid(true)

      const data = await response.json()
      console.log('data', data)
      setMessage(data?.message)

      setLoading(false)
    } else {
      setLoading(false)
      reset()
      console.log('Link created')
      location.reload()
      // router.replace(`/private/banks/${bank_id}`)
    }
  }
  return (
    <form
      className="flex w-full max-w-2xl p-8 py-12 flex-col gap-4 max-h-[80vh] overflow-auto"
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

      {form_fields?.map((field) => (
        <FormInput
          key={field.name}
          {...field}
          validations={{
            pattern: {
              value: field?.validation,
              message: field?.validation_message,
            },
          }}
          register={register}
          errors={errors}
        />
      ))}

      <Button
        className="ease-in-out delay-300 transition-all duration-300 font-bold"
        gradientDuoTone="purpleToBlue"
        type="submit"
        isProcessing={loading}
        disabled={loading}
        processingSpinner={<></>}
      >
        {loading ? (
          <AiOutlineLoading className="animate-spin" />
        ) : (
          'Create a new account link'
        )}
      </Button>
    </form>
  )
}
