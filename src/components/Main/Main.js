//LIBRARIES
import { useContext, useState } from 'react'
//COMPONENTS
import { Sheet } from './Sheet/Sheet'
//CONTEXT
import { UserContext } from '../../contexts/UserContext'

export function Main() {
  //HOOK PARA RECEBER O USER CONTEXT
  const { stareds, repository, load } = useContext(UserContext)
  //HOOK PARA DECIDIR QUAL TABELA DE PROJETOS MOSTRAR
  const [isRepoShow, setIsRepoShow] = useState(true)

  //FUNÇÃO QUE DEFINI A ATUAL TABELA COMO REPOSITORIO
  const handleShowRepos = () => {
    setIsRepoShow(true)
  }

  //FUNÇÃO QUE DEFINI A ATUAL TABELA COMO STARED
  const handleShowStared = () => {
    setIsRepoShow(false)
  }

  return !load && <Sheet stareds={stareds} repository={repository} isRepoShow={isRepoShow} handleShowRepos={handleShowRepos} handleShowStared={handleShowStared} />
}
