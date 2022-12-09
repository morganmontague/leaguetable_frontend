import NavbarLog from "../componets/navbarloged";
import Table from "../componets/table";
import React, { useState, useEffect } from "react";
import request from "../services/api.request";


    function TablePage(){


    let [data, setData] = useState([])
    let [data2, setData2] = useState([])


    useEffect(() => {
    async function callAPI(){
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
    callAPI()
}, []
    )
console.log(data)

useEffect(() => {
    async function callAPI(){
    let options = {
    url: 'team_players/',
    method: 'GET', 
    }
    let resp = await request(options) 
    setData2(resp.data)
    if (!data2) {
        return;
      }
    }
    callAPI()
}, []
    )
console.log(data2)
    


return (
    <>
    <NavbarLog />
    <Table data={data} />
    </>
)
}

export default TablePage

