import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'

import './AdminPanel-style.css'

import AdminPanelControlNavCRUD from './AdminPanelControlNavCRUD'

export default function AdminPanel(){
    return(
        <div id = 'adminPanelBlock'>
            <div id = 'navBarAdmin'>
                <h1>Admin panel</h1>
                <Link to = '/admin/topics'><button>Статьи</button></Link>
                <Link to = '/admin/galleries'><button>Галереи</button></Link>
                <Link to = '/admin/news'><button>Новости</button></Link>
            </div>
            <div id = 'controlBlock'>
                <Switch>
                    <Route path = "/admin/:type">  
                        <AdminPanelControlNavCRUD/>
                    </Route>
                    {/* <Route path = "/admin/galleries">  
                        <AdminPanelControlNavCRUD/>
                    </Route>
                    <Route path = "/admin/news">  
                        <AdminPanelControlNavCRUD/>
                    </Route> */}
                </Switch>
            </div>
        </div>
    )
}