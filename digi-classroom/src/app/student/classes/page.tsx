"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ConfirmDialog } from '@/components/modals/ConfirmDialog'
import { DownloadProgressDialog } from '@/components/modals/DownloadProgressDialog'
import { useOfflineStore } from '@/store/offline'

const demoVideoBlob = new Blob([new Uint8Array([1,2,3,4,5])], { type: 'video/mp4' })
const demoPdfBlob = new Blob([new Uint8Array([5,4,3,2,1])], { type: 'application/pdf' })

export default function StudentClassesPage() {
	const [confirmOpen, setConfirmOpen] = useState(false)
	const [selectedLesson, setSelectedLesson] = useState<{ id: string; title: string } | null>(null)
	const download = useOfflineStore(s => s.downloadFromSource)
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold">My Classes</h2>
			<div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
				{[
					{ id: 'l1', title: 'Mathematics - Fractions', type: 'video' as const, mime: 'video/mp4' },
					{ id: 'l2', title: 'English - Nouns (PDF)', type: 'pdf' as const, mime: 'application/pdf' },
				].map(item => (
					<div key={item.id} className="rounded-2xl border p-4">
						<div className="font-semibold">{item.title}</div>
						<div className="mt-2 flex gap-2">
							<Button size="sm" onClick={() => download({ id: item.id, title: item.title, type: item.type, mimeType: item.mime, source: item.type === 'video' ? demoVideoBlob : demoPdfBlob })}>Download</Button>
							<Button size="sm" variant="outline" onClick={() => { setSelectedLesson(item); setConfirmOpen(true) }}>Mark completed</Button>
						</div>
					</div>
				))}
			</div>
			<ConfirmDialog open={confirmOpen} onOpenChange={setConfirmOpen} title="Mark as completed" description={selectedLesson?.title} onConfirm={() => {}} />
			<DownloadProgressDialog />
		</div>
	)
}