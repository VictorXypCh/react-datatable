import logo from './logo.svg';
import './App.css';
import DataTable from './DataTable';
import {useEffect, useState} from 'react';
import $ from 'jquery'
function App() {

$.DataTable = require('datatables.net');

    const [data, setData] = useState([
        ["Garret Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
        ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"]
    ])

    const loadDataTable = (id) => {
            $(`#${id}`).DataTable(
                {
                data,
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
            );
    }

    useEffect(() => {
        //Re-render DataTable
        loadDataTable('myTable');

        // Unmount
        return function() {
            $("#myTable").DataTable().destroy();
        }
    }, [data]);

    const handleAdd = () => {
            const row = ["Victor", "Software Dev", "Savannakhet", "5421", "2011/04/25", "$320,800"];
            setData([...data, row]);
    }

  return (
    <div className="App">
      <button onClick={handleAdd}>add</button>
      <hr/>
      {/* <DataTable id="myTable" data={data}/> */}
            <table id="myTable" className="display" width="100%"></table>
    </div>
  );
}

export default App;
