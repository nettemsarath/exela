import React from 'react'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from 'react-query';
import { useNavigate } from "react-router-dom";

import {getElectricityBills} from "./api";
import Spinner from "../../Components/Spinner";
import {formatDate} from "../../utils/dates";

import "./home.css";

const Home = () => {
    const navigete = useNavigate();
    const { data: bills = [] , isLoading, error } = useQuery('electricitybills', async ()=>{
       const result = await getElectricityBills();
       return result;
    });
    if(isLoading) {
        return <Spinner />;
    };
    if (error) {
        return <span>Error: {error.message}</span>
    };
    const handleNavigate = (routeTo)=>{
        navigete(`${routeTo}`)
    };

    return (<div className='home' >
        <h2>Electricy Bill</h2>
        <div>
            <table>
            <thead>
                <tr>
                    <th>Bill Date</th>
                    <th>Units Consumed</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
            </thead>
            {
                bills.map(bill => <BillComponent key={bill.id} bill={bill} handleNavigate={handleNavigate} />  )
            }
            </table>
            <div className='addbill' >
                <button onClick={ ()=> handleNavigate("/addBill") } > Add Bill </button>
            </div>
        </div>
    </div>);
};


const BillComponent = (props)=>{
    const {bill, handleNavigate} = props;
    const handleClick = ()=>{
        handleNavigate(`/bill/${bill.id}`)
    };
    return(
        <tbody>
        <tr>
            <td> { formatDate(bill.bill_date) } </td>
            <td> {bill.units_consumed} </td>
            <td> {bill.amount} </td>
            <td> <button onClick={handleClick} > More Details </button> </td>
        </tr>
        </tbody>
    )
};

export default Home;