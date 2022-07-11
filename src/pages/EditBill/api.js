import axios from "axios";

const BILL = {
  id: 3,
  name: "",
  units_consumed: "10 units",
  bill_date: "12-02-2022",
  paid_date: "12-02-2022",
  amount: "₹500",
  fixed_charge: "₹200",
  energy_charge: "₹50",
  fuel_cost_adjustment_charge: "₹10",
  tax_or_electricity_duty: "₹20",
  penality: "₹0",
  other_charges: "₹50",
};

export const getElectricyBill = async (ID) => {
  try {
    const response = await axios.get(`https://test.smartdhyana.com`);
    return BILL;
  } catch (error) {
    throw error;
  }
};

export const updateBill = async (ID, updateFields) => {
  try {
    const response = await axios.get(`https://test.smartdhyana.com`);
    return BILL;
  } catch (error) {
    throw error;
  }
};
