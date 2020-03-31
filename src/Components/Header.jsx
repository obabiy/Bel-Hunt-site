import React, { useState } from 'react';
import './Header-style.css'

function header() {
 

  return (
    <div id = "header">
        <div className = "headerPart" id = "topHeader">
            <div id="sharingHeader">Следите за нами:
                    <a href ='#'><img src = './img/Instagram.svg'/></a>
                    <a href ='#'><img src = "./img/VK.svg"/></a>
                    <a href ='#'><img src = "./img/Facebook.svg"/></a>
            </div>
        
            <div id = "titleHeader">BELHUNT</div>

            <div id = "langSelectHeader">
                <div id = "number">+37 (529) 640 47 77</div>
                <select>
                    <option>RU</option>
                    <option>EN</option>
                    <option>FR</option>
                    <option>DE</option>
                    <option>ITL</option>
                    <option>ESP</option>
                </select>
            </div>

        </div>    
        
        
        
        <div className = "headerPart" id = "navHeader">
            <div id = "buttonHuntingNav"><img src = "./img/aim.svg"/>Охота<img src="img/navHuntButVector.svg"></img></div>
            
            <button>Цены и сроки</button>
            <button id = "buttonGalleryNav">Галлерея<img src="img/navGalleryVector.svg"></img></button>
            <button>Контакты</button>
            
            <div id="searchBox">
                <input type="text" id="searchInput" placeholder="Поиск по сайту"/>
                <button id="searchBut"><img src="img/search.svg"/></button>
            </div>

        </div>
    </div>
  );
}

export default header;