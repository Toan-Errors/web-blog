export type Chapter = {
  id: number;
  name: string;
  updated_at: string;
};

export type Comic = {
  title: string;
  description: string;
  thumbnail: string;
  author: string;
  status: string;
  is_adult: boolean;
  other_name: string[];
  total_views: number | string;
  rating_count: number;
  average: number;
  followers: number;
  chapters: Chapter[];
};
