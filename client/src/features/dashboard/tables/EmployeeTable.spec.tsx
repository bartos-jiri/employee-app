import { render, screen, waitFor } from "@testing-library/react";
import { EmployeeTable } from "./EmployeeTable";
import userEvent from "@testing-library/user-event";

const employees = [
  {
    id: 1,
    name: "John Doe",
    jobTitle: "Developer",
    tenure: "5",
    gender: "Male",
  },
  {
    id: 2,
    name: "Jane Smith",
    jobTitle: "Designer",
    tenure: "3",
    gender: "Female",
  },
  {
    id: 3,
    name: "Katie Purdy",
    jobTitle: "Manager",
    tenure: "19",
    gender: "Female",
  },
];

const loaderMock = vi.fn(() => new Promise((res) => res(employees)));

describe("EmployeeTable", () => {
  it("renders the table with correct headers", async () => {
    render(global.withRouter(<EmployeeTable />, { loader: loaderMock }));

    await waitFor(() => {
      expect(screen.getByText(/name/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/job title/i)).toBeInTheDocument();
    expect(screen.getByText(/tenure/i)).toBeInTheDocument();
    expect(screen.getByText(/gender/i)).toBeInTheDocument();
  });

  it("renders the table with employee data", async () => {
    render(global.withRouter(<EmployeeTable />, { loader: loaderMock }));

    await waitFor(() => {
      expect(screen.getByText(/name/i)).toBeInTheDocument();
    });

    employees.forEach((employee) => {
      const row = screen.getByText(employee.name).closest("tr");

      expect(row).toBeInTheDocument();
      expect(row).toHaveTextContent(employee.name);
      expect(row).toHaveTextContent(employee.jobTitle);
      expect(row).toHaveTextContent(employee.tenure);
      expect(row).toHaveTextContent(employee.gender);
    });
  });

  it("sorts the table by clicking on a header element", async () => {
    render(global.withRouter(<EmployeeTable />, { loader: loaderMock }));

    await waitFor(() => {
      expect(screen.getByText(/name/i)).toBeInTheDocument();
    });

    const nameHeader = screen.getByText(/name/i);
    const jobTitleHeader = screen.getByText(/job title/i);

    // 1. Not ordered

    const actualUnordered = screen.getAllByRole("row").slice(1);
    const expectedUnordered = employees.map((e) => e.name);

    expect(actualUnordered.length).toBe(expectedUnordered.length);

    actualUnordered.forEach((row, index) => {
      expect(row).toHaveTextContent(expectedUnordered[index]);
    });

    // 2. Ordered by name asc

    await userEvent.click(nameHeader);

    const actualNameAsc = screen.getAllByRole("row").slice(1);
    const expectedNameAsc = employees.map((e) => e.name);

    expectedNameAsc.sort((a, b) => a.localeCompare(b));

    expect(actualNameAsc.length).toBe(expectedNameAsc.length);

    actualNameAsc.forEach((row, index) => {
      expect(row).toHaveTextContent(expectedNameAsc[index]);
    });

    // 3. Ordered by name desc

    await userEvent.click(nameHeader);

    const actualNameDesc = screen.getAllByRole("row").slice(1);
    const expectedNameDesc = employees.map((e) => e.name);

    expectedNameDesc.sort((a, b) => b.localeCompare(a));

    expect(actualNameDesc.length).toBe(expectedNameDesc.length);

    actualNameDesc.forEach((row, index) => {
      expect(row).toHaveTextContent(expectedNameDesc[index]);
    });

    // 4. Ordered by title asc

    await userEvent.click(jobTitleHeader);

    const actualJobTitleAsc = screen.getAllByRole("row").slice(1);
    const expectedJobTitleAsc = employees.map((e) => e.jobTitle);

    expectedJobTitleAsc.sort((a, b) => a.localeCompare(b));

    expect(actualJobTitleAsc.length).toBe(expectedJobTitleAsc.length);

    actualJobTitleAsc.forEach((row, index) => {
      expect(row).toHaveTextContent(expectedJobTitleAsc[index]);
    });
  });
});
