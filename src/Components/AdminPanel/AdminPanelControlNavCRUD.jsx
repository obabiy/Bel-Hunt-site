import React from 'react'
import { Link, useLocation, useRouteMatch, useParams } from 'react-router-dom'

import './AdminPanelControlNavCRUD-style.css'
import AdminPanelCreateNews from './AdminPanelCreateNews'
import AdminPanelDeleteNews from './AdminPanelDeleteNews'
import AdminPanelEditNews from './AdminPanelEditNews'
import AdminPanelCreateArticle from './AdminPanelCreateArticle'
import AdminPanelDeleteArticle from './AdminPanelDeleteArticle'
import AdminPanelEditArticle from './AdminPanelEditArticle'
import AdminPanelGalleryAddPhoto from './AdminPanelGalleryAddPhoto'
import AdminPanelGalleryDeletePhoto from './AdminPanelGalleryDeletePhoto'
import GalleryPhoto from '../Gallery/GalleryPhoto'

import AdminPanelExistantNews from './AdminPanelExistantNews'

export default function AdminPanelControlNavCRUD(){
    
    let location = useLocation().pathname
    let type = useParams().type;
    let rootPath = useRouteMatch().url

    return(
        <div id = 'crudBlock'>
            <div id = 'sectionHeader'>
                <div id = 'crudTitle'>
                    {/articles/.test(location) ? ('Статьи:') : null} 
                    {/galleries/.test(location) ? ('Галлереи:'):null}
                    {/news/.test(location) ? ('Новости:') : null}    
                    {/prices/.test(location) ? ('Цены:') : null}    
                </div>

                <div id = 'sectionHeaderLang'>
                    <div>RU</div>
                    <div>EN</div>
                    <div>DE</div>
                    <div>FR</div>
                    <div>ESP</div>
                    <div>ITL</div>
                </div>

                <div id = 'navCRUDBlock'>
                        <Link to = {`${rootPath}/create`}><button>Создать</button></Link>
                        <Link to = {`${rootPath}/edit`}><button>Редактировать</button></Link>
                        <Link to = {`${rootPath}/delete`}><button>Удалить</button></Link>
                </div>
            </div>

            <div id = 'operationBlock'>        
                {
                    /articles/.test(location) ?
                    (
                        // <AdminPanelExistantArticle/> 
                        null
                    ):
                    /news/.test(location) ?
                    (
                        <AdminPanelExistantNews/>
                    ):
                    /galleries/.test(location) ?
                    (
                        <p1></p1>
                    ):
                    (
                        <p1></p1>
                    )
                    
                    
                    
                    // /create/.test(location) ?                 //Creating something
                    // (
                    //     type === 'articles' ? (
                    //         <AdminPanelCreateArticle/>
                        
                    //     ): type === 'galleries' ? (
                    //         <AdminPanelGalleryAddPhoto/>
                        
                        
                        
                    //     ) : type === 'news' ? (
                    //         <AdminPanelCreateNews/>
                    //     ) : null
                    // ) : /edit/.test(location) ?                 //editing something
                    // (
                    //     type === 'articles' ? (
                    //         <AdminPanelEditArticle/>
                        
                        
                    //     ): type === 'galleries' ? (
                    //         <p>Edit gallery</p>
                        
                        
                        
                    //     ) : type === 'news' ? (
                    //         <AdminPanelEditNews/>
                        
                        
                        
                    //     ) : null
                    // ) : /delete/.test(location) ? (             //deleting something
                    //     type === 'articles' ? (
                    //         <AdminPanelDeleteArticle/>
                        
                        
                    //     ): type === 'galleries' ? (
                    //         <AdminPanelGalleryDeletePhoto/>
                        
                        
                        
                    //     ) : type === 'news' ? (
                    //         <AdminPanelDeleteNews />
                    //     ) : null
                    // ) : null
                    
                }

                
            </div>
        </div>
    )
}