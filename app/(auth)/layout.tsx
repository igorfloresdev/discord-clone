import React from 'react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className='bg-red-500 h-full'>{children}</div>
}
