import type { UserRole } from '@/components/layout/sidebar'

export const users = [
	{ id: 'u1', name: 'Amina Bello', email: 'amina@example.com', role: 'student' as UserRole },
	{ id: 'u2', name: 'Mr. Okoro', email: 'okoro@example.com', role: 'teacher' as UserRole },
	{ id: 'u3', name: 'Mrs. Ade', email: 'ade@example.com', role: 'parent' as UserRole },
	{ id: 'u4', name: 'Admin', email: 'admin@example.com', role: 'admin' as UserRole },
]

export const lessons = [
	{ id: 'l1', title: 'Mathematics - Fractions', type: 'video', duration: 900, subject: 'Mathematics' },
	{ id: 'l2', title: 'English - Nouns', type: 'pdf', pages: 10, subject: 'English' },
	{ id: 'l3', title: 'Science - Plants', type: 'slides', slides: 12, subject: 'Basic Science' },
]

export const assignments = [
	{ id: 'a1', title: 'Fractions Worksheet', dueDate: '2025-08-31', classId: 'P5', submitted: 12 },
	{ id: 'a2', title: 'Essay on My School', dueDate: '2025-09-05', classId: 'P5', submitted: 10 },
]

export const tests = [
	{ id: 't1', title: 'Math CA Test', type: 'mcq', classId: 'P5', date: '2025-09-10' },
	{ id: 't2', title: 'English Essay', type: 'essay', classId: 'P5', date: '2025-09-15' },
]