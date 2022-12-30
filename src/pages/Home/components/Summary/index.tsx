import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

import { SummaryContainer, SummaryContent } from './styles'

import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'

export function Summary() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    bio: '',
    login: '',
    followers: 0,
    url: '',
    avatar: '',
  })

  async function fetchUserInformations() {
    const response = await api.get('users/jullbs')

    const {
      name,
      bio,
      login,
      followers,
      html_url: url,
      avatar_url: avatar,
    } = response.data

    setUserInfo({ name, bio, login, followers, url, avatar })
  }

  useEffect(() => {
    fetchUserInformations()
  }, [])

  return (
    <SummaryContainer>
      <img src={userInfo.avatar} alt="" />

      <SummaryContent>
        <div>
          <h1>{userInfo.name}</h1>
        </div>

        <p>{userInfo.bio}</p>

        <div>
          <span>
            <FaGithub />
            <p>{userInfo.login}</p>
          </span>

          <span>
            <FaBuilding />
            <p>Rocketseat</p>
          </span>

          <span>
            <FaUserFriends />
            <p>
              {userInfo.followers > 1
                ? `${userInfo.followers} seguidores`
                : `${userInfo.followers} seguidor`}
            </p>
          </span>
        </div>
      </SummaryContent>

      <a href={userInfo.url}>
        GITHUB <BsBoxArrowUpRight />
      </a>
    </SummaryContainer>
  )
}
