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
  title: {
    url: string;
    height: number;
    width: number;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Post = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
};

export type TableUIProps = {
  contents: Post[];
};
