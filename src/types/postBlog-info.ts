
export type PostPageInfo = {
  id: string;
  title: string;
  slug: string
  coverImage: {
    url: string;
  };
  author: {
    name: string;
  };
  createdAt: string;
  content: {
    json: [];
  }

};

export type PostPageStaticData = {
  posts: {
    slug: string
  }[]
}

export type PostPageData = {
  posts: PostPageInfo[];
};