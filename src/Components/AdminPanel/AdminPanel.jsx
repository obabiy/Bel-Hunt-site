import React, { useContext } from 'react'
import {Link, Switch, Route, useHistory} from 'react-router-dom'

import './AdminPanel-style.css'
import { Button } from '@material-ui/core'

import { auth } from '../../firebase'

import AdminPanelControlNavCRUD from './AdminPanelControlNavCRUD'
import { AuthContext } from '../../auth'

export default function AdminPanel(){

    const history = useHistory()

    const signOut = () => {
        auth.signOut();
        history.push("/signInAdmin");
    }

    return(
        <div id = 'adminPanelBlock'>
            <div id = 'navBarAdmin'>
                <h1>Admin panel</h1>
                <Link to = '/admin/articles'><button>Статьи</button></Link>
                <Link to = '/admin/galleries'><button>Галереи</button></Link>
                <Link to = '/admin/news'><button>Новости</button></Link>
                <Button onClick={signOut} variant='contained' color='primary'>
                    Вийти
                </Button>
            </div>
            <div id = 'controlBlock'>
                <Switch>
                    <Route path = "/admin/:type">  
                        <AdminPanelControlNavCRUD/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}