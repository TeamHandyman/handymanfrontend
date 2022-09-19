// import React from 'react';
// import {useEffect} from 'react'
// import axios from "axios";

export const userColumns = [
    {field: "id", headerName: "ID", width: 70},
    {
        field: "user",
        headerName : "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt=""/>
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email", 
        headerName: "Email", 
        width: 230
    },
    {
        field: "category", 
        headerName: "Category", 
        width: 130
    },
    {
        field: "status", 
        headerName: "Status", 
        width: 160,
        renderCell: (params)=> {
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    }
];



//temp data
export const userRows = [

];