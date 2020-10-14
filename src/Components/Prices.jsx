import React from 'react'

import './Prices-style.css'
import DefaultPageTitle from './DefaultPageTitle'

import $ from 'jquery'


export default function Prices(){

    const open = (event) => {
        $(event.currentTarget).siblings().slideToggle(500);
    }

    return(
        <div id = "pricesContainer">
            <DefaultPageTitle boldPart = "Цены и сроки" normalPart = " охоты"/>
            
            <div className = 'pricesPart'>
                
                <div className = "titlePricesPart" onClick = {open} >Базовые услуги<img className = "vectorButton" src = './img/angle.svg'/></div> 
                <ul>
                    <li><span id = "text">Организационный сбор (с человека) — <span id = "price">25€</span></span></li>
                    <li><span id = "text">Стоимость для клиента одного дня организации охоты и пребывания в охотхозяйстве общества (полный пансион, лицензия на охоту, сопровождение на охоте, транспортные услуги, связанные с проведением охоты) — <span id = "price">150€</span></span></li>
                    <li><span id = "text">Стоимость для клиента одного дня организации охоты (лицензия на охоту, сопровождение на охоте, транспортные услуги, связанные с проведением охоты) — <span id = "price">60€</span></span></li>
                    <li><span id = "text">Стоимость одного дня пребывания в охотхозяйстве сопровождающего лица (полный пансион) — <span id = "price">85€</span></span></li>
                    <li><span id = "text">Стоимость организации одного дня загонной охоты, охота на волка с флажками (с одного охотника) — <span id = "price">60€</span></span></li>
                    <li><span id = "text">Стоимость разрешения на ввоз-вывоз оружия (одного ружья) — <span id = "price">50€</span></span></li>
                    <li><span id = "text">Встреча и проводы на границе, транспортные услуги, связанные с доставкой Клиента до охотхозяйства и обратно или встреча на границе (включая холостой пробег): <li>группа до 3 человек — <span id = "price">0.30€ / 1 км</span></li> <li>группа 4 человека и более — <span id = "price">0.35€ / 1 км</span></li></span></li>
                </ul>
            </div>
            <div className = 'pricesPart'>
                <div className = "titlePricesPart" onClick = {open}>Дополнительные услуги<img className = "vectorButton" src = './img/angle.svg'/></div>
                <ul>
                    <li><span id = "text">Организация ввоза-вывоза одной собаки — <span id = "price">40€</span></span></li>
                    <li><span id = "text">Обслуживание егерем с легавой собакой (за одни сутки) — <span id = "price">45€</span></span></li>
                    <li><span id = "text">Певичная препарация трофея — <span id = "price">10-40€</span></span></li>
                    <li><span id = "text">Ветеринарный сертификат на вывоз трофея — <span id = "price">55€</span></span></li>
                    <li><span id = "text">Регистрация (временная прописка) — <span id = "price">10€</span></span></li>
                    <li><span id = "text">Обязательное медицинское страхование — <span id = "price">5€</span></span></li>
                    <li><span id = "text">Отправка документов по почте — <span id = "price">оплата по факту</span></span></li>
                </ul>
            </div>
            <div id = "titleBlock">Стоимость дичи</div>
            <div className = "pricesPart">
                    <div className = "titlePricesPart" onClick = {open}>Лось<img className = "vectorButton" src = './img/angle.svg'/></div>
                    <div className = "information"><span>20 августа - 40 декабря</span><br/>(трофей — рога с черепом без нижней челюсти; охота во время гона, с подхода, из засидок и загоном)</div>
                    <div className = "pricesWeights">
                        <div className = "line white">ВЕС, КГ<span>Цена, €</span></div>
                        <div className = "line grey">до 4,99<span>840</span></div>
                        <div className = "line white">от 5 до 5,99<span>960 + 3,60 за каждые 10 г</span></div>
                        <div className = "line grey">от 6 до 6,99<span>1320 + 7,20 за каждые 10 г</span></div>
                        <div className = "line white">от 7 до 7,99<span>1800 + 8,40 за каждые 10 г</span></div>
                        <div className = "line grey">от 8 до 8,99<span>2280 + 9,60 за каждые 10 г</span></div>
                        <div className = "line white">от 9 до 9,99<span>2820 + 10,80 за каждые 10 г</span></div>
                        <div className = "line grey">10 и более<span>3360 + 12,00 за каждые 10 г</span></div>
                    </div>
                    <ul>
                        <li><span id = "text">Добыча взрослого не трофейного самца — <span id = "price">840€</span></span></li>
                        <li><span id = "text">Добыча самки — <span id = "price">960€</span></span></li>
                        <li><span id = "text">Добыча сеголетка — <span id = "price">420€</span></span></li>
                        <li><span id = "text">Ранение взрослого трофейного самца — <span id = "price">1200€</span></span></li>
                        <li><span id = "text">Ранение не трофейного самца — <span id = "price">240€</span></span></li>
                        <li><span id = "text">Ранение самки — <span id = "price">480€</span></span></li>
                        <li><span id = "text">Ранение сеголетка — <span id = "price">210€</span></span></li>
                    </ul>
                </div>
                <div className = "pricesPart">
                    <div className = "titlePricesPart" onClick = {open}>Зубр<img className = "vectorButton" src = './img/angle.svg'/></div>
                    <div className = "information">По запросу.</div>
                </div>
                <div className = "pricesPart"><div className = "titlePricesPart" onClick = {open}>Олень<img className = "vectorButton" src = './img/angle.svg'/></div>
                    <div className = "information"><span>20 августа — 31 января</span><br/>(трофей – рога с черепом без нижней челюсти; охота во время гона с подхода, из засидок и загоном)</div>
                    <div className = "pricesWeights">
                        <div className = "line white">ВЕС, КГ<span>Цена, €</span></div>
                        <div className = "line grey">от 3,5 до 4,99<span>900</span></div>
                        <div className = "line white">от 5 до 5,99<span>1020</span></div>
                        <div className = "line grey">от 6 до 6,99<span>1560 + 2,00 за каждые 10 г</span></div>
                        <div className = "line white">от 7 до 7,99<span>1765 + 6,00 за каждые 10 г</span></div>
                        <div className = "line grey">от 8 до 8,99<span>2340 + 10,20 за каждые 10 г</span></div>
                        <div className = "line white">от 9 и более<span>3360 + 15,00 за каждые 10 г</span></div>
                    </div>
                    <ul>
                        <li><span id = "text">Добыча взрослого не трофейного самца — <span id = "price">840€</span></span></li>
                        <li><span id = "text">Добыча самки — <span id = "price">600€</span></span></li>
                        <li><span id = "text">Добыча сеголетка — <span id = "price">300€</span></span></li>
                        <li><span id = "text">Ранение взрослого трофейного самца — <span id = "price">1200€</span></span></li>
                        <li><span id = "text">Ранение не трофейного самца — <span id = "price">360€</span></span></li>
                        <li><span id = "text">Ранение самки — <span id = "price">360€</span></span></li>
                        <li><span id = "text">Ранение сеголетка — <span id = "price">180€</span></span></li>
                    </ul>
                </div>
                <div className = "pricesPart"><div className = "titlePricesPart" onClick = {open}>Кабан<img className = "vectorButton" src = './img/angle.svg'/></div>
                    <div className = "information"><span>1 мая - 30 сентября (из засады, с подхода)<br/>1 октября - 30 декабря (загоном, из засады, с подхода)<br/>1 января - 30 апреля (из засады с вышек)</span><br/>(трофей – клыки)</div>
                    <div className = "pricesWeights">
                        <div className = "line white">Длина, мм<span>Цена, €</span></div>
                        <div className = "line grey">от 130 до 139<span>240</span></div>
                        <div className = "line white">от 140 до 159<span>265 + 6,60 за каждый мм</span></div>
                        <div className = "line grey">от 160 до 189<span>395 + 10,80 за каждый мм</span></div>
                        <div className = "line white">от 190 до 199<span>720 + 14,40 за каждый мм</span></div>
                        <div className = "line grey">от 200 и более<span>865 + 18,00 за каждый мм</span></div>
                    </div>
                    <div className = "information"><span>Добыча кабана самца не трофейного, самки или молодняка в зависимости от веса туши в шкуре с головой без внутренностей (килограммов):</span></div>
                    <div className = "pricesWeights">
                        <div className = "line white">ВЕС, КГ<span>Цена, €</span></div>
                        <div className = "line grey">до 49,9<span>120</span></div>
                        <div className = "line white">50–99,9<span>240</span></div>
                        <div className = "line grey">100 и более<span>360</span></div>
                    </div>
                    <ul>
                        <li><span id = "text">Ранение трофейного самца — <span id = "price">360€</span></span></li>
                        <li><span id = "text">Ранение взрослого не трофейного животного — <span id = "price">120€</span></span></li>
                    </ul>
                </div>
                <div className = "pricesPart"><div className = "titlePricesPart" onClick = {open}>Косуля<img className = "vectorButton" src = './img/angle.svg'/></div>
                <div className = "information"><span>15 мая — 30 декабря</span><br/>(трофей – рога с черепом без нижней челюсти, охота с подхода, из засидок и загоном)</div>
                    <div className = "pricesWeights">
                        <div className = "line white">ВЕС, Г<span>Цена, €</span></div>
                        <div className = "line grey">до 200<span>120</span></div>
                        <div className = "line white">200<span>249 150</span></div>
                        <div className = "line grey">250<span>299 190</span></div>
                        <div className = "line white">300<span>349 300 + 2,00 за каждый г</span></div>
                        <div className = "line grey">350<span>499 400 + 3,00 за каждый г</span></div>
                        <div className = "line white">500 и более<span>850 + 4,20 за каждый г</span></div>
                    </div>
                    <ul>
                        <li><span id = "text">Добыча взрослого не трофейного самца — <span id = "price">120€</span></span></li>
                        <li><span id = "text">Добыча самки — <span id = "price">120€</span></span></li>
                        <li><span id = "text">Добыча сеголетка — <span id = "price">70€</span></span></li>
                        <li><span id = "text">Ранение самца — <span id = "price">200€</span></span></li>
                        <li><span id = "text">Ранение самки — <span id = "price">60€</span></span></li>
                        <li><span id = "text">Ранение сеголетка — <span id = "price">60€</span></span></li>
                    </ul>
                </div>
                <div className = "pricesPart"><div className = "titlePricesPart" onClick = {open}>Волк<img className = "vectorButton" src = './img/angle.svg'/></div>
                    <div className = "information">(охота с флажками, из засидок у привады, на вабу)</div>
                    <ul>
                        <li><span id = "text">Добыча — <span id = "price">230€</span></span></li>
                        <li><span id = "text">Ранение — <span id = "price">115€</span></span></li>
                    </ul>
                </div>
                <div className = "pricesPart"><div className = "titlePricesPart" onClick = {open}>Глухарь<img className = "vectorButton" src = './img/angle.svg'/></div>
                    <div className = "information"><span>20 марта — 30 апреля</span></div>
                    <ul>
                        <li><span id = "text">Добыча — <span id = "price">590€</span></span></li>
                        <li><span id = "text">Ранение — <span id = "price">295€</span></span></li>
                    </ul>
                </div>
                <div className = "pricesPart"><div className = "titlePricesPart" onClick = {open}>Тетерев<img className = "vectorButton" src = './img/angle.svg'/></div>
                    <div className = "information"><span>20 марта — 30 апреля<br/>1 августа — 30 ноября</span></div>
                    <ul>
                        <li><span id = "text">Добыча — <span id = "price">180€</span></span></li>
                        <li><span id = "text">Ранение — <span id = "price">60€</span></span></li>
                    </ul>
                </div>
                <div className = "pricesPart"><div className = "titlePricesPart" onClick = {open}>Вальдшнеп<img className = "vectorButton" src = './img/angle.svg'/></div>
                    <div className = "information"><span>Первая суббота апреля – второе воскресенье мая<br/>Первая суббота августа – второе воскресенье декабря</span></div>
                    <ul>
                        <li><span id = "text">Добыча — <span id = "price">8€</span></span></li>
                    </ul>
                </div>
                <div className = "pricesPart"><div className = "titlePricesPart" onClick = {open}>Гусь<img className = "vectorButton" src = './img/angle.svg'/></div>
                    <div className = "information"><span>Вторая суббота марта – второе воскресенье мая<br/>Третья суббота сентября – второе воскресенье декабря</span></div>
                    <ul>
                        <li><span id = "text">Добыча — <span id = "price">13€</span></span></li>
                    </ul>
                </div>
                <div className = "pricesPart"><div className = "titlePricesPart" onClick = {open}>Куропатка<img className = "vectorButton" src = './img/angle.svg'/></div>
                    <div className = "information"><span>Первая суббота сентября — второе воскресенье декабря</span></div>
                    <ul>
                        <li><span id = "text">Добыча — <span id = "price">10€</span></span></li>
                    </ul>
                </div>
                <div className = "pricesPart"><div className = "titlePricesPart" onClick = {open}>Рябчик<img className = "vectorButton" src = './img/angle.svg'/></div>
                    <div className = "information"><span>Первая суббота сентября — второе воскресенье декабря</span></div>
                    <ul>
                        <li><span id = "text">Добыча — <span id = "price">7€</span></span></li>
                    </ul>
                </div>
                <div className = "pricesPart"><div className = "titlePricesPart" onClick = {open}>Бекас и др. мелкая болотная дичь<img className = "vectorButton" src = './img/angle.svg'/></div>
                    <div className = "information"><span>Вторая суббота июля — первое воскресенье августа<br/>Вторая суббота августа – второе воскресенье декабря</span></div>
                    <ul>
                        <li><span id = "text">Добыча — <span id = "price">7€</span></span></li>
                    </ul>
                </div>
                <div className = "pricesPart"><div className = "titlePricesPart" onClick = {open}>Утка<img className = "vectorButton" src = './img/angle.svg'/></div>
                    <div className = "information"><span>Первая суббота апреля — второе воскресенье мая (селезень кряквы)<br/>Вторая суббота августа — второе воскресенье декабря</span></div>
                    <ul>
                        <li><span id = "text">Добыча весна/осень — <span id = "price">7/6€</span></span></li>
                    </ul>
                </div>
                <div className = "pricesPart"><div className = "titlePricesPart" onClick = {open}>Лиса, куница, енотовидная собака<img className = "vectorButton" src = './img/angle.svg'/></div>
                    <ul>
                        <li><span id = "text">Добыча — <span id = "price">20€</span></span></li>
                    </ul>
                </div>
                <div className = "pricesPart"><div className = "titlePricesPart" onClick = {open}>Заяц<img className = "vectorButton" src = './img/angle.svg'/></div>
                    <div className = "information"><span>Первая суббота – последнее воскресенье октября<br/>Первая суббота ноября – последнее воскресенье января</span></div>
                    <ul>
                        <li><span id = "text">Добыча — <span id = "price">20€</span></span></li>
                    </ul>
                </div>
        </div>
    )
}
