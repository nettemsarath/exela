import axios from "axios";

const BILL = {
  id: 3,
  name: "",
  units_consumed: "10 units",
  bill_date: 1657522823679,
  paid_date: 1657522823679,
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
