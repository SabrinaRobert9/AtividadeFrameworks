import * as React from 'react';

import { useState } from 'react';

export default function footer() {
  const nome = useState('Sabrina Robert');

  return (
    <div>
      <footer className="bg-dark">
        <span>Feito por - {nome}</span>
      </footer>
    </div>
  );
}
