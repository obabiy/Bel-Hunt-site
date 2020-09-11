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

export default function AdminPanelControlNavCRUD(){
    
    let location = useLocation().pathname
    let type = useParams().type;
    let rootPath = useRouteMatch().url

    return(
        <div id = 'crudBlock'>
            <div id = 'headerAdminPanel'>
                <div id = 'crudTitle'>
                    {/articles/.test(location) ? ('Статьи:') : null} 
                    {/galleries/.test(location) ? ('Галлереи:'):null}
                    {/news/.test(location) ? ('Новости:') : null}    
                </div>

                <div id = 'navCRUDBlock'>
                        <Link to = {`${rootPath}/create`}><button>Создать</button></Link>
                        <Link to = {`${rootPath}/edit`}><button>Редактировать</button></Link>
                        <Link to = {`${rootPath}/delete`}><button>Удалить</button></Link>
                </div>
            </div>

            <div id = 'operationBlock'>        
                {
                    /create/.test(location) ?                 //Creating something
                    (
                        type === 'articles' ? (
                            <AdminPanelCreateArticle/>
                        
                        ): type === 'galleries' ? (
                            <AdminPanelGalleryAddPhoto/>
                        
                        
                        
                        ) : type === 'news' ? (
                            <AdminPanelCreateNews/>
                        ) : null
                    ) : /edit/.test(location) ?                 //editing something
                    (
                        type === 'articles' ? (
                            <AdminPanelEditArticle/>
                        
                        
                        ): type === 'galleries' ? (
                            <p>Edit gallery</p>
                        
                        
                        
                        ) : type === 'news' ? (
                            <AdminPanelEditNews/>
                        
                        
                        
                        ) : null
                    ) : /delete/.test(location) ? (             //deleting something
                        type === 'articles' ? (
                            <AdminPanelDeleteArticle/>
                        
                        
                        ): type === 'galleries' ? (
                            <AdminPanelGalleryDeletePhoto/>
                        
                        
                        
                        ) : type === 'news' ? (
                            <AdminPanelDeleteNews />
                        ) : null
                    ) : null
                    
                }
            </div>
        </div>
    )
}