import { BASE_URL } from "../../const";
import { Employee } from "../../models/Employee";

export const getEmployees = () =>
  fetch(`${BASE_URL}/employees`).then((res) => res.json()) as Promise<
    Employee[]
  >;
