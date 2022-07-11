import React from 'react'
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {useMutation} from "react-query";
import { useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom';

import { addNewBill } from "./api";

import "./addBill.css";

const schema = yup.object().shape({
  name: yup.string().required('Name is Requiired'),
  units_consumed: yup.string().required("units_consumed is Required"),
  bill_date: yup.string().required("bill date is Required"),
  paid_date: yup.string().required("paid date is Required"),
  amount: yup.string().required("amount is Required"),
  fixed_charge: yup.string().required("fixed charge is Required"),
  energy_charge: yup.string().required("energy charge is Required"),
  fuel_cost_adjustment_charge: yup.string().required("fuel cost adjustment charge is Required"),
  tax_or_electricity_duty: yup.string().required("tax or electricity duty is Required"),
  penality: yup.string().required("penality is Required"),
  other_charges: yup.string().required("Other charges is Required"),
});


function AddBill() {
  const queryClient = useQueryClient();
  const nvaigate = useNavigate();

  const { mutateAsync: useCreatenewBill, isLoading } = useMutation(
    addNewBill,
    {
      onSuccess: createdbill => {
        console.log("createdbill", createdbill);
        // queryClient.setQueryData(["electricitybills"], oldelectricitybills => [
        //   ...oldelectricitybills,
        //   createdbill,
        // ]);
        queryClient.invalidateQueries("electricitybills");
      },
    },
  );

  const { control, register, handleSubmit, formState: { errors }, watch, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    console.log(data);
    await useCreatenewBill(data);
    nvaigate("/");
  };

  return (
    <div className='addBill' >
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className='addbill_header' > Add New Bill </div>
          <div className='form_div' >
              <div className='form_name' >
                  <label>First Name: </label>
              </div>
              <div className='form_input'>
                <input name="name" {...register('name')} />
                {errors.name && (
                  <div>
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      {errors.name?.message}
                    </span>
                  </div>
                )}
              </div>
          </div>

          <div className='form_div' >
              <div className='form_name' >
                  <label>Units Consumed: </label>
              </div>
              <div className='form_input'>
                <input name="units_consumed" {...register('units_consumed')} />
                {errors.units_consumed && (
                  <div>
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      {errors.units_consumed?.message}
                    </span>
                  </div>
                )}
              </div>
          </div>

          <div className='form_div' >
              <div className='form_name' >
                  <label>Bill Date: </label>
              </div>
              <div className='form_input'>
                <input name="bill_date" type="date" {...register('bill_date')} />
                {errors.bill_date && (
                  <div>
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      {errors.bill_date?.message}
                    </span>
                  </div>
                )}
              </div>
          </div>
          
          <div className='form_div' >
              <div className='form_name' >
                <label>Paid Date: </label>
              </div>
              <div className='form_input'>
                <input name="paid_date" type="date" {...register('paid_date')} />
                {errors.paid_date && (
                  <div>
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      {errors.paid_date?.message}
                    </span>
                  </div>
                )}
              </div>
          </div>

          <div className='form_div' >
              <div className='form_name' >
                  <label>Amount: </label>
              </div>
              <div className='form_input'>
                <input name="amount" {...register('amount')} />
                {errors.amount && (
                  <div>
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      {errors.amount?.message}
                    </span>
                  </div>
                )}
              </div>
          </div>

          <div className='form_div' >
              <div className='form_name' >
                  <label>Fixed Charge: </label>
              </div>
              <div className='form_input'>
                <input name="fixed_charge" {...register('fixed_charge')} />
                {errors.fixed_charge && (
                  <div>
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      {errors.fixed_charge?.message}
                    </span>
                  </div>
                )}
              </div>
          </div>

          <div className='form_div' >
              <div className='form_name' >
                  <label> Energy Charge: </label>
              </div>
              <div className='form_input'>
                <input name="energy_charge" {...register('energy_charge')} />
                {errors.energy_charge && (
                  <div>
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      {errors.energy_charge?.message}
                    </span>
                  </div>
                )}
              </div>
          </div>

          <div className='form_div' >
              <div className='form_name' >
                  <label> Fuel Cost Adjustment Charge: </label>
              </div>
              <div className='form_input'>
                <input name="fuel_cost_adjustment_charge" {...register('fuel_cost_adjustment_charge')} />
                {errors.fuel_cost_adjustment_charge && (
                  <div>
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      {errors.fuel_cost_adjustment_charge?.message}
                    </span>
                  </div>
                )}
              </div>
          </div>

          <div className='form_div' >
              <div className='form_name' >
                  <label>Tax or Electricity Duty Charge: </label>
              </div>
              <div className='form_input'>
                <input name="tax_or_electricity_duty" {...register('tax_or_electricity_duty')} />
                {errors.tax_or_electricity_duty && (
                  <div>
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      {errors.tax_or_electricity_duty?.message}
                    </span>
                  </div>
                )}
              </div>
          </div>

          <div className='form_div' >
              <div className='form_name' >
                  <label> penality: </label>
              </div>
              <div className='form_input'>
                <input name="penality" {...register('penality')} />
                {errors.penality && (
                  <div>
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      {errors.penality?.message}
                    </span>
                  </div>
                )}
              </div>
          </div>

          <div className='form_div' >
              <div className='form_name' >
                <label> Other Charges: </label>
              </div>
              <div className='form_input'>
                <input name="other_charges" {...register('other_charges')} /> 
                {errors.other_charges && (
                  <div>
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      {errors.other_charges?.message}
                    </span>
                  </div>
                )}
              </div>

          </div>

          <div className='addbill_submit'>
            <button type='submit' > Submit </button> 
          </div>

      </form>
    </div>
  )
};

export default AddBill;


/*

function Form() {
    return (
        <div className='container' >
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='header' > User Form </div>
  
            <div className='form_div' >
                <div className='form_name' >
                    <label>First Name: </label>
                </div>
                <div className='form_input'>
                    <input name="first_name" {...register('first_name')} />
                
                </div>
            </div>
            <div className='form_div' >
                <div className='form_name' >
                    <label>Last Name: </label>
                </div>
                <div className='form_input'>
                    <input name='last_name' {...register('last_name')} />
                </div>
            </div>
            <div className='form_div' >
                <div className='form_name' >
                    <label>Email: </label>
                </div>
                <div className='form_input'>
                    
                    <Controller
                        control={control}
                        render={ ({ field: { onChange, value } }) => (
                            <Input onChange={onChange} />
                        )}
                        name="email"
                    />
                </div>
            </div>
            <div className='form_div' >
                <div className='form_name' >
                    <label>Mobile: </label>
                </div>
                <div className='form_input' >
                
                <Controller
                    control={control}
                    render={ ({ field: { onChange, value } }) => (
                        <PhoneInput onChange={onChange} value={value} defaultCountry="IN" />
                    )}
                    name="mobile"
                />

                </div>
            </div>

            <div  className='form_div'>
                <div className='form_name' >
                    <label>Gender: </label>
                </div>
                <div className='form_input'>
                    <label>
                        <input type="radio" name="gender" value="male" {...register('gender')} />
                        <span className="checkmark"></span>Male
                    </label>
                    <label >
                        <input type="radio" name="gender" value="female" {...register('gender')} />
                        <span ></span>
                        Female
                    </label>
                </div>
            </div>

            <div className='form_div' >
                <div className='form_name' >
                    <label>Address: </label>
                </div>
                <div className='form_input' >
                    <input type="text" name="address" {...register('address')} />
                </div>
            </div>

            <div className='form_div' >
                <div className='form_name' >
                    <label>Country: </label>
                </div>
                <div className='form_input' >
                    <select name='country' {...register('country')}>
                        <option value=""></option>
                        <option value="india" >India</option>
                        <option value="USA" >USA</option>
                        <option value="nepal" >India</option>
                        <option value="UK" >UK</option>
                        <option value="Aus" >Aus</option>
                        <option value="Canada" >Canada</option>
                    </select>
                </div>
            </div>

            <div className='form_div' >
                <div className='form_name' >
                    <label>Games Intrested</label>
                </div>
                <div className='form_input games' >
                    <label >
                        <input type="checkbox" name="games" value="hockey" {...register('games')}/>
                        <span></span>
                        Hockey
                    </label>
                    <label>
                        <input type="checkbox" name="games" value="football" {...register('games')} />
                        <span></span>
                        FootBall
                    </label>
                    <label>
                        <input type="checkbox" name="games" value="badminton" {...register('games')} />
                        <span></span>
                        Badminton
                    </label>
                    <label>
                        <input type="checkbox" name="games" value="cricket" {...register('games')} />
                        <span></span>
                        Cricket
                    </label>
                    <label >
                        <input type="checkbox" name="games" value="volleyball" {...register('games')} />
                        <span></span>
                        VolleyBall
                    </label>
                </div>
            </div>

            <div className='form_div' >
                <div className='form_name' >
                <label> Resume: </label> 
                </div>
                <div className='form_input' >
                    <label htmlFor='fileUpload' > 
                        <img src={UploadIcon} alt="fileuploadIcon" />
                    </label>
                    <input
                        className='resume'
                        id="fileUpload"
                        type="file"
                        name="resume"
                        {...register("resume")}
                    />
                    <span> { watch("resume") && watch("resume")[0].name } </span> 
                </div>
            </div>

            <div className='form_div' >
                <div className='form_name' >
                <button onClick={onCancel} >Cancel</button>
                </div>
                <div className='form_input' >
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
        </div>
    )
};

export default Form;



*/