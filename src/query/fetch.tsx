const APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

type Props<Request> = {
  method?: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  url: string;
  body?: Request;
};

const appFetch = async <Request = unknown, Response = Request>({
  method = "GET",
  url,
  body,
}: Props<Request>) => {
  const response = await fetch(`${APP_BASE_URL}${url}`, {
    method,
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok", {
      cause: response.json(),
    });
  }

  return response.json() as Response;
};

export default appFetch;
