import NavbarLog from "../componets/navbarloged";
import Table from "../componets/table";
import React, { useState, useEffect } from "react";
import request from "../services/api.request";


    function TablePage(props){


    let [data, setData] = useState([])


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

