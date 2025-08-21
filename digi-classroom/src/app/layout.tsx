import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
	title: 'Digi Classroom',
	description: 'Digital classroom for Nigerian primary schools',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				{children}
				<Toaster position="top-right" richColors />
			</body>
		</html>
	)
}