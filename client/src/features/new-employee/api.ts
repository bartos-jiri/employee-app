import { BASE_URL } from "../../const";
import { Employee } from "../../models/Employee";

export const createEmployee = (data: Omit<Employee, "id">) =>
  fetch(`${BASE_URL}/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
