//LIBRARIES
import axios from 'axios'

//FUNÇÃO RESPONSÁVEL POR PESQUISAR O USUÁRIO NA API DO GITHUB
export const searchUser = async (nickname) => {
  const { data } = await axios.get(`https://api.github.com/users/${nickname}`)
  return data
}

//FUNÇÃO RESPONSÁVEL POR PESQUISAR TODOS O PROJETOS STARED
export const searchStared = async (nickname) => {
  const { data } = await axios.get(`https://api.github.com/users/${nickname}/starred`)
  return data
}

//FUNÇÃO RESPONSÁVEL POR PESQUISAR TODOS O PROJETOS DO REPOSITORIO
export const searchRespos = async (nickname) => {
  const { data } = await axios.get(`https://api.github.com/users/${nickname}/repos`)
  return data
}
