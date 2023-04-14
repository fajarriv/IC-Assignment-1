interface Root {
  id: string;
  name: string;
  amount: number;
  description: string;
  created_at: string;
  category: Category;
}

interface Category {
  id: string;
  name: string;
}
