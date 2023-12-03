import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";
import { PostPageData, PostPageStaticData } from "@/types/postBlog-info";
import BlogPost from "@/components/Blog/BlogPost";

interface PostParams {
  params: {
    slug: string;
  };
}

const getPostDetails = async (slug: string): Promise<PostPageData> => {
  const GET_POST = `
  query Post() {
    posts(where: { slug: "${slug}"}) {
      id
      title
      slug
      content {
        json
      }
      author {
        name
      }
      createdAt
      coverImage {
        url
      }
    }
  }
`;

  return fetchHygraphQuery(GET_POST, 1000 * 60 * 60 * 24);
};

export default async function Post({ params: { slug } }: PostParams) {
  const { posts } = await getPostDetails(slug);

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <BlogPost postinfo={posts} />
    </div>
  );
}

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery() {
      posts(first: 100) {
        slug
      }
    }
  `;
  const { posts } = await fetchHygraphQuery<PostPageStaticData>(query);

  return posts;
}
