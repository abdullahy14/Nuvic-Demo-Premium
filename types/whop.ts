export type WhopUser = {
  id: string;
  username?: string;
  name?: string;
  email?: string;
};

export type MembershipStatus = "active" | "trialing" | "past_due" | "expired" | "canceled" | "unknown";

export type WhopMembership = {
  id: string;
  user_id: string;
  company_id?: string;
  product_id?: string;
  plan_id?: string;
  status: MembershipStatus;
  created_at?: number;
  expires_at?: number | null;
};

export type NormalizedMembership = WhopMembership & {
  isActive: boolean;
  isTrialing: boolean;
  isPastDue: boolean;
  isExpired: boolean;
};

export type WhopAuthContext = {
  user: WhopUser;
  token: string;
};
