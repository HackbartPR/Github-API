//COMPONENTS
import * as S from './style'

export const Search = ({ inputUser, setInputUser, handleSearchUser }) => {
  return (
    <S.Search>
      <input type="text" placeholder="Nome do Usuário ..." value={inputUser} onChange={(e) => setInputUser(e.target.value)}></input>
      <button onClick={handleSearchUser}>Buscar</button>
    </S.Search>
  )
}
