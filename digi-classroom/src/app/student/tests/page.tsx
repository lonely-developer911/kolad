"use client"

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function StudentTestsPage() {
	const [taking, setTaking] = useState(false)
	const [timeLeft, setTimeLeft] = useState(60)
	const containerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!taking) return
		const id = setInterval(() => setTimeLeft(t => Math.max(0, t - 1)), 1000)
		return () => clearInterval(id)
	}, [taking])

	async function enterFullscreen() {
		if (containerRef.current?.requestFullscreen) await containerRef.current.requestFullscreen()
		setTaking(true)
	}

	return (
		<div className="space-y-4" ref={containerRef}>
			<h2 className="text-xl font-semibold">Tests & Exams</h2>
			{!taking ? (
				<div className="rounded-2xl border p-4">
					<div className="mb-2 font-semibold">Math CA Test</div>
					<Button onClick={enterFullscreen}>Start (60s)</Button>
				</div>
			) : (
				<div className="rounded-2xl border p-4">
					<div className="mb-2 flex items-center justify-between">
						<div className="font-semibold">Math CA Test</div>
						<div className="rounded-xl bg-muted px-3 py-1 text-sm">{timeLeft}s</div>
					</div>
					<div className="space-y-2 text-sm">
						<div>Q1. 1/2 + 1/4 = ?</div>
						<div className="flex gap-2">
							<Button size="sm" variant="outline">A) 1/6</Button>
							<Button size="sm" variant="outline">B) 3/4</Button>
							<Button size="sm" variant="outline">C) 2/6</Button>
						</div>
					</div>
					<div className="mt-4">
						<Button>Submit</Button>
					</div>
				</div>
			)}
		</div>
	)
}