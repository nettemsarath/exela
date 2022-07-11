import React from 'react'
import { useParams } from 'react-router-dom';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from 'react-query';

import {getElectricyBill} from "./api";
import Spinner from "../../Components/Spinner";
import {formatDate} from "../../utils/dates";

import "./billpage.css";

function BillPage(props) {
    const {id} = useParams();
    console.log("params ARREE", id);
    const { data: bill , isLoading, error } = useQuery('electricitybill', async ()=>{
        const result = await getElectricyBill(id);
        return result;
     });
     if(isLoading) {
         return <Spinner />;
     };
     if (error) {
         return <span>Error: {error.message}</span>
     };

    return (
        <div className='billpage' >
            <div> <b>id: </b> {id} </div>
            <div> <b>name: </b> {bill.name} </div>
            <div> <b>bill_date: </b> {formatDate(bill.bill_date)} </div>
            <div> <b>paid_date: </b> {formatDate(bill.paid_date)} </div>
            <div> <b>amount: </b>  {bill.amount} </div>
            <div> <b>fixed_charge: </b> {bill.fixed_charge} </div>
            <div> <b>energy_charge: </b> {bill.energy_charge} </div>
            <div> <b>fuel_cost_adjustment_charge: </b> {bill.fuel_cost_adjustment_charge} </div>
            <div> <b>tax_or_electricity_duty: </b> {bill.tax_or_electricity_duty} </div>
            <div> <b>penality: </b> {bill.penality} </div>
            <div> <b>other_charges: </b> {bill.other_charges} </div>
        </div>
    );
};

export default BillPage;