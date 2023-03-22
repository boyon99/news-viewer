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
      margin: 0 0 5px 0;
      font-size : 20px;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      white-space: normal;
      font-size:14px;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, author, url, urlToImage, publishedAt } = article;
  let publishedAtTime = publishedAt.split('T')
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
          <p>{author === null ? "" : `${author}`}</p>
          <p>{publishedAt === null ? "" : `${publishedAtTime[0]}`}</p>
        </div>
      </NewsItemBlock>
    </div>
  );
};

export default NewsItem;