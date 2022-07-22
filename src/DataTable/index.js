import {useEffect, useState} from 'react';
import Pagination from './Pagination';
import Table from './Table';
import DataTableSearch from './Search';
let temp = [];
export default function MyDataTable() {
let [data, setData] = useState([
  { name: 'Victor Xyp', title: 'FullStack Developer', email: 'VictorXypCh@example.com', role: 'Admin' },
  { name: 'Victor Xyp', title: 'FullStack Developer', email: 'VictorXypCh@example.com', role: 'Admin' },
  // More people...
]);


const add = () => {
    const newData = { name: '', title: 'Go Beyond', email: 'lindsay.walton@example.com', role: 'Member' };
    setData([...data,newData]);
    console.log(data);
}

const onSearch = (event) => {
    const searchStr = event.target.value.toLowerCase();
    if(data.length > temp.length) {
        console.log('set to temp');
        console.log(data);
        temp = data;
    } else {
        data = temp;
    }
    if(searchStr === '' || searchStr === null && temp.length > 0){
        console.log('reset from temp');
        setData([...temp]);
        console.log(data);
        return;
    } 

    const filteredData = data.filter((element) => {
        let values = Object.values(element);
        for(let i =0; i< values.length; i++ ){
            if(values[i].toLowerCase().indexOf(searchStr) != -1){
               return true; 
            }
        }
    });
    setData([...filteredData]);
}

    useEffect(() => {}, [data]);

    return (
        <>

        <DataTableSearch onChange={onSearch}/>
        <div>
            <div className="px-4 sm:px-6 lg:px-8">
              <Table data={data}/>
            </div>
        </div>

        {/*<Pagination /> */ }
        </>
    )
}

