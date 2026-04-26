export type ApiResult<T> =
  | {
      ok: true;
      status: number;
      body: T;
    }
  | {
      ok: false;
      status: number;
      errorMessage: string;
    };

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export async function getCurrentNumber(): Promise<
  ApiResult<{ latestNumber: number }>
> {
  const apiResult = await fetch(`${API_URL}/test/currentNumber`);
  if (apiResult.ok) {
    return {
      ok: apiResult.ok,
      status: apiResult.status,
      body: await apiResult.json(),
    };
  } else {
    return {
      ok: apiResult.ok,
      status: apiResult.status,
      errorMessage: "Unable to get current number.",
    };
  }
}
