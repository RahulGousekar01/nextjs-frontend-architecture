async function getInventoryData(page: number) {
  const res = await fetch(`https://api.example.com/inventory?page=${page}`, {
    next: { revalidate: 60 }, // ISR
  });

  return res.json();
}

export default async function InventoryPage({ searchParams }) {
  const page = searchParams.page || 1;
  const data = await getInventoryData(page);

  return (
    <div>
      <h1>Inventory</h1>
      <InventoryTable data={data} />
    </div>
  );
}
