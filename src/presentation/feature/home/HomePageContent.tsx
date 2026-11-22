import { Text, VStack } from '@chakra-ui/react'
import { RootScaffold } from '@/presentation/common/RootScaffold'
import type { HomeUiState } from '@/presentation/feature/home/HomeUiState'

interface Props {
  uiState: HomeUiState
}

/** All of the UI of the home page. Stateless: state comes down, events go up. */
export function HomePageContent({ uiState }: Props) {
  return (
    <RootScaffold>
      <VStack gap="12px">
        <Text as="h1" textStyle="mainTitle" textAlign="center">
          {uiState.name}
        </Text>
        <Text as="p" textStyle="subTitle" textAlign="center">
          {uiState.role}
        </Text>
      </VStack>
    </RootScaffold>
  )
}
