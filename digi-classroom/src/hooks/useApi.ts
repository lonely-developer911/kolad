"use client"

import * as React from 'react'

type FetchOptions<T> = {
	url: string
	initialData?: T
	deps?: React.DependencyList
}

export function useFetch<T>({ url, initialData, deps = [] }: FetchOptions<T>) {
	const [data, setData] = React.useState<T | undefined>(initialData)
	const [loading, setLoading] = React.useState<boolean>(false)
	const [error, setError] = React.useState<string | null>(null)

	React.useEffect(() => {
		let isCancelled = false
		setLoading(true)
		setError(null)
		const timeout = setTimeout(() => {
			if (!isCancelled) {
				// Replace with real fetch
				setData(initialData)
				setLoading(false)
			}
		}, 500)
		return () => {
			isCancelled = true
			clearTimeout(timeout)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps)

	return { data, loading, error, setData }
}

type PostOptions<TBody, TResponse> = {
	url: string
	onSuccess?: (data: TResponse) => void
	onError?: (err: string) => void
}

export function usePost<TBody, TResponse>({ url, onSuccess, onError }: PostOptions<TBody, TResponse>) {
	const [loading, setLoading] = React.useState(false)
	const [error, setError] = React.useState<string | null>(null)

	const post = React.useCallback(async (body: TBody) => {
		setLoading(true)
		setError(null)
		try {
			await new Promise(r => setTimeout(r, 600))
			const response = {} as TResponse
			onSuccess?.(response)
			return response
		} catch (e) {
			const msg = 'Network error'
			setError(msg)
			onError?.(msg)
			throw e
		} finally {
			setLoading(false)
		}
	}, [onError, onSuccess])

	return { post, loading, error }
}