//LIBRARIES
import { useContext, useState } from 'react'
//STYLED COMPONENTS
import { Search } from './Search/Search'
import { Info } from './Info/Info'
//CONTEXTS
import { UserContext } from '../../contexts/UserContext'

export function Header() {
  //HOOK PARA GUARDAR O USUÁRIO DIGITADO
  const [inputUser, setInputUser] = useState('')
  //HOOK PARA RECEBER AS FUNÇÕES DO CONTEXTO
  const { user, mainUserContext, load } = useContext(UserContext)

  //REALIZA A VERIFICAÇÃO E CHAMA A CONSULTA DA API
  const handleSearchUser = () => {
    if (!inputUser) return

    //CHAMA A FUNÇÃO DE RECEBER OS DADOS DO USUARIO NO CONTEXT API
    mainUserContext(inputUser)
  }

  return (
    <header>
      <Search inputUser={inputUser} setInputUser={setInputUser} handleSearchUser={handleSearchUser} />

      {!load && <Info user={user} />}
    </header>
  )
}
