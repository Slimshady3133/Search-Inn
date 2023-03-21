import React from 'react';
import { Company } from './Types/types';

function Collection({ comp }: { comp: Company }): JSX.Element {
  return (
    <div>
      <div>Название компании: {comp.value}</div>
      <div>Кпп: {comp.data.kpp}</div>
      <div>Инн: {comp.data.inn}</div>
      <div>
        Адрес :
        <div>
          {comp.data.address.data.country} {comp.data.address.value}
        </div>
      </div>
    </div>
  );
}

export default Collection;
