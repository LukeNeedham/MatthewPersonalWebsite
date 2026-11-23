import { LocalDate } from '@/domain/model/LocalDate'

export interface BlogArticle {
  /** The name of the markdown file, and the address of the article. */
  id: string
  title: string
  /** One or two sentences, shown in the list of articles. */
  summary: string
  publishDate: LocalDate
}
