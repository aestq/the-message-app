import { Component, type ErrorInfo, type ReactNode } from 'react'
import { PageError } from '@/widgets/PageError'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  componentDidCatch (error: Error, info: ErrorInfo) {
    console.log(error, info)
  }

  render () {
    const { children } = this.props
    const { hasError } = this.state

    if (hasError) {
      return <PageError />
    }

    return children
  }
}
