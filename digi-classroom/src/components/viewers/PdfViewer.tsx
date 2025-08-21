"use client"

import { useEffect, useMemo, useState } from 'react'

export function PdfViewer({ blob }: { blob: Blob }) {
	const [url, setUrl] = useState<string | null>(null)
	useEffect(() => {
		const u = URL.createObjectURL(blob)
		setUrl(u)
		return () => URL.revokeObjectURL(u)
	}, [blob])
	if (!url) return null
	return (
		<div className="mx-auto w-full max-w-4xl">
			<iframe src={url} className="h-[80vh] w-full rounded-2xl border" title="PDF" />
		</div>
	)
}