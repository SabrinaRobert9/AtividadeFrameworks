import * as React from 'react';
import './style.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button1 from './Components/Buttons/Button1';
import Button2 from './Components/Buttons/Button2';
import Button3 from './Components/Buttons/Button3';
import Button4 from './Components/Buttons/Button4';
import Button5 from './Components/Buttons/Button5';
import Button6 from './Components/Buttons/Button6';

import Card1 from './Components/Cards/Card1';
import Card2 from './Components/Cards/Card2';
import Card3 from './Components/Cards/Card3';
import Card4 from './Components/Cards/Card4';
import Card5 from './Components/Cards/Card5';
import Card6 from './Components/Cards/Card6';
import Card7 from './Components/Cards/Card7';
import Card8 from './Components/Cards/Card8';
import Card9 from './Components/Cards/Card9';
import Card10 from './Components/Cards/Card10';
import Card11 from './Components/Cards/Card11';
import Card12 from './Components/Cards/Card12';
import Card13 from './Components/Cards/Card13';
import Card14 from './Components/Cards/Card14';
import Card15 from './Components/Cards/Card15';
import Card16 from './Components/Cards/Card16';
import Card17 from './Components/Cards/Card17';
import Card18 from './Components/Cards/Card18';
import Card19 from './Components/Cards/Card19';

export default function App() {
  const error = (n, prop) => {
    console.log(`Error n-> ${n}\nMensage -> ${prop}`);
  };

  try {
    return (
      <div>
        <main className="i_____components">
          <section className="i__1 bg-primary">
            <Button1 />
            <Button2 />
            <Button3 />
            <Button4 />
            <Button5 />
            <Button6 />
          </section>

          <section className="i__2 bg-dark">
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
            <Card5 />
            <Card6 />
            <Card7 />
            <Card8 />
            <Card9 />
            <Card10 />
            <Card11 />
            <Card12 />
            <Card13 />
            <Card14 />
            <Card15 />
            <Card16 />
            <Card17 />
            <Card18 />
            <Card19 />
          </section>
        </main>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
