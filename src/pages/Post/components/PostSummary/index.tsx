import { useNavigate } from 'react-router-dom'

import { PostDataType } from '../..'

import {
  FaGithub,
  FaCalendarDay,
  FaComment,
  FaChevronLeft,
} from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'

import { PostSummaryContainer, SummaryInfo } from './styles'
import { formatDate } from '../../../../util/format'

interface PostSummaryProps {
  postData: PostDataType
}

export function PostSummary({ postData }: PostSummaryProps) {
  const navigate = useNavigate()

  function handleHomePageClick() {
    return navigate('/')
  }

  return (
    <PostSummaryContainer>
      <nav>
        <a href="" onClick={() => handleHomePageClick()}>
          <FaChevronLeft /> VOLTAR
        </a>
        <a href={postData.html_url} target="_blank" rel="noreferrer">
          {' '}
          VER NO GITHUB <BsBoxArrowUpRight />
        </a>
      </nav>
      <h1>{postData.title}</h1>
      <SummaryInfo>
        <span>
          <FaGithub />
          <p>jullbs</p>
        </span>

        <span>
          <FaCalendarDay />
          <p>
            {postData.created_at !== ''
              ? formatDate(postData.created_at)
              : 'Há 0 dias'}
          </p>
        </span>

        <span>
          <FaComment />
          <p>
            {postData.comments === 1
              ? `${postData.comments} comentário`
              : `${postData.comments} comentários`}
          </p>
        </span>
      </SummaryInfo>
    </PostSummaryContainer>
  )
}
