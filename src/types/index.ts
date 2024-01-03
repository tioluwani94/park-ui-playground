export interface Member {
  id: string;
  email: string;
  last_name: string;
  first_name: string;
  image?: string | null;
  role?: string;
  is_owner?: boolean;
}
