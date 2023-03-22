# news-viewer

[news API](https://newsapi.org/s/south-korea-news-api)를 연동해서 뉴스 뷰어 만들기

<br/>

## axois로 API 호출해서 데이터 받아오기

```js
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <button onClick={onClick}>불러오기</button>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
```

## 데이터 연동하기

`useEffect`를 사용하여 컴포넌트가 처음 렌더링되는 시점에 API를 요청한다. useEffect 등록 함수에는 async를 붙이면 안된다. 반환해야 하는 값은 뒷정리 함수이기 때문이다. 따라서 내부에 `async`/`await`를 사용하려면 함수 내부에 `async` 키워드가 붙은 또 다른 함수를 만들어 사용해야 한다.

## usePromise 커스텀 Hook 만들기

usePromise 커스텀 Hook 만들어 로딩중 / 완료 / 실패에 대한 상태 관리를 진행하였다.
