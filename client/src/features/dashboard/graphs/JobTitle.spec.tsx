import { render, screen, waitFor } from "@testing-library/react";
import { JobTitlePie } from "./JobTitlePie";

vi.mock("recharts", async (importOriginal) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const OriginalModule: any = await importOriginal();

  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <OriginalModule.ResponsiveContainer width={800} aspect={1}>
        {children}
      </OriginalModule.ResponsiveContainer>
    ),
  };
});

const employees = [
  { id: 1, name: "John Doe", jobTitle: "Developer", tenure: 2, gender: "Male" },
  {
    id: 2,
    name: "Jane Smith",
    jobTitle: "Designer",
    tenure: 3,
    gender: "Female",
  },
  {
    id: 3,
    name: "Adam Johnson",
    jobTitle: "Manager",
    tenure: 5,
    gender: "Female",
  },
  {
    id: 4,
    name: "Sarah Brown",
    jobTitle: "Engineer",
    tenure: 4,
    gender: "Female",
  },
];

const loaderMock = vi.fn(() => new Promise((res) => res(employees)));

describe("JobTitle", () => {
  it("renders the job titles pie", async () => {
    render(
      global.withRouter(
        <div
          style={{
            width: 650,
            height: 650,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <JobTitlePie />
        </div>,
        { loader: loaderMock }
      )
    );

    await waitFor(
      () => {
        expect(screen.getByText("Developer")).toBeInTheDocument();
      },
      { timeout: 5000 }
    );

    screen.debug();

    employees.forEach((e) => {
      expect(screen.getByText(e.jobTitle)).toBeInTheDocument();
    });

    expect(screen.getAllByText("1")).toHaveLength(4);
  });
});
