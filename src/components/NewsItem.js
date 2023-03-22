import styled from 'styled-components'
import React from 'react';

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    width:160px;
    height:160px;
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <div>
      <NewsItemBlock>
        <div className='thumbnail'>
          <a href={url} target="_blank" rel='noopener noreferrer'>
            <img src={urlToImage === null ? "https://via.placeholder.com/160" : urlToImage} alt="thumbnail" />
          </a>
        </div>
        <div className='contents'>
          <h2>
            <a href={url} target="_blank" rel='noopener noreferrer'>{title}</a>
          </h2>
          <p>{description === null ? "상세내용이 없습니다. 제목 클릭 시 유튜브로 이동합니다." : description}</p>
        </div>
      </NewsItemBlock>
    </div>
  );
};

export default NewsItem;