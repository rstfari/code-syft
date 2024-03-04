import { API_KEY, CONTEXT_KEY } from "./keys";
import { useSearchParams } from "next/navigation";

export async function GET(request) {
  const useDummyData = false;

  const searchParams = request.nextUrl.searchParams;

  const search = searchParams.get("term");
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${search}&start=${startingIndex}`,
  );
  const data = await res.json();

  return Response.json({ data });
}
