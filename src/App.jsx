import React from 'react';

import './App.css';

import Header from './Components/Header'
import Footer from './Components/Footer'

import CurrentAnimalContent from './Components/CurrentAnimalContent'

export default function App(){
  return (
    <div id = "siteContainer">
      <Header/>
     
      <CurrentAnimalContent animalToHunt = "Охота на лося" imgSrc = "img/elkTrophy.jpg" textContent = "Охота на это огромное животное в период гона требует знания его повадок, местности, а также хороших навыков стрельбы, железных нервов и самообладания. В Белоруссии о начале гона можно догадаться по первым признакам уже в конце августа. Это заломы молодых побегов сосны, иногда березы и осины. Следующими признаками гона лося будут копки. Так называются ямки, которые лось делает своими копытами в том месте, где помочилась самка лося. Копки свидетельствуют о том, что гон лося достиг своего апогея. В период гона лось наиболее активен в вечерних и утренних сумерках. Через неделю-полторы гон заканчивается. В Белорусии в основном общий период гона у лося составляет почти месяц и делится на три части - начало, разгар и окончание гона. Лоси в полном расцвете сил наиболее активны в начале гона. В этот период они более подвижны и в поисках самки активней отзываются на вабу. Вабильщик может имитировать голоса самца и/или самки лося."/>

      <Footer/>
    </div>
  );

}

