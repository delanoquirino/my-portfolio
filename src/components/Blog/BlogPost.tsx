"use client"
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { Transition } from "@/components/Transition";
import { PostPageInfo } from "@/types/postBlog-info";

type PostSectionProps = {
  postinfo: PostPageInfo[];
};

export default function BlogPost({postinfo}: PostSectionProps) {
  const path = usePathname();
 

  return (
    <div className="h-full w-full bg-black">


    <div className="container mt-24 mx-auto px-3 md:px-12 py-4">
      {path && <Transition />}
      <Link
        href="/blog"
        className="text-base mb-4 sm:text-lg md:text-xl font-bold text-white dark:text-black w-fit flex items-center gap-4 hover:text-cyan-500 dark:hover:text-cyan-500"
      >
        <FaArrowLeft />
        Voltar
      </Link>
      <div className="w-full h-full flex flex-col mt-8">
        <div className="flex w-full h-56 sm:h-88 lg:h-[392px] relative rounded-2xl overflow-hidden">
          <Image
            src={postinfo[0].coverImage.url}
            alt={postinfo[0].title}
            fill={true}
            objectFit="cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 60vw"

          />
        </div>
        <div className="flex w-full flex-col mt-4 sm:mt-8">
          <h2 className="font-bold text-2xl sm:text-4xl lg:text-[40px] text-white">
          {postinfo[0].title}
          </h2>
          <div>
            <p className="font-bold text-zinc-500">{postinfo[0].author.name}</p>
            <p className="text-zinc-600 text-sm">
              {format(new Date(postinfo[0].createdAt), "dd 'de' MMM 'de' yyyy", {
                locale: ptBR,
              })}
            </p>
          </div>
          <RichText
            content={postinfo[0].content.json}
            renderers={{
              p: ({ children }) => (
                <p className="text-zinc-300 text-sm sm:text-base text-justify lg:text-left mt-4 sm:mt-8">
                  {children}
                </p>
              ),
            }}
          />
        </div>
      </div>
    </div>
    </div>
  );
}

