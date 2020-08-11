import React from 'react'
import { Link, useLocation, useRouteMatch, useParams } from 'react-router-dom'

import './AdminPanelControlNavCRUD-style.css'
import AdminPanelCreateTemplate from './AdminPanelCreateTemplate'
import AdminPanelDeleteTemplate from './AdminPanelDeleteTemplate'

export default function AdminPanelControlNavCRUD(){
    
    let location = useLocation().pathname
    let type = useParams().type;
    let rootPath = useRouteMatch().url

    return(
        <div id = 'crudBlock'>
            <div id = 'headerAdminPanel'>
                <div id = 'crudTitle'>
                    {/topics/.test(location) ? ('Статьи:') : null} 
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
                        type === 'topics' ? (
                            <p>Create topic</p>
                        
                        ): type === 'galleries' ? (
                            <p>Create gallery</p>
                        
                        
                        
                        ) : type === 'news' ? (
                            <AdminPanelCreateTemplate type="новости"/>
                        ) : null
                    ) : /edit/.test(location) ?                 //editing something
                    (
                        type === 'topics' ? (
                            <p>Edit topic</p>
                        
                        
                        ): type === 'galleries' ? (
                            <p>Edit gallery</p>
                        
                        
                        
                        ) : type === 'news' ? (
                            <p>Edit news</p>
                        
                        
                        
                        ) : null
                    ) : /delete/.test(location) ? (             //deleting something
                        type === 'topics' ? (
                            <p>Delete topic</p>
                        
                        
                        ): type === 'galleries' ? (
                            <p>Delete gallery</p>
                        
                        
                        
                        ) : type === 'news' ? (
                            <AdminPanelDeleteTemplate />
                        ) : null
                    ) : null
                    
                }
            </div>
        </div>
    )
}