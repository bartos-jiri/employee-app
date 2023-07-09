import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NewEmployeeForm } from "./NewEmployeeForm";
import { ActionFunctionArgs } from "react-router-dom";

const actionMock = vi.fn(async ({ request }: ActionFunctionArgs) =>
  Object.fromEntries(await request.formData())
);

describe("NewEmployeeForm", () => {
  it("renders the form with correct inputs and labels", () => {
    render(global.withRouter(<NewEmployeeForm />));

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/job title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tenure/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^male$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^female$/i)).toBeInTheDocument();
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });

  it("submits the form with valid data", async () => {
    render(global.withRouter(<NewEmployeeForm />, { action: actionMock }));

    const nameInput = screen.getByLabelText(/name/i);
    const jobTitleInput = screen.getByLabelText(/job title/i);
    const tenureInput = screen.getByLabelText(/tenure/i);
    const maleRadio = screen.getByLabelText(/^male$/i);
    const submitButton = screen.getByText(/submit/i);

    await userEvent.type(nameInput, "John Doe");
    await userEvent.type(jobTitleInput, "Developer");
    await userEvent.type(tenureInput, "5");
    await userEvent.click(maleRadio);
    await userEvent.click(submitButton);

    expect(actionMock.mock.results[0].value).toEqual({
      gender: "Male",
      jobTitle: "Developer",
      name: "John Doe",
      tenure: "5",
    });
  });

  it("sets required elements as invalid if empty", () => {
    render(global.withRouter(<NewEmployeeForm />));

    expect(screen.getByLabelText(/name/i)).toBeInvalid();
    expect(screen.getByLabelText(/job title/i)).toBeInvalid();
    expect(screen.getByLabelText(/tenure/i)).toBeInvalid();
    expect(screen.getByLabelText(/^male$/i)).toBeInvalid();
    expect(screen.getByLabelText(/^female$/i)).toBeInvalid();
  });
});
