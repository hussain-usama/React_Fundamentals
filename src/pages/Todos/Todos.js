import React, { useContext, useCallback, useState, useEffect, useMemo } from "react";
import { Ctx } from "../../Provider/Provider";
import TodosChild from "./TodosChild/TodosChild";
import axios from "axios";
import Dropdown from "../../components/Dropdown";
import TableComponent from "../../components/Table";
import Grid from "@mui/material/Grid";

const apiPromise = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((doc) => resolve(doc))
      .catch((err) => reject(err));
  });
};

// const Todos = () => {
//   // const getContext=useContext(Ctx)
//   // console.log('PARENT RENDER')
//   const [increment, setIncrement] = useState(0);

//   useEffect(() => {
//     (async () => {
//       try {
//         let promiseAll = await Promise.all([apiPromise("https://jsonplaceholder.typicode.com/posts"),apiPromise("https://hub.dummyapis.com/delay?seconds=1"),]);
//         // console.log(promiseAll, "promiseAll");
//         callApiLoop();
//         callDependentApi();
//       } catch (error) {
//         console.log(error);
//       }
//     })();
//   }, []);

//   /* call apis with loop */
//   const callApiLoop = async () => {
//     let arrayUrl = ["https://jsonplaceholder.typicode.com/posts","https://jsonplaceholder.typicode.com/posts/1",];

//     /* WITH AND WITHOUT FOR LOOP */

//     let responseArray = await Promise.all(arrayUrl.map(async (x) => {
//         let response = await axios.get(x);
//         return response.data;
//       }));
//     console.log(responseArray,'responseArray')

//     let responseArray1 = [];
//     for (const element of arrayUrl) {
//       let response = await axios.get(element);
//       responseArray1.push(response);
//     }
//     console.log(responseArray1, "responseArray1");
//   };

//   /* call apis having dependency from previous api */
//   const callDependentApi = async () => {
//     let arrayUrl = ["https://jsonplaceholder.typicode.com/posts","https://jsonplaceholder.typicode.com/posts/1"];

//   };
//   return (
//     <div>
//       <h1>Parent</h1>
//       <p>Increment : {increment}</p>
//       <button onClick={() => setIncrement(increment + 1)}>+</button>
//       <TodosChild />
//     </div>
//   );
// };
// export default Todos;

const SubDropdownRecords=(value)=>{
  let array=[];
  let label="";
  switch (value) {
    case 'college':
      array=[  
        { id: "Urban", value: "Urban", text: "Urban" },
        { id: "Rural", value: "Rural", text: "Rural" }];
        label="Area"
      break;
    case 'MontToMatric':
      array=[
        { id: "MontToMatric", value: "MontToMatric", text: "Institutions from Montessori up to Class-X",},
        { id: "MontToMatric", value: "HigherAndSecondary", text: "Higher Secondary School"},
        { id: "MontToMatric",value: "OALevel",text: 'Institutions of "O" & "A" Level'},
        { id: "MontToMatric",value: "HigherLearning",text: "Degree awarding institutes and universities including Institutions having academic linkage / foreign collaboration/affiliation with any other institutions of higher learning"},
      ]
      label="School Education and Literacy Department"
      break;
    case 'HealthDepartment':
      array=[
        { id: "HealthDepartment",value: "HealthDepartment",text: "License to sell Drugs by Way of Retail Sale (Form-6)",},
        { id: "HealthDepartment",value: "Wholesale",text: "License to sell Drugs by Way of Wholesale 7A",},
        { id: "HealthDepartment",value: "Pharmacy",text: "License to sell Drugs in Pharmacy (Form-8)",},
        { id: "HealthDepartment",value: "NarcoticsandOtherControlledDrugs",text: "License to sell Narcotics and Other Controlled Drugs/ Substances (Form-9)",},
        { id: "HealthDepartment",value: "IndenterofDrugs",text: "License to Manufacturer /Importer /Indenter of Drugs (Form-7)",},
      ]
      label="Health Department"
      break;
    default:
      array=false
      break;
  }
  return {array , label};
}

const departmentDropdown = [
  { value: "college", text: "College Education Department" },
  { value: "labour", text: "Labour and Human Resources Department" },
  { value: "SFA", text: "Sindh Food Authority (SFA)" },
  { value: "HealthDepartment", text: "Health Department" },
  { value: "MontToMatric", text: "School Education and Literacy Department" },
];

