"use client"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export function ConfirmDialog({ open, onOpenChange, title, description, confirmText = 'Confirm', cancelText = 'Cancel', onConfirm }: {
	open: boolean
	onOpenChange: (open: boolean) => void
	title: string
	description?: string
	confirmText?: string
	cancelText?: string
	onConfirm: () => void
}) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					{description && <DialogDescription>{description}</DialogDescription>}
				</DialogHeader>
				<DialogFooter>
					<Button variant="ghost" onClick={() => onOpenChange(false)}>{cancelText}</Button>
					<Button onClick={() => { onConfirm(); onOpenChange(false) }}>{confirmText}</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}