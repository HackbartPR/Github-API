//COMPONENTS
import * as S from './style'
import { Card } from '../Card/Card'

export function Sheet({ stareds, repository, isRepoShow, handleShowRepos, handleShowStared }) {
  console.log(isRepoShow)

  //FUNÇÃO USADA PARA RENDERIZAR TODOS OS REPOSITORIOS DENTRO DO ARRAY DE REPOSITORIOS
  const renderRepository = (repos, index) => {
    return <Card key={`card-${index}`} repos={repos} />
  }

  return (
    <S.Main>
      <div className="filter-buttons">
        <button className={`button-repos ${isRepoShow ? 'selected' : ''}`} onClick={handleShowRepos}>
          Repositórios
        </button>
        <button className={`button-star ${!isRepoShow ? 'selected' : ''}`} onClick={handleShowStared}>
          Estrelados
        </button>
      </div>

      {isRepoShow && <div className="wrapper-proj">{repository.map(renderRepository)}</div>}
      {!isRepoShow && <div className="wrapper-proj">{stareds.map(renderRepository)}</div>}
    </S.Main>
  )
}
