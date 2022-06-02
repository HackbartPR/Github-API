//LIBRARIES
import React, { useState } from 'react'
//SERVICES
import { searchUser, searchStared, searchRespos } from '../services/API'

//CREATING THE CONTEXT
export const UserContext = React.createContext()

//CONTEXT FUNCTION
export function UserContextFunction({ children }) {
  //HOOK USES TO SAVE THE USER WITH THE FULL INFORMATION
  const [user, setUser] = useState({})
  //HOOK USES TO SAVE THE STARED PROJECTS
  const [stareds, setStareds] = useState([])
  //HOOK USES TO SAVE THE REPOSITORY PROJECTS
  const [repository, setRepository] = useState([])

  //HOOK TO SAVE THE LOADING STATE
  const [load, setLoad] = useState(true)

  const mainUserContext = async (nickname) => {
    await searchUserContext(nickname)
    await searchStaredContext(nickname)
    await searchReposContext(nickname)

    setLoad(false)
  }

  //RECEIVE THE RESULT OF THE API'S USER REQUEST
  const searchUserContext = async (nickname) => {
    const DATA_USER = await searchUser(nickname)

    setUser({
      login: DATA_USER.login,
      id: DATA_USER.login,
      avatar_url: DATA_USER.avatar_url,
      url: DATA_USER.url,
      html_url: DATA_USER.html_url,
      followers_url: DATA_USER.followers_url,
      following_url: DATA_USER.following_url,
      gists_url: DATA_USER.gists_url,
      starred_url: DATA_USER.starred_url,
      repos_url: DATA_USER.repos_url,
      name: DATA_USER.name,
      company: DATA_USER.company ?? '',
      blog: DATA_USER.blog ?? '',
      location: DATA_USER.location,
      email: DATA_USER.email,
      public_repos: DATA_USER.public_repos,
      public_gists: DATA_USER.public_gists,
      followers: DATA_USER.followers,
      following: DATA_USER.following,
    })
  }

  //RECEIVE THE RESULT OF THE API'S STARED REQUEST
  const searchStaredContext = async (nickname) => {
    const DATA_STARED = await searchStared(nickname)

    const AUX_ARRAY = new Array()

    DATA_STARED.map((data) => {
      AUX_ARRAY.push({
        name: data.name,
        full_name: data.full_name,
        html_url: data.html_url,
      })
    })

    setStareds(AUX_ARRAY)
  }

  //RECEIVE THE RESULT OF THE API'S REPOSITORIE REQUEST
  const searchReposContext = async (nickname) => {
    const DATA_REPOS = await searchRespos(nickname)

    const AUX_ARRAY = new Array()

    DATA_REPOS.map((data) => {
      AUX_ARRAY.push({
        name: data.name,
        full_name: data.full_name,
        html_url: data.html_url,
      })
    })

    setRepository(AUX_ARRAY)
  }

  return <UserContext.Provider value={{ user, stareds, repository, mainUserContext, load }}>{children}</UserContext.Provider>
}
