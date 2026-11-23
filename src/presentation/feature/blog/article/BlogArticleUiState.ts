export interface BlogArticleUiState {
  title: string
  date: string
  /** The pre-rendered HTML of the article body; undefined when there is no such article. */
  contentHtml?: string
}
