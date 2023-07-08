import { useLoaderData } from "react-router-dom";

export const Dashboard: React.FC = () => {
  const employees = useLoaderData();

  console.log({ employees });

  return <div>Dashboard</div>;
};
