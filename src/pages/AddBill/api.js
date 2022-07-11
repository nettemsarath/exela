import axios from "axios";

export const addNewBill = async (data) => {
  console.log("DATA ISS", data);
  try {
    const response = await axios.post(
      "https://test.smartdhyana.com/greet",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
