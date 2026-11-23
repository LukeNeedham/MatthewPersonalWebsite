export interface BlogUiState {
  articles: BlogArticleItem[]
}

/** One article of the list, as it is shown: the date is text and the link is made. */
export interface BlogArticleItem {
  id: string
  title: string
  summary: string
  date: string
  href: string
}
