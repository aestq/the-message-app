import { memo } from 'react'
import { Navbar } from '@/widgets'

export const EntryPage = memo(() => {
  return (
    <>
      <Navbar />
    </>
  )
})

EntryPage.displayName = 'EntryPage'
