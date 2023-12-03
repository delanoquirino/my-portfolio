export type PostPageInfo = {
  id: string;
  title: string;
  slug: string;
  content: {
    json: [];
  };
  author: {
    name: string;
  };
  createdAt: string;
  coverImage: {
    url: string;
  };
};

export type PostPageStaticData = {
  posts: {
    slug: string;
  }[];
};

export type PostPageData = {
  posts: PostPageInfo[];
};
