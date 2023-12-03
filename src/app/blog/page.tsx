
import { CardPost } from "@/components/Blog/CardPost";
import { HeaderBlog } from "@/components/Blog/HeaderBlog";
import Image from "next/image";
import Link from "next/link";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";

import { BlogPageData } from "@/types/page-blog";
import { EmptyPost } from "@/components/EmptyPost";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

const getPageData = async (): Promise<BlogPageData> => {
  const GET_ALL_POSTS = `
  query MyQuery {
    posts(orderBy: publishedAt_DESC){
      createdAt
      id
      publishedAt
      slug
      subtitle
      title
      updatedAt
      coverImage{
        url
      }
      author {
        name
      }
      content {
        json
      }
    }
  }
`;

return fetchHygraphQuery(
  GET_ALL_POSTS,
  
)
}

export default async function Blog() {
  const {posts} = await getPageData();
  
  return (
    
    <main className="flex min-h-screen flex-col bg-black">
      <HeaderBlog />
      <div className="container mt-24 mx-auto p-4">

      {posts ? (
          <>        
        <Link  href={`/blog/${posts[0]?.slug}`} className="w-full h-full flex gap-4 flex-col sm:flex-row lg:gap-8 items-center justify-center hover:brightness-75 transition-all">
          <div className="flex flex-1 w-full h-full min-h-[240px] md:min-h-[334px] relative rounded-2xl overflow-hidden">
            <Image
              src={posts[0]?.coverImage.url}

              alt={posts[0]?.title}
              fill={true}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 60vw"

            />
          </div>
          <div className="flex flex-1 h-full flex-col gap-3 lg:gap-6">
            <h1 className="font-bold text-3xl md:text-[48px] text-blue-600">
            {posts[0]?.title}
            </h1>
            <p className="text-zinc-600 text-sm md:text-base text-justify lg:text-left">
            {posts[0]?.subtitle}
            </p>
            <div>
              <p className="font-bold text-zinc-500 text-sm md:text-base">{posts[0]?.author.name}</p>
              <p className="text-zinc-300 text-xs md:text-sm"> {format(
                      new Date(posts[0]?.createdAt),
                      "dd 'de' MMM 'de' yyyy",
                      { locale: ptBR }
                    )}</p>
            </div>
          </div>
        </Link>


        <div className="flex flex-col items-center sm:grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mt-12 ">
        {posts.map((post, index) => {
                if (index !== 0) {
                  return (
                    <CardPost
                      key={post.id}
                      title={post.title}
                      author={post.author.name}
                      createdAt={post.createdAt}
                      subtitle={post.subtitle}
                      urlImage={post.coverImage.url}
                      slug={post.slug}
                    />
                  );
                }
              })}
        </div>
        </>) : (
          <EmptyPost />
        )}
      </div>
       
    </main>
  );
}
