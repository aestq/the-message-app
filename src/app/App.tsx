import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { classNames, useTheme } from '@/shared/lib'
import { HStack, VStack } from '@/shared/ui'
import { AppRouter } from './providers/AppRouter'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <ThemeSwitcher />
      <HStack as='header' gap='32'>
        <div>s</div>
        <div>a</div>
      </HStack>
      <VStack align='center'>
        <div>d</div>
        <div>f</div>
      </VStack>
      <AppRouter />
    </div>
  )
}
