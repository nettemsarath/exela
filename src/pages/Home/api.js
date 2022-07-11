import axios from "axios";

const DATA = [
  {
    id: 1,
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
  },
  {
    id: 2,
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
  },
  {
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
  },
];

export const getElectricityBills = async () => {
  try {
    const response = await axios.get("https://test.smartdhyana.com/");
    return DATA;
  } catch (error) {
    throw error;
  }
};
