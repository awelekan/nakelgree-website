import { FormSubmission } from '@/lib/form-storage'

interface SummaryCardsProps {
  submissions: FormSubmission[]
}

export function SummaryCards({ submissions }: SummaryCardsProps) {
  const total = submissions.length
  const byType = submissions.reduce(
    (acc, sub) => {
      acc[sub.formType] = (acc[sub.formType] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const todayCount = submissions.filter((sub) => new Date(sub.submittedAt) >= today).length

  const cards = [
    { label: 'Total submissions', value: total, color: 'bg-primary/10 text-primary' },
    { label: 'Today', value: todayCount, color: 'bg-green-500/10 text-green-600' },
    { label: 'Programs', value: byType['program'] || 0, color: 'bg-blue-500/10 text-blue-600' },
    { label: 'Talent', value: byType['talent'] || 0, color: 'bg-purple-500/10 text-purple-600' },
    { label: 'Community', value: byType['community'] || 0, color: 'bg-orange-500/10 text-orange-600' },
    { label: 'Innovation', value: byType['innovation'] || 0, color: 'bg-pink-500/10 text-pink-600' },
    { label: 'General', value: byType['general'] || 0, color: 'bg-slate-500/10 text-slate-600' },
  ]

  return (
    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <div key={card.label} className={`rounded-2xl border border-border ${card.color.split(' ')[0]} p-6`}>
          <p className="text-sm font-medium text-muted-foreground">{card.label}</p>
          <p className={`mt-3 text-3xl font-bold ${card.color.split(' ')[1]}`}>{card.value}</p>
        </div>
      ))}
    </div>
  )
}
