export type Blogs = {
  id: string;
  body: string;
  content: string;
  title: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
export type Illustrations = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: { url: string; height: number; width: number };
};
