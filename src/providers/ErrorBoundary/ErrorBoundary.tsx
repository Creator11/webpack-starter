import PageError from '@/components/PageError/PageError'
import React, { ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
	children: ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean
}

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError() {
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Error caught by ErrorBoundary:', error, errorInfo)
	}

	render() {
		const { hasError } = this.state
		const { children } = this.props
		if (hasError) {
			return <PageError />
		}

		return children
	}
}

export default ErrorBoundary