const data = [
  // Urban Dropdown Data => College Education
  {
    dropdownId: 0,
    timeLineText: "10-12 Days",
    feeValue: "15000",
    validityYear: "3 Years",
    id: "Urban",
  },
  // Rural Dropdown Data => College Education
  {
    dropdownId: 0,
    timeLineText: "10-12 Days",
    feeValue: "20000",
    validityYear: "3 Years",
    id: "Rural",
  },
  // labour And Human Resource Department Dropdown Data
  {
    dropdownId: 0,
    timeLineText: "Same Day",
    feeValue: "",
    validityYear: "2 year",
    id: "labour",
  },
  {
    dropdownId: 0,
    timeLineText: "10 days",
    feeValue: "",
    validityYear: "2 year",
    id: "labour",
  },
  // SFA Dropdown Data
  {
    dropdownId: 0,
    timeLineText: "7 days",
    feeValue: "",
    validityYear: "",
    id: "SFA",
  },
  // Health Department Dropdown Data
  {
    dropdownId: 0,
    timeLineText: "3 Month",
    feeValue: "5000",
    validityYear: "",
    id: "HealthDepartment",
  },
  {
    dropdownId: 0,
    timeLineText: "3 Month",
    feeValue: "5000",
    validityYear: "",
    id: "Wholesale",
  },
  {
    dropdownId: 0,
    timeLineText: "3 Month",
    feeValue: "5000",
    validityYear: "",
    id: "Pharmacy",
  },
  {
    dropdownId: 0,
    timeLineText: "3 Month",
    feeValue: "5000",
    validityYear: "",
    id: "NarcoticsandOtherControlledDrugs",
  },
  {
    dropdownId: 0,
    timeLineText: "3 Month",
    feeValue: "5000",
    validityYear: "",
    id: "IndenterofDrugs",
  },
  // School Education and Literacy Department Dropdown Data
  {
    dropdownId: 0,
    timeLineText: "30 Days",
    feeValue: "7000",
    validityYear: "",
    id: "MontToMatric",
  },
  {
    dropdownId: 0,
    timeLineText: "30 Days",
    feeValue: "15000",
    validityYear: "",
    id: "HigherAndSecondary",
  },
  {
    dropdownId: 0,
    timeLineText: "30 Days",
    feeValue: "30000",
    validityYear: "",
    id: "OALevel",
  },
  {
    dropdownId: 0,
    timeLineText: "30 Days",
    feeValue: "20000",
    validityYear: "",
    id: "HigherLearning",
  },
];
const Todos = () => {
  const [departments, setDepartments] = useState(["college"])
  const [renderArray, setrenderArray] = useState([data[0]]);
  const [formObject, setformObject] = useState({ dpt: "college", area: "Urban" });
  const [count,setCount]=useState(1)

  useEffect(()=>{
    console.log(departments)
  },[departments])

  // const handleDepartment = (e) => {
  //   let value=e.target.value;
  //   let SubDropdownValue=SubDropdownRecords(value)?.array[0]?.value ?? ""
  //   setformObject((prevValue)=>({
  //     ...prevValue,
  //     dpt: value,
  //     area: SubDropdownValue
  //   }))
  //   handleGridData(value)
  // };

  // const handleArea = (e) => {
  //   setformObject((prevValue)=>({
  //     ...prevValue,
  //     area:e.target.value
  //   }))
  //   handleGridData(e.target.value)
  // };

  // const handleGridData=(dropdownValue)=>{
  //   let arr=data.filter(x=>x.id===dropdownValue);
  //   setrenderArray([...arr])
  //   console.log(arr)
  // }

    /* const RenderDropdowns=()=>{
    for (let i=0;i<count;i++){
      return (
        <Dropdown
          departLabel={"Department"}
          areaLabel={SubDropdownRecords(formObject.dpt).label ?? ""}
          departmentDropdown={departmentDropdown}
          areaDropdown={SubDropdownRecords(formObject?.dpt).array ?? []}
          departValue={formObject.dpt}
          areaValue={formObject.area}
          handleDepartment={handleDepartment}
          handleArea={handleArea}
          showArea={SubDropdownRecords(formObject?.dpt).array ?? false}
        />
      )
    }
  } */

  /* function RenderDropdowns(){
    let table=[];
    for (let i=0;i<count;i++){
      table.push(
        <Dropdown
          departLabel={"Department"}
          areaLabel={SubDropdownRecords(formObject.dpt).label ?? ""}
          departmentDropdown={departmentDropdown}
          areaDropdown={SubDropdownRecords(formObject?.dpt).array ?? []}
          departValue={formObject.dpt}
          areaValue={formObject.area}
          handleDepartment={handleDepartment}
          handleArea={handleArea}
          showArea={SubDropdownRecords(formObject?.dpt).array ?? false}
        />
      )
    }
    return table
  } */


  

  const IncrementDropdown = () => {
    let value=count+1
    setCount(value)
    let arr = [...departments]
    arr.push('college1')
    setDepartments(arr)
  }



  function onChange(e, ind) {
    try {
      let {value} = e.target
      let arr = [...departments]
      arr.splice(ind, 1, value)
      setDepartments(arr)
    } catch (error) {
      console.log(error)
    }
  }

  

  const abc = useMemo(() => {
    try {
      let data = {}
      /* function onChange(e) {
        try {
          let {value} = e.target
          // handleDepartment(e)
          let {array, label} = SubDropdownRecords(value)
          data = {value, array, label}
          console.log(array, label)
        } catch (error) {
          console.log(error)
        }
      }

      function onChange1(e) {
        try {
          let {value} = e.target
          // handleDepartment(e)
          data = value
        } catch (error) {
          console.log(error)
        }
      } */
      
      let element = new Array(count).fill(0).map((val, ind) => {
        return (
          <Dropdown
            key={ind}
            id={ind}
            departLabel={`"Department"${ind}`}
            // departLabel={"Department"}
            areaLabel={SubDropdownRecords(formObject.dpt).label ?? ""}
            departmentDropdown={departmentDropdown}
            // areaDropdown={SubDropdownRecords(formObject?.dpt).array ?? []}
            areaDropdown={data?.array ?? []}
            // departValue={formObject.dpt}
            // areaValue={formObject.area}
            handleDepartment={(e)=>{onChange(e, ind)}}
            // handleArea={onChange1}
            showArea={SubDropdownRecords(formObject?.dpt).array ?? false}
          />
        );
      });

      return {element, data}
    } catch (error) {
      console.log(error);
    }
  }, [count]);

  return (
    <>
      <h1>CLICK</h1>
      
      <Grid container spacing={2}>
        <Grid item md={3}>
          <div className="">
              {/* {RenderDropdowns()} */}
              {/* {new Array(count).fill(0).map(RenderDropdowns)} */}
              {abc.element}
          </div>
        </Grid>
        <Grid item md={1}>
          <button onClick={IncrementDropdown}>ADD</button>
        </Grid>
        <Grid item md={8}>
          <div>
            <TableComponent data={renderArray} />
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default Todos;
