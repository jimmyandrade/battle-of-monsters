import type { FC } from 'react'
import { Button } from '../button'
import { GlobalStyle } from '../global-style'
import {
  MonsterDetailsCard,
  MonsterEmptyStateCard,
  MonsterSelector,
  WinnerMonsterAlert
} from '../../features/monsters/components'
import { useMonstersBattle } from '../../features/monsters/hooks'
import { Container } from '../container'
import { Header } from '../header'

export const App: FC = () => {
  const startBattleButtonLabel = 'Start Battle'

  const {
    allMonsters,
    computerMonster,
    handleStartBattle,
    onMonsterSelect,
    isFetchingMonsters,
    playerMonster,
    winnerMonster
  } = useMonstersBattle()

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Container>
          <form method={'POST'} onSubmit={handleStartBattle}>
            <fieldset>
              <legend>Select your monster</legend>
              <MonsterSelector
                allMonsters={allMonsters}
                isFetchingMonsters={isFetchingMonsters}
                onMonsterSelect={onMonsterSelect}
                playerMonster={playerMonster}
              />
            </fieldset>
            <WinnerMonsterAlert winnerMonster={winnerMonster} />
            <fieldset id="battle-field">
              <legend className="screen-reader-only">Battle field</legend>
              <div id="submit-container">
                <Button
                  disabled={isFetchingMonsters}
                  type={'submit'}
                >
                  Start Battle
                </Button>
              </div>

              {playerMonster === null && <>
                <MonsterEmptyStateCard
                  id={'player-monster'}>
                  Select your&nbsp;monster<br />
                  and click {startBattleButtonLabel} button
                </MonsterEmptyStateCard>
                <MonsterEmptyStateCard id={'computer-monster'}>
                  Select your&nbsp;monster<br />
                  and click {startBattleButtonLabel} button
                </MonsterEmptyStateCard>
              </>}

              {playerMonster !== null && <>
                <MonsterDetailsCard
                  id={'player-monster'}
                  monster={playerMonster}
                />
                {computerMonster === null
                  ? (
                  <MonsterEmptyStateCard
                    id={'computer-monster'}>
                    Click {startBattleButtonLabel} button<br />
                    to see your opponent
                  </MonsterEmptyStateCard>
                    )
                  : (
                  <MonsterDetailsCard
                    id={'computer-monster'}
                    monster={computerMonster}
                  />
                    )}
              </>}
            </fieldset>
          </form>
        </Container>
      </main>
    </>
  )
}
