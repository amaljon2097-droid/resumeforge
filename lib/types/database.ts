export type UserPlan = "free" | "pro";

export interface UserProfile {
  id: string;
  email: string;
  plan: UserPlan;
  generations_used: number;
  created_at: string;
}
