import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function formatDate(date: string) {
  return (
    formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: ptBR,
    })
      .charAt(0)
      .toUpperCase() +
    formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: ptBR,
    })
      .slice(1)
      .toLowerCase()
  )
}
