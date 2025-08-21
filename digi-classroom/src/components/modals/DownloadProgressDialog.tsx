"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useOfflineStore } from '@/store/offline'

export function DownloadProgressDialog() {
	const progress = useOfflineStore(s => s.progress)
	return (
		<Dialog open={!!progress} onOpenChange={() => {}}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Downloading {progress?.title}</DialogTitle>
				</DialogHeader>
				<div className="h-2 w-full rounded-full bg-muted">
					<div className="h-2 rounded-full bg-primary" style={{ width: `${progress?.progress ?? 0}%` }} />
				</div>
				<div className="text-right text-xs text-muted-foreground">{progress?.progress ?? 0}%</div>
			</DialogContent>
		</Dialog>
	)
}