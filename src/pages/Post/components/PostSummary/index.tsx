import {
  FaGithub,
  FaCalendarDay,
  FaComment,
  FaChevronLeft,
} from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'

import { PostSummaryContainer, SummaryInfo } from './styles'

export function PostSummary() {
  return (
    <PostSummaryContainer>
      <nav>
        <a href="">
          <FaChevronLeft /> VOLTAR
        </a>
        <a href="">
          {' '}
          VER NO GITHUB <BsBoxArrowUpRight />
        </a>
      </nav>
      <h1>JavaScript data types and data structures</h1>
      <SummaryInfo>
        <span>
          <FaGithub />
          <p>jullbs</p>
        </span>

        <span>
          <FaCalendarDay />
          <p>Há 1 dia</p>
        </span>

        <span>
          <FaComment />
          <p>5 comentários</p>
        </span>
      </SummaryInfo>
    </PostSummaryContainer>
  )
}
