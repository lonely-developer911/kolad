import { create } from 'zustand'
import { listDownloads, deleteDownload, saveDownload, encryptBlob } from '@/lib/drm'
import type { DownloadItem } from '@/lib/db'

export type DownloadProgress = { id: string; title: string; progress: number; status: 'idle' | 'downloading' | 'done' | 'error' }

type OfflineState = {
	items: DownloadItem[]
	loading: boolean
	progress: DownloadProgress | null
	refresh: () => Promise<void>
	remove: (id: string) => Promise<void>
	downloadFromSource: (opts: { id: string; title: string; type: 'video' | 'pdf' | 'slides'; mimeType: string; source: Blob }) => Promise<void>
}

export const useOfflineStore = create<OfflineState>((set, get) => ({
	items: [],
	loading: false,
	progress: null,
	refresh: async () => {
		set({ loading: true })
		const items = await listDownloads()
		set({ items, loading: false })
	},
	remove: async (id: string) => {
		await deleteDownload(id)
		await get().refresh()
	},
	downloadFromSource: async ({ id, title, type, mimeType, source }) => {
		set({ progress: { id, title, progress: 0, status: 'downloading' } })
		// Simulate progressive download; encrypt whole blob at end (demo)
		for (let i = 1; i <= 5; i++) {
			await new Promise(r => setTimeout(r, 200))
			set({ progress: { id, title, progress: i * 20, status: 'downloading' } })
		}
		const { iv, ciphertext } = await encryptBlob(source)
		await saveDownload({ id, title, type, mimeType, bytes: ciphertext.byteLength, iv, ciphertext })
		await get().refresh()
		set({ progress: { id, title, progress: 100, status: 'done' } })
		setTimeout(() => set({ progress: null }), 800)
	},
}))