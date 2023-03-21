/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import Collection from '../Components/Collections';
import { Company } from '../Components/Types/types';

function App(): JSX.Element {
  const [datas, setDatas] = useState([]);
  const [query, setQuery] = useState('');
  const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party';
  const token = '43b7dae53dcfd49bfea079d855caee324f278c7f';

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({ query }),
  };
  const results = (): any => {
    fetch(url, options)
      .then((res) => res.json())
      .then((result) => setDatas(result.suggestions));
    setQuery('');
  };
  return (
    <div>
      <div>
        Инн :
        <input
          type="text"
          placeholder="Введите Инн"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button type="submit" onClick={results}>
        Поиск
      </button>

      <div className="content">
        <div>
          {datas
            .filter((comp: Company) => comp.data.inn.includes(query))
            .map((comp: Company, i) => (
              <Collection key={i} comp={comp} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
