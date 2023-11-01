import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutesPath } from '@/shared/consts'
import { Button, Text, VStack } from '@/shared/ui'
import cls from './NotFoundPage.module.scss'

export const NotFoundPage = memo(() => {
  const navigate = useNavigate()

  const onClickToBack = () => {
    navigate(RoutesPath.HOME)
  }

  return (
    <VStack
      className={cls.NotFoundPage}
      align='center'
      justify='center'
    >
      <Text size='xl' title>
        404
      </Text>
      <Text size='l'>
        Страница не найдена
      </Text>
      <Button
        className={cls.button}
        theme='primary'
        onClick={onClickToBack}
      >
        Вернуться назад
      </Button>
    </VStack>
  )
})

NotFoundPage.displayName = 'NotFoundPage'
