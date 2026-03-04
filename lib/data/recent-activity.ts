export type ActivityStatus = "completed" | "pending" | "failed";

export type ActivityItem = {
  id: string;
  userName: string;
  userEmail: string;
  action: string;
  date: string;
  status: ActivityStatus;
};

export const recentActivityData: ActivityItem[] = [
  {
    id: "act-001",
    userName: "Sarah Mitchell",
    userEmail: "s.mitchell@acmecorp.com",
    action: "Upgraded plan",
    date: "2024-12-18T09:24:00Z",
    status: "completed",
  },
  {
    id: "act-002",
    userName: "James Thornton",
    userEmail: "jthornton@wavesync.io",
    action: "Signed up",
    date: "2024-12-17T14:10:00Z",
    status: "completed",
  },
  {
    id: "act-003",
    userName: "Priya Nair",
    userEmail: "priya.nair@stacklabs.dev",
    action: "Payment failed",
    date: "2024-12-17T11:45:00Z",
    status: "failed",
  },
  {
    id: "act-004",
    userName: "Carlos Vega",
    userEmail: "c.vega@novasoft.com",
    action: "Invited team member",
    date: "2024-12-16T16:30:00Z",
    status: "completed",
  },
  {
    id: "act-005",
    userName: "Emily Hartwell",
    userEmail: "emily@hartwell.studio",
    action: "Cancelled subscription",
    date: "2024-12-16T08:05:00Z",
    status: "completed",
  },
  {
    id: "act-006",
    userName: "Liam O'Brien",
    userEmail: "liam.obrien@driftco.net",
    action: "Requested refund",
    date: "2024-12-15T17:22:00Z",
    status: "pending",
  },
  {
    id: "act-007",
    userName: "Yuki Tanaka",
    userEmail: "y.tanaka@orbitbase.jp",
    action: "Upgraded plan",
    date: "2024-12-15T10:50:00Z",
    status: "pending",
  },
  {
    id: "act-008",
    userName: "Fatima Al-Hassan",
    userEmail: "fatima@growthpilot.ae",
    action: "Password reset",
    date: "2024-12-14T13:15:00Z",
    status: "failed",
  },
  {
    id: "act-009",
    userName: "Marcus Webb",
    userEmail: "m.webb@pixelforge.uk",
    action: "Signed up",
    date: "2024-12-14T09:00:00Z",
    status: "completed",
  },
];

export function formatActivityDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(isoDate));
}
