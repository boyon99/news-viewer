import styled from 'styled-components'
import NewsItem from './NewsItem'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// UI
const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null)
  const [loading, setLoading] = useState(false) // 로딩중인지 여부 

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true)
      try {
        const query = category === 'all' ? "" : `&category=${category}`;
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=d03ff6b59ca4474e8794908e91019e0e`)
        setArticles(res.data.articles)
      } catch (e) {
        console.log(e)
      }
      setLoading(false)
    }
    fetchData()
  }, [category])

  // 대기중인 경우
  if (loading) {
    return <NewsListBlock>대기중입니다.</NewsListBlock>
  }
  // 아직 기사 값이 설정되지 않은 경우
  if (!articles) {
    return null
  }
  // 기사값이 유효한 경우
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;