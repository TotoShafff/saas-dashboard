export type OrderStatus = "pending" | "shipped" | "cancelled" | "refunded";

export type SortKey = "date_desc" | "date_asc" | "total_desc" | "total_asc";

export type Order = {
  id: string;
  customerName: string;
  email: string;
  date: string;
  total: number;
  status: OrderStatus;
};

// Deterministic mock pool — no Math.random() so data is stable across requests
const CUSTOMERS: Array<{ name: string; email: string }> = [
  { name: "Sarah Mitchell",    email: "s.mitchell@gmail.com" },
  { name: "James Thornton",   email: "jthornton@yahoo.com" },
  { name: "Priya Nair",       email: "priya.nair@outlook.com" },
  { name: "Carlos Vega",      email: "c.vega@gmail.com" },
  { name: "Emily Hartwell",   email: "emily.hartwell@icloud.com" },
  { name: "Liam O'Brien",     email: "liam.obrien@gmail.com" },
  { name: "Yuki Tanaka",      email: "y.tanaka@yahoo.co.jp" },
  { name: "Fatima Al-Hassan", email: "fatima.hassan@gmail.com" },
  { name: "Marcus Webb",      email: "m.webb@hotmail.com" },
  { name: "Nina Rossi",       email: "nina.rossi@gmail.com" },
  { name: "David Park",       email: "d.park@outlook.com" },
  { name: "Ana Flores",       email: "a.flores@gmail.com" },
  { name: "Tom Fischer",      email: "tom.fischer@web.de" },
  { name: "Chloe Lambert",    email: "chloe.lambert@icloud.com" },
  { name: "Omar Hassan",      email: "omar.hassan@gmail.com" },
];

const STATUSES: OrderStatus[] = [
  "shipped", "shipped", "shipped",
  "pending", "pending",
  "cancelled",
  "refunded",
];

const TOTALS = [
  24.99,  38.50,  52.00,  67.95,  89.00,
  110.49, 134.00, 159.99, 182.50, 204.00,
  229.95, 251.00, 278.50, 303.99, 325.00,
  349.50, 371.00, 398.99, 419.50, 445.00,
  468.95, 492.00, 515.50, 537.99, 560.00,
];

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function buildDate(year: number, month: number, day: number): string {
  return `${year}-${pad(month)}-${pad(day)}T${pad((day * 3) % 24)}:${pad((day * 7) % 60)}:00Z`;
}

// Generate 50 deterministic orders spread across 2024
export const ordersData: Order[] = Array.from({ length: 50 }, (_, i) => {
  const customer = CUSTOMERS[i % CUSTOMERS.length];
  const status   = STATUSES[i % STATUSES.length];
  const total    = TOTALS[i % TOTALS.length];

  const month = (i % 12) + 1;
  const day   = (i % 28) + 1;

  return {
    id:           `ORD-${String(1000 + i).padStart(4, "0")}`,
    customerName: customer.name,
    email:        customer.email,
    date:         buildDate(2024, month, day),
    total,
    status,
  };
});
