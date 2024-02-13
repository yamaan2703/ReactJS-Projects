import { useEffect, useState } from "react";
import LMSTable from "../../components/LMSTable";
import { AppGet } from "../../config/firebaseMethods";

export default function InstituteList() {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    const instituteGetData = () => {
      AppGet("instituteForm")
        .then((res) => {
          console.log(res);
          setListData(res); 
        })
        .catch((err) => {
          console.log(err);
        });
    };

    instituteGetData();
  }, []);

  return (
    <>
      <div className="institute_list">
        <h1 className="text-3xl font-bold shadow-lg p-2 shadow-sky-900 text-center text-sky-900">
          Institute List
        </h1>
        {listData && listData.length > 0 ? (
          <LMSTable
            tableData={listData.map((x) => ({
              instituteName: x.instituteName,
              NoOfCampus: x.NoOfCampus,
              CampusEmail: x.CampusEmail,
              CampusContactNumber: x.CampusContactNumber
            }))}
          />
        ) : (
          <p className="text-center text-5xl text-sky-900 p-5 font-bold">
            No data available
          </p>
        )}
      </div>
    </>
  );
}


