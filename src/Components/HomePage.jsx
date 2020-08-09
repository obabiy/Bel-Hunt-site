import React, { useState, useEffect } from 'react'

import './HomePage-style.css'

import DoublePartTitle from './DoublePartTitle'
import NewsCardHomePage from './NewsCardHomePage'

import db from '../firebase'

export default function HomePage(){

    const [news, setNews] = useState([]);
    const [visibleNews, setVisibleNews] = useState([])
    
    useEffect(() => {
        
        db.collection('news')
            .orderBy('timestamp', 'desc')
            .onSnapshot( snapshot => {
                setNews(snapshot.docs.map(doc => ({
                    title: doc.data().title,
                    text: doc.data().text,
                    id: doc.id
                })))
            })
        
    },[])

    useEffect(() => {
        setVisibleNews(news.slice(0,3))
    }, [news]);

    
    
    return(
        <div id = 'homePageContainer'>
            <DoublePartTitle firstPartBold = "Охотимся на живность" firstPartNormal = " на территории Белоруссии" secondPartNormal = "Добро пожаловать на наш сайт, посвященный организации охотничьих туров на " secondPartColored = "территории Белоруссии."/>
            <div id = 'galleriesBlock'>
                <div className = 'gallery' id = 'gal1'>
                    <div className = "fadeBlock">
                        <span>Фото трофеев</span>
                    </div>
                </div>

                <div className = 'gallery' id = 'gal2'>
                    <div className = "fadeBlock">
                        <span>Охотничьи дома</span>
                    </div>              
                </div>
            </div>

            <div id = 'descriptionText'>
                За годы работы в сфере охотничьего туризма был накоплен уникальный опыт, который наряду с самой обширной базой контактов с охотничьими хозяйствами и Национальными Парками позволяет составлять и реализовывать программы охот, максимально соответствующие запросам клиентов.
            </div>


            <img className = 'transition' id = 'topTransition' src = './img/top-transition.png'/>    

            <div id = "animalNavContainer">
                <div className = 'titleNav'>На кого <span>охотимся?</span></div>
                <div id = 'animalNavBlockContainer'>
                    
                    <div className = "navPart">
                        <div className = 'navCard1'>
                            <div className = "fadeBlock">
                                <span>Охота на лося</span>
                            </div> 
                        </div>
                        <div className = 'navCard2'>
                            <div className = "fadeBlock">
                                <span>Охота на зубра</span>
                            </div> 
                        </div>
                        <div className = 'navCard2'>
                            <div className = "fadeBlock">
                                <span>Охота на кабана</span>
                            </div>  
                        </div>
                        <div className = 'navCard1'>
                            <div className = "fadeBlock">
                                <span>Охота на косулю</span>
                            </div> 
                        </div>
                    </div>

                    <div className = "navPart">
                        <div className = 'navCard2'>
                            <div className = "fadeBlock">
                                <span>Охота на волка</span>
                            </div> 
                        </div>
                        
                        <div className = 'navCard2'>
                            <div className = "fadeBlock">
                                <span>Охота на глухаря</span>
                            </div> 
                        </div>
                        <div className = 'navCard1'>
                            <div className = "fadeBlock">
                                <span>Охота на вальдшнепа</span>
                            </div> 
                        </div>
                        
                        <div className = 'navCard2'>
                            <div className = "fadeBlock">
                                <span>Охота на куропатку</span>
                            </div> 
                        </div>
                        <div className = 'navCard2'>
                            <div className = "fadeBlock">
                                <span>Охота на бекаса</span>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <img className = 'transition' id = 'bottomTransition' src = './img/bottom-transition.png'/>

            <div id = "huntingNewsContainer">
                <div className = 'titleNav'><span>Охотничьи</span> новости</div>
            
                <div id = "newsContainer">
                {   
                    visibleNews.map(oneNews => (
                        <NewsCardHomePage title={oneNews.title} text={oneNews.text}/>
                    ))
                }
                </div>
            
            </div>
            
            <img className = 'transition' src = './img/top-transition.png'/>

            <div id = "feedbackForm">
                
                <div id = "titleFeedback">Возникли вопросы?</div>
                <div id = "descriptionFeedback">Мы ответим на ваши вопросы</div>
                <div id = "inputBlock">
                    <input placeholder="Ваш телефон или E-mail"/>
                    <button>Отправить</button>
                </div>
            </div>
        
        </div>
    )
}