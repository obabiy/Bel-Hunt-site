import React from 'react'

import './Footer-style.css'


function footer(){  
    return(
        <div id = "footerContainer">
            <img id = "footerTransition" src = './img/top.svg' no-repeat/>
            <div id = "footer">
                <div className="footerPart" id = "footerPartHunt">
                    <h4>Охота</h4>
                    <div class="certainAnimalFooterMenu">
                        <li class = "footerMenuHunting">на лося</li>
                        <li class = "footerMenuHunting">на зубра</li>
                        <li class = "footerMenuHunting">на кабана</li>
                        <li class = "footerMenuHunting">на косулю</li>
                        <li class = "footerMenuHunting">на оленя</li>
                        <li class = "footerMenuHunting">на волка</li>
                        <li class = "footerMenuHunting">на глухаря</li>
                        <li class = "footerMenuHunting">на вальдшнепа</li>
                        <li class = "footerMenuHunting">на куропатку</li>
                        <li class = "footerMenuHunting">на бекаса</li>
                        <li class = "footerMenuHunting">на утку</li>
                    </div>
                </div>

                <div className="footerPart">
                        <h4>Главное меню</h4>
                        <div class="certainAnimalFooterMenu">
                            <li class = "footerMenuMain">Цена и сроки</li>
                            <li class = "footerMenuMain">Галерея</li>
                            <li class = "footerMenuMain">Контакты</li>
                        </div>
                </div>
                
                <div className="footerPart" id = "footerContacts">
                    <h4>Контакты</h4>
                    <div className="certainAnimalFooterMenu">
                        <span>+37 (529) 640 47 77</span>
                        <div id="iconsFooter">
                            <img src="img/Instagram.svg"/>
                            <img src="img/Facebook.svg"/>
                            <img src="img/VK.svg"/>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    );
}

export default footer;