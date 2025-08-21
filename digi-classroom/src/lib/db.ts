import { openDB, type IDBPDatabase } from 'idb'

export type DownloadItem = {
	id: string
	title: string
	type: 'video' | 'pdf' | 'slides'
	mimeType: string
	bytes: number
	iv: Uint8Array
	ciphertext: Uint8Array
	createdAt: number
}

export type DBSchema = {
	downloads: DownloadItem
	keys: { id: string; jwk: JsonWebKey }
}

let dbPromise: Promise<IDBPDatabase<any>> | null = null

export function getDb() {
	if (!dbPromise) {
		dbPromise = openDB<any>('digi-classroom', 1, {
			upgrade(db) {
				if (!db.objectStoreNames.contains('downloads')) {
					db.createObjectStore('downloads', { keyPath: 'id' })
				}
				if (!db.objectStoreNames.contains('keys')) {
					db.createObjectStore('keys', { keyPath: 'id' })
				}
			},
		})
	}
	return dbPromise
}