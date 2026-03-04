import type { ActivityAction, ActivityStatus } from "@/lib/translations";

export type { ActivityAction, ActivityStatus };

export type ActivityItem = {
  id: string;
  userName: string;
  userEmail: string;
  action: ActivityAction;
  date: string;
  status: ActivityStatus;
};

export const recentActivityData: ActivityItem[] = [
  {
    id: "act-001",
    userName: "Sarah Mitchell",
    userEmail: "s.mitchell@gmail.com",
    action: "order_created",
    date: "2024-12-18T09:24:00Z",
    status: "completed",
  },
  {
    id: "act-002",
    userName: "James Thornton",
    userEmail: "jthornton@yahoo.com",
    action: "order_shipped",
    date: "2024-12-17T14:10:00Z",
    status: "completed",
  },
  {
    id: "act-003",
    userName: "Priya Nair",
    userEmail: "priya.nair@outlook.com",
    action: "payment_failed",
    date: "2024-12-17T11:45:00Z",
    status: "failed",
  },
  {
    id: "act-004",
    userName: "Carlos Vega",
    userEmail: "c.vega@gmail.com",
    action: "order_created",
    date: "2024-12-16T16:30:00Z",
    status: "pending",
  },
  {
    id: "act-005",
    userName: "Emily Hartwell",
    userEmail: "emily.hartwell@icloud.com",
    action: "order_cancelled",
    date: "2024-12-16T08:05:00Z",
    status: "completed",
  },
  {
    id: "act-006",
    userName: "Liam O'Brien",
    userEmail: "liam.obrien@gmail.com",
    action: "refund_processed",
    date: "2024-12-15T17:22:00Z",
    status: "pending",
  },
  {
    id: "act-007",
    userName: "Yuki Tanaka",
    userEmail: "y.tanaka@yahoo.co.jp",
    action: "order_shipped",
    date: "2024-12-15T10:50:00Z",
    status: "completed",
  },
  {
    id: "act-008",
    userName: "Fatima Al-Hassan",
    userEmail: "fatima.hassan@gmail.com",
    action: "payment_failed",
    date: "2024-12-14T13:15:00Z",
    status: "failed",
  },
  {
    id: "act-009",
    userName: "Marcus Webb",
    userEmail: "m.webb@hotmail.com",
    action: "order_created",
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
