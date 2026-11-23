import { UrlProvider } from '@/domain/provider/UrlProvider'
import type { HomeUiState } from '@/presentation/feature/home/HomeUiState'

/** The state of the home page. It knows nothing of how the page looks. */
export function useHomeViewModel() {
  const uiState: HomeUiState = {
    name: 'Matthew J. Needham',
    role: 'Architect',
    blogHref: UrlProvider.blog,
  }
  return { uiState }
}
