
const TOKEN = import.meta.env.VITE_TOKEN;
const MODEL = import.meta.env.VITE_MODEL;

export async function query(data: object) {
  const response = await fetch(MODEL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  let result = await response.blob();

  return result;
}