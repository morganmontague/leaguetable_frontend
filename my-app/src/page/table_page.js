import NavbarLog from "../componets/navbarloged";
import Table from "../componets/table";
import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context/GlobalState";
import { useNavigate } from 'react-router-dom';
import request from "../services/api.request";


    function TablePage(props){


    let [data, setData] = useState([])
    let [state, dispatch] = useGlobalState();
    let navigate = useNavigate();

    console.log(state)

    useEffect(() => {
    async function testing(){
    let options = {
    url: 'teams/',
    method: 'GET', 
    }
    let resp = await request(options) 
    setData(resp.data)
    if (!data) {
        return;
      }
    }
    testing()
}, []
    )
console.log(data)

    


return (
    <>
    <NavbarLog />
    <Table data={data} />
    <div>
        test
    </div>
    </>
)
}

export default TablePage

