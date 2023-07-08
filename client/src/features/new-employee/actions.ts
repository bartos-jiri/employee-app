import { ActionFunction, redirect } from "react-router-dom";
import { createEmployee } from "./api";
import { Employee } from "../../models/Employee";

export const createEmployeeAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData) as unknown as Employee;

  await createEmployee(data);

  return redirect("/");
};
