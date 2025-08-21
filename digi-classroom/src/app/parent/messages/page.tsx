"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'

export default function ParentMessagesPage() {
	const [open, setOpen] = useState(false)
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold">Messages</h2>
			<Button onClick={() => setOpen(true)}>Chat with Teacher</Button>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent>
					<DialogHeader><DialogTitle>Chat</DialogTitle></DialogHeader>
					<div className="space-y-2">
						<div className="h-40 rounded-2xl border p-2 text-sm text-muted-foreground">Conversation history...</div>
						<Textarea placeholder="Type your message..." />
						<Button>Send</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	)
}