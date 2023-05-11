import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
const Updatehome = () => {

    const[data,setData]=useState([])
    // const navigate=useNavigate()
    useEffect(()=>{
axios.get('http://localhost:5000/api/user')
.then(res=>setData(res.data))
.catch((err)=>console.log(err))
    },[])


  return (
    <div className='container bg-auto '>
        <table className='table m-10  table-caption'>
            <thead className='m-16'>
                <tr >   
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Pincode</th>
                    <th>Pan</th>
                    <th>Mobile</th>
                    <th>CreditScore</th>
                    <th>SuitFile</th>
                    <th>LoanAmount</th>
                    <th>Remarks</th>
                    <th>Action</th>


                </tr>
            </thead>
            <tbody >
                {data.map((d)=>(
                    <tr key={d}>
                        <td>{d.Id}</td>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td>{d.pincode}</td>
                        <td>{d.pan}</td>
                        <td>{d.phone}</td>
                        <td>{d.CreditScore}</td>
                        <td>{d.SuitFile}</td>
                        <td>{d.LoanAmount}</td>
                        <td>{d.remarks}</td>
                        <td className=' p-3 m-3'>
                            <Link to={`/update/${d.pan}`} className='bg-blue-300 p-3 m-3' onClick={()=>{}}>UpdateNow</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Updatehome