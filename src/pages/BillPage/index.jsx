import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import {
    useMutation,
    useQuery,
    useQueryClient,
  } from 'react-query';

import {getElectricyBill, deleteBill} from "./api";
import Spinner from "../../Components/Spinner";
import {formatDate} from "../../utils/dates";

import "./billpage.css";

function BillPage(props) {
    const {id} = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient()

    const { data: bill , isLoading , error } = useQuery('electricitybill', async ()=>{
        const result = await getElectricyBill(id);
        return result;
    });
    const { mutateAsync: useDeleteBill } = useMutation(
        deleteBill,
        {
            onSuccess: deletedBill => {
                queryClient.invalidateQueries("electricitybills");
            }
        }
    );
    const NavigateToEdit = () => {
        navigate(`/bill/${id}/edit`);
    };
    const handleDelete = async () => {
       await useDeleteBill(id);
       navigate("/")
    };

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
            <div className='billpage_buttons' >
                <button style={{background: "red"}} onClick={handleDelete} >Delete</button>
                <button style={{background: "blue"}} onClick={NavigateToEdit} >Edit</button>
            </div>
        </div>
    );
};

export default BillPage;