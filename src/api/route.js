export async function GET(request) {
  const users = [
    { id: 1, name: "jhon" },
    { id: 2, name: "hasan" },
    { id: 3, name: "kobir" }
  ];

  return new Response(JSON.stringify(users))
}
