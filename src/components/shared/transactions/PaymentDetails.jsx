'use client'

export function PaymentDetails({ category, data }) {
  const {
    monthly_payment,
    cutting_date,
    minimum_payment,
    next_payment_date,
    no_interest_payment,
  } = data

  if (category === 'CREDIT_CARD')
    return (
      <div className="w-full flex flex-col">
        <div className="flex justify-between border-0 border-b border-gray-200 dark:border-gray-700 mb-2 text-sm font-medium">
          <span className="text-xs font-normal mb-2 text-gray-900/70 dark:text-white/70 ">
            Minimun Payment:
          </span>
          <span className="text-xs font-normal mb-2 text-gray-900/70 dark:text-white/70 ">
            $ {(minimum_payment || 0).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between border-0 border-b border-gray-200 dark:border-gray-700 mb-2 text-sm font-medium">
          <span className="text-xs font-normal mb-2 text-gray-900/70 dark:text-white/70 ">
            Non Interest payment:
          </span>
          <span className="text-xs font-normal mb-2 text-gray-900/70 dark:text-white/70 ">
            $ {(no_interest_payment || 0).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between border-0 border-b border-gray-200 dark:border-gray-700 mb-2 text-sm font-medium">
          <span className="text-xs font-normal mb-2 text-gray-900/70 dark:text-white/70 ">
            Cutting date:
          </span>
          <span className="text-xs font-normal mb-2 text-gray-900/70 dark:text-white/70 ">
            {cutting_date}
          </span>
        </div>
        <div className="flex justify-between border-0 border-b border-gray-200 dark:border-gray-700 mb-2 text-sm font-medium">
          <span className="text-xs font-normal mb-2 text-gray-900/70 dark:text-white/70 ">
            Next payment date:
          </span>
          <span className="text-xs font-normal mb-2 text-gray-900/70 dark:text-white/70 ">
            {next_payment_date}
          </span>
        </div>
      </div>
    )
  if (category === 'LOAN_ACCOUNT')
    return (
      <div className="w-full flex flex-col">
        <div className="flex justify-between border-0 border-b border-gray-200 dark:border-gray-700 mb-2 text-sm font-medium">
          <span className="text-xs font-normal mb-2 text-gray-900/70 dark:text-white/70 ">
            Monthly Payment:
          </span>
          <span className="text-xs font-normal mb-2 text-gray-900/70 dark:text-white/70 ">
            $ {(monthly_payment || 0).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between border-0 border-b border-gray-200 dark:border-gray-700 mb-2 text-sm font-medium">
          <span className="text-xs font-normal mb-2 text-gray-900/70 dark:text-white/70 ">
            Non Interest payment:
          </span>
          <span className="text-xs font-normal mb-2 text-gray-900/70 dark:text-white/70 ">
            $ {(no_interest_payment || 0).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between border-0 border-b border-gray-200 dark:border-gray-700 mb-2 text-sm font-medium">
          <span className="text-xs font-normal mb-2 text-gray-900/70 dark:text-white/70 ">
            Cutting date:
          </span>
          <span className="text-xs font-normal mb-2 text-gray-900/70 dark:text-white/70 ">
            {cutting_date}
          </span>
        </div>
        <div className="flex justify-between border-0 border-b border-gray-200 dark:border-gray-700 mb-2 text-sm font-medium">
          <span className="text-xs font-normal mb-2 text-gray-900/70 dark:text-white/70 ">
            Next payment date:
          </span>
          <span className="text-xs font-normal mb-2 text-gray-900/70 dark:text-white/70 ">
            {next_payment_date}
          </span>
        </div>
      </div>
    )
  else return null
}

// TODO: credit_limit es el credito que esta disponible de la tarjeta al parecer esta en datos de la tarjeta, cambiarlo en vez de usar available y current
