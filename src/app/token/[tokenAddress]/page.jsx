import { notFound } from "next/navigation";
import GridDetails from "./GridDetails";

const Page = async ({ params }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tokenOne?tokenAddress=${params.tokenAddress}`);

    if (!response.ok) {

      return notFound();  // Trigger Next.js' built-in 404 page
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return notFound();
    }

    const tokenData = await response.json();

    return (
      <main className="pt-24 pl-20 pr-4 pb-4 h-[200dvh] w-screen">
        <GridDetails tokenData={tokenData} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching token data:", error);
    // Handle different error types, such as network issues, unexpected formats, etc.
    return notFound();
  }
};

export default Page
