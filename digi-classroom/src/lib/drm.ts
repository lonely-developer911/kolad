import { getDb, type DownloadItem } from '@/lib/db'

const MASTER_KEY_ID = 'master'

async function getCryptoKey(): Promise<CryptoKey> {
	const db = await getDb()
	const row = await db.get('keys', MASTER_KEY_ID)
	if (row?.jwk) {
		return await crypto.subtle.importKey('jwk', row.jwk, { name: 'AES-GCM' }, true, ['encrypt', 'decrypt'])
	}
	const key = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt'])
	const jwk = await crypto.subtle.exportKey('jwk', key)
	await db.put('keys', { id: MASTER_KEY_ID, jwk })
	return key
}

export async function encryptBlob(blob: Blob): Promise<{ iv: Uint8Array; ciphertext: Uint8Array }> {
	const key = await getCryptoKey()
	const iv = crypto.getRandomValues(new Uint8Array(12))
	const plain = new Uint8Array(await blob.arrayBuffer())
	const cipherBuf = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, plain)
	return { iv, ciphertext: new Uint8Array(cipherBuf) }
}

export async function decryptToBlob(iv: Uint8Array, ciphertext: Uint8Array, mimeType: string): Promise<Blob> {
	const key = await getCryptoKey()
	const cipherBuffer = ciphertext.buffer.slice(ciphertext.byteOffset, ciphertext.byteOffset + ciphertext.byteLength)
	const ivBuffer = iv.buffer.slice(iv.byteOffset, iv.byteOffset + iv.byteLength)
	const plainBuf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: ivBuffer as unknown as BufferSource }, key, cipherBuffer as unknown as BufferSource)
	return new Blob([plainBuf], { type: mimeType })
}

export async function saveDownload(item: Omit<DownloadItem, 'createdAt'>) {
	const db = await getDb()
	const toSave: DownloadItem = { ...item, createdAt: Date.now() }
	await db.put('downloads', toSave)
	return toSave
}

export async function listDownloads(): Promise<DownloadItem[]> {
	const db = await getDb()
	return await db.getAll('downloads')
}

export async function getDownload(id: string): Promise<DownloadItem | undefined> {
	const db = await getDb()
	return await db.get('downloads', id)
}

export async function deleteDownload(id: string) {
	const db = await getDb()
	await db.delete('downloads', id)
}