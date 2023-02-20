import { useRouter } from "next/router";
import { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard/my_collection");
  }, [router]);

  return null;
};

export default Dashboard;
