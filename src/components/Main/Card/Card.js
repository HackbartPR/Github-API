//COMPONENTS
import * as S from './style'

export const Card = ({ repos }) => {
  return (
    <S.Card>
      <a href={repos.html_url} target="_blank">
        <h3>{repos.name}</h3>
        <p>{repos.full_name}</p>
      </a>
    </S.Card>
  )
}
