export type BlogPageInfo  = {
    
        id: string;
        slug: string;
        subtitle: string;
        title: string;
        createdAt: string;
        coverImage: {
          url: string;
        };
        author: {
          name: string;
        };
        
      };
   
  
  export type BlogPageData = {
        posts: BlogPageInfo[];
  };

