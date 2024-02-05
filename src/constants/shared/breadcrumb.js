import { HiHome } from 'react-icons/hi'

export const BREADCRUMB = {
  BANK_DETAILS: (bank_name) => [
    {
      title: 'Banks',
      href: '/private/banks',
      icon: HiHome,
    },
    {
      title: `${bank_name} details`,
      href: '#',
      icon: false,
    },
  ],

  TRANSACTIONS_DETAILS: (bank_id, bank_name, account_name) => [
    {
      title: 'Banks',
      href: '/private/banks',
      icon: HiHome,
    },
    {
      title: `${bank_name} details`,
      href: `/private/banks/${bank_id}`,
      icon: false,
    },
    {
      title: `${account_name} details`,
      href: '#',
      icon: false,
    },
  ],
}
