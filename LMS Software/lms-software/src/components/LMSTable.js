// DynamicTable.js
import React from 'react';

const LMSTable = ({ tableData }) => {
  if (!tableData || tableData.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <div className='p-5'>
      <table className='shadow-2xl shadow-sky-900 w-full'>
        <thead className='bg-blue-700 text-white text-xl py-2 border-white text-center'>
          <tr>
            {Object.keys(tableData[0]).map((header, index) => (
              <th key={index} className='border-2 p-2'>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-blue-200 text-lg py-2 border-white text-center border'>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, columnIndex) => (
                <td key={columnIndex} className='border-2 p-1'>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LMSTable;
