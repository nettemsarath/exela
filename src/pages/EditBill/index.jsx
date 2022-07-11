import React, {useEffect} from 'react'
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {useMutation, useQueryClient, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom';

import Spinner from "../../Components/Spinner";
import {getElectricyBill, updateBill} from "./api";

import "./editBill.css";

function EditBill() {
  const {id} = useParams();
  const navigate = useNavigate();

  const { control, register, handleSubmit, formState: { errors }, watch, reset } = useForm({
    reValidateMode: 'onChange',
    defaultValues: {
      name: "",
      units_consumed: "",
      bill_date: "",
      paid_date: "",
      amount: "",
      fixed_charge: "",
      energy_charge: "",
      fuel_cost_adjustment_charge: "",
      tax_or_electricity_duty: "",
      penality: "",
      other_charges: ""
    }
  });

  const queryClient = useQueryClient()
  useQuery('electricitybill', async ()=>{
    const result = await getElectricyBill(id);
    return result;
  },{
    onSuccess: ( bill) => {
      reset({
        name: bill.name,
        units_consumed: bill.units_consumed,
        bill_date: bill.bill_date,
        paid_date: bill.paid_date,
        amount: bill.amount,
        fixed_charge: bill.fixed_charge,
        energy_charge: bill.energy_charge,
        fuel_cost_adjustment_charge: bill.fuel_cost_adjustment_charge,
        tax_or_electricity_duty: bill.tax_or_electricity_duty,
        penality: bill.penality,
        other_charges: bill.other_charges
      });
    }
  });
  const { mutateAsync: useUpdateBill, isLoading: isUpdating } = useMutation(
    updateBill,
    {
        onSuccess: updatedBill => {
          queryClient.invalidateQueries("electricitybills");
        }
    }
  );
  const onSubmit = async data => {
    console.log(data);
    await useUpdateBill(id, data);
    navigate("/");
  };
  if(isUpdating){
    return <Spinner />
  }
  return (
    <div className='editBill' >

      <form onSubmit={handleSubmit(onSubmit)}>
          <div className='editBill_header' > Add New Bill </div>
          <div className='form_div' >
              <div className='form_name' >
                  <label>First Name: </label>
              </div>
              <div className='form_input'>
                <input name="name" {...register('name')} />

              </div>
          </div>

          <div className='form_div' >
              <div className='form_name' >
                  <label>Units Consumed: </label>
              </div>
              <div className='form_input'>
                <input name="units_consumed" {...register('units_consumed')} />

              </div>
          </div>

          <div className='form_div' >
              <div className='form_name' >
                  <label>Bill Date: </label>
              </div>
              <div className='form_input'>
                <input name="bill_date" type="date" {...register('bill_date')} />

              </div>
          </div>
          
          <div className='form_div' >
              <div className='form_name' >
                <label>Paid Date: </label>
              </div>
              <div className='form_input'>
                <input name="paid_date" type="date" {...register('paid_date')} />
              </div>
          </div>

          <div className='form_div' >
              <div className='form_name' >
                  <label>Amount: </label>
              </div>
              <div className='form_input'>
                <input name="amount" {...register('amount')} />

              </div>
          </div>

          <div className='form_div' >
              <div className='form_name' >
                  <label>Fixed Charge: </label>
              </div>
              <div className='form_input'>
                <input name="fixed_charge" {...register('fixed_charge')} />
              </div>
          </div>

          <div className='form_div' >
              <div className='form_name' >
                  <label> Energy Charge: </label>
              </div>
              <div className='form_input'>
                <input name="energy_charge" {...register('energy_charge')} />

              </div>
          </div>

          <div className='form_div' >
              <div className='form_name' >
                  <label> Fuel Cost Adjustment Charge: </label>
              </div>
              <div className='form_input'>
                <input name="fuel_cost_adjustment_charge" {...register('fuel_cost_adjustment_charge')} />

              </div>
          </div>

          <div className='form_div' >
              <div className='form_name' >
                  <label>Tax or Electricity Duty Charge: </label>
              </div>
              <div className='form_input'>
                <input name="tax_or_electricity_duty" {...register('tax_or_electricity_duty')} />

              </div>
          </div>

          <div className='form_div' >
              <div className='form_name' >
                  <label> penality: </label>
              </div>
              <div className='form_input'>
                <input name="penality" {...register('penality')} />
              </div>
          </div>

          <div className='form_div' >
              <div className='form_name' >
                <label> Other Charges: </label>
              </div>
              <div className='form_input'>
                <input name="other_charges" {...register('other_charges')} /> 
              </div>

          </div>

          <div className='editBill_submit'>
            <button type='submit' > Update </button> 
          </div>

      </form>
    </div>
  )
};

export default EditBill;
