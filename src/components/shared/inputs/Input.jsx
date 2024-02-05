'use client'
import { Label } from 'flowbite-react'
import { useFormContext } from 'react-hook-form'

export function FormInput({
  label,
  register,
  validations = {},
  errors,
  name,
  placeholder,
  required,
  type = 'text',
}) {
  return (
    <div className="w-full mb-3">
      <Label htmlFor={name} value={label} className="mb-2 block" />
      <input
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
        {...register(name, validations)}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />

      {errors[name] && (
        <span className="text-red-500 text-xs pt-1 block">
          {errors[name]?.message}
        </span>
      )}
    </div>
  )
}
