import { useEffect, useState } from 'react'
import { Button } from '@/shared/ui'

export const ButtonError = () => {
  const [isError, setIsError] = useState(false)

  const onClick = () => {
    setIsError(true)
  }

  useEffect(() => {
    if(isError) {
      throw new Error('Button Error')
    }
  }, [isError])

  return (
    <Button
      onClick={onClick}
      theme='primary'
    >
      Throw error
    </Button>
  )
}
