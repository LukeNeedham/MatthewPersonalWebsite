import { BlogArticle } from '@/domain/model/BlogArticle'
import { LocalDate } from '@/domain/model/LocalDate'

const articlesMap = {
  lightAndMaterial: {
    id: 'light-and-material',
    title: 'Light and Material',
    summary:
      'Why the way a building meets daylight matters more to me than any facade, and the spaces that taught me so.',
    publishDate: new LocalDate(12, 9, 2026),
  },
  drawingByHand: {
    id: 'drawing-by-hand',
    title: 'The Case for Drawing by Hand',
    summary:
      'Software draws faster than I ever will. Here is why I still start every project with a pencil.',
    publishDate: new LocalDate(3, 10, 2026),
  },
  reuseOverDemolition: {
    id: 'reuse-over-demolition',
    title: 'Reuse Before Demolition',
    summary:
      'The most sustainable building is the one that already exists. Notes on adapting what we have.',
    publishDate: new LocalDate(7, 11, 2026),
  },
}

/** Newest first; articles published on the same day are ordered by id, which is unique. */
function compareNewestFirst(a: BlogArticle, b: BlogArticle): number {
  const dateA = a.publishDate
  const dateB = b.publishDate
  return (
    dateB.year - dateA.year ||
    dateB.month - dateA.month ||
    dateB.day - dateA.day ||
    a.id.localeCompare(b.id)
  )
}

const articles: BlogArticle[] = Object.values(articlesMap).sort(compareNewestFirst)

export const BlogArticleProvider = {
  articlesMap,
  articles,
  getArticle: (id: string): BlogArticle | undefined => articles.find((it) => it.id === id),
}
