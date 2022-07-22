import React, { useEffect, useRef } from "react"
import $ from 'jquery'
 
export default function DataTable({id, data}) {
 
$.DataTable = require('datatables.net')
const tableRef = useRef()
 
useEffect(() => {
    const table = $(tableRef.current).DataTable(
        {
            data: data,
                columns: [
                    { title: "Name"},
                    { title: "Position"},
                    { title: "Office"},
                    { title: "Extn."},
                    { title: "Start data"},
                    { title: "Salary"}
                ],
                destroy: true  // I think some clean up is happening here
        }
    )
    // Extra step to do extra clean-up.
    return function() {
        console.log("Table destroyed")
        table.destroy()
    }
},[])
    return (
        <div>
            <table id={id} className="display" width="100%" ref={ tableRef }></table>
        </div>
         
    )
}
