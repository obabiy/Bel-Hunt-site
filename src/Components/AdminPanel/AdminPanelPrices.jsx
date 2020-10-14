import React, { useState, useEffect } from 'react'

import './AdminPanelPrices-style.css'

import AdminPanelPricesTable from './AdminPanelPricesTable'
import { db } from '../../firebase'

function AdminPanelPrices() {

    const [tables, setTables] = useState([]);

    useEffect(() => {
        db.collection('pricesTables').onSnapshot((snapshot)=>{
            setTables(snapshot.docs.map((doc)=>({
                
            })))
        })
    }, []);

    return (
        <div className = 'adminPanel_prices'>
            
        </div>
    )
}

export default AdminPanelPrices
