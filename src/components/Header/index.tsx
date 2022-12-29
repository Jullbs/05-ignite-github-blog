import { HeaderContainer } from './styles'

import headerCover from '../../assets/images/header-cover.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerCover} alt="" />
    </HeaderContainer>
  )
}
