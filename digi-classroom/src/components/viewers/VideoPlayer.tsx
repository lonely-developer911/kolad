"use client"

import { useEffect, useRef } from 'react'

export function VideoPlayer({ blob }: { blob: Blob }) {
	const ref = useRef<HTMLVideoElement | null>(null)
	useEffect(() => {
		const url = URL.createObjectURL(blob)
		if (ref.current) ref.current.src = url
		return () => URL.revokeObjectURL(url)
	}, [blob])
	return (
		<video ref={ref} className="w-full rounded-2xl" controls controlsList="nodownload noplaybackrate" disablePictureInPicture />
	)
}