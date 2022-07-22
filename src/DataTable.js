
import {useEffect, useState} from 'react';
import $ from 'jquery'

export default function DataTable () {


$.DataTable = require('datatables.net');

    const [data, setData] = useState([
        ["Garret Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
        ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
    ])

   const loadDataTable = (id) => {
       //Search
            $('div.dataTables_filter input').addClass('shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md');
       //Prev
            $(`#${id}_previous`).addClass('relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50');

       //
        $(`#myTable_previous`).html(' <span className="sr-only">Previous</span> <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />');
        $(`#myTable`).DataTable()


   }


    useEffect(() => {
        //Re-render DataTable
        loadDataTable('myTable');

        // Unmount
       //return function() {
       //    $("#myTable").DataTable().destroy();
       //}
    }, [data]);

    const handleAdd = () => {
            const row = ["Victor", "Software Dev", "Savannakhet", "5421", "2011/04/25", "$320,800"];
            setData([...data, row]);
    }

  return (
    <div className="App">
       <button
        type="button"
        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleAdd}
      >
        Add
      </button>
      <hr/>
      {/* <DataTable id="myTable" data={data}/> */}
         <table id="myTable" className="datatable min-w-full divide-y divide-gray-300" width="100%">
         <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Title
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.map((item) => (
                    <tr key={item[0]}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {item[0]}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {item[1]}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item[2]}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item[3]}</td>
                    </tr>
                  ))}
                </tbody>
      </table>
    </div>
  );
}
