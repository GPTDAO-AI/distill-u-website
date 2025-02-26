interface Organization {
  id: number;
  name: string;
  desc: string;
  url: string;
  logo: string;
  tier: string;
  location: string;
  categories: string[];
}

export default Organization;