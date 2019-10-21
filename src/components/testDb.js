import React from 'react';
import dataBase from '../db.js';

export default function TestJsonDB() {
            return(
            <div>
                <p>{dataBase.Chef.id}</p>
                <p>{dataBase.Chef.email}</p>
                <p>{dataBase.Chef.password}</p>                
            </div>
        )
    }