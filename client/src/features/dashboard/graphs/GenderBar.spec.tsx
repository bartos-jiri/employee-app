import { render, screen, waitFor } from "@testing-library/react";
import { GenderBar } from "./GenderBar";

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

describe("GenderBar", () => {
  it("renders the gender bars", async () => {
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
          <GenderBar />
        </div>,
        { loader: loaderMock }
      )
    );

    await waitFor(() => {
      expect(screen.getByText("Male")).toBeInTheDocument();
    });

    screen.debug();

    expect(screen.getByText("Male")).toBeInTheDocument();
    expect(screen.getByText("Female")).toBeInTheDocument();
    expect(screen.getByText("3", { selector: "tspan" })).toBeInTheDocument();
  });
});
