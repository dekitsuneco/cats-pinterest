import React, { ReactElement } from 'react';

const NotFoundPage = (): ReactElement => {
  return (
    <main style={{ padding: '1rem' }}>
      <p>{'Такой страницы не существует(..'}</p>
    </main>
  );
};

export { NotFoundPage };
