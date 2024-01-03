export interface Member {
  id: string;
  email: string;
  last_name: string;
  first_name: string;
  image?: string | null;
  roles?: string[];
}
