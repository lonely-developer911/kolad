"use client"

import { useEffect, useState } from 'react'
import { useOfflineStore } from '@/store/offline'
import { Button } from '@/components/ui/button'
import { ConfirmDialog } from '@/components/modals/ConfirmDialog'
import { decryptToBlob, getDownload } from '@/lib/drm'
import { VideoPlayer } from '@/components/viewers/VideoPlayer'
import { PdfViewer } from '@/components/viewers/PdfViewer'

export default function OfflineLibraryPage() {
	const { items, refresh, remove } = useOfflineStore()
	const [confirm, setConfirm] = useState<{ open: boolean; id?: string }>({ open: false })
	const [viewer, setViewer] = useState<{ type: 'video' | 'pdf' | null; blob?: Blob; title?: string }>({ type: null })
	useEffect(() => { refresh() }, [refresh])

	async function openItem(id: string) {
		const item = items.find(i => i.id === id)
		if (!item) return
		const blob = await decryptToBlob(item.iv, item.ciphertext, item.mimeType)
		setViewer({ type: item.type === 'video' ? 'video' : 'pdf', blob, title: item.title })
	}

	return (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold">Offline Library</h2>
			{items.length === 0 && <div className="text-sm text-muted-foreground">No downloads yet.</div>}
			<div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
				{items.map(item => (
					<div key={item.id} className="rounded-2xl border p-4">
						<div className="font-semibold">{item.title}</div>
						<div className="mt-2 text-xs text-muted-foreground">{Math.round(item.bytes/1024)} KB</div>
						<div className="mt-2 flex gap-2">
							<Button size="sm" onClick={() => openItem(item.id)}>Open</Button>
							<Button size="sm" variant="destructive" onClick={() => setConfirm({ open: true, id: item.id })}>Delete</Button>
						</div>
					</div>
				))}
			</div>
			{viewer.type && (
				<div className="rounded-2xl border p-4">
					<div className="mb-2 font-semibold">{viewer.title}</div>
					{viewer.type === 'video' && viewer.blob && <VideoPlayer blob={viewer.blob} />}
					{viewer.type === 'pdf' && viewer.blob && <PdfViewer blob={viewer.blob} />}
					<div className="mt-2 text-xs text-muted-foreground">Files are protected and viewable only inside the app.</div>
				</div>
			)}
			<ConfirmDialog
				open={confirm.open}
				onOpenChange={o => setConfirm({ open: o, id: confirm.id })}
				title="Delete download?"
				description="This will remove the protected file from offline storage."
				onConfirm={async () => { if (confirm.id) await remove(confirm.id) }}
			/>
		</div>
	)
}