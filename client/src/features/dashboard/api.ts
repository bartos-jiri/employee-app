import { Employee } from "./types";

const BASE_URL = "http://localhost:3000";

export const getEmployees = () =>
  fetch(`${BASE_URL}/employees`).then((res) => res.json()) as Promise<
    Employee[]
  >;
