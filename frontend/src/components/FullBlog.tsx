import AppBar from "./appBar";
import { Avatar } from "./Blog";

export default function FullBlog(){
    return (
        <div>
            <AppBar/>
            <div className="grid grid-cols-12">
                <div className="col-span-8 ml-5">

                    <div className="font-extrabold text-3xl mt-5">Why Next.js is the Future of Web Development </div>   {/* {Blog.title}*/}
                    <div className="text-sm mt-2 mb-2 text-slate-600">Published on 20 FEB 2026 </div>
                    
                    <div   className="text-slate-700">Next.js has quickly become one of the most popular frameworks for building modern web applications. Built on top of React, it provides developers with powerful features like server-side rendering (SSR), static site generation (SSG), and API routes — all without extra setup.
                        Unlike traditional React apps, Next.js handles routing out of the box, making development faster and more intuitive. Developers can also take advantage of Incremental Static Regeneration (ISR), allowing them to update static content without rebuilding the entire site.
                        Another major advantage of Next.js is its seamless integration with tools like TypeScript, Tailwind CSS, and Prisma. Combined with the ease of deployment on Vercel, it provides a complete ecosystem for building scalable, production-ready applications.
                        In short, Next.js is more than just a frontend framework — it’s a full-stack solution that empowers developers to create fast, user-friendly, and SEO-optimized applications with minimal effort.</div> {/* {Blog.content}*/}
                </div> 
                <div className="col-span-4 ml-9">
                    <div className="text-slate-800 mt-5 ">Author</div>
                    <div className="flex  ">
                        <div className="mt-3">
                             <Avatar AuthorName="sisyphus" size="big"/>
                        </div>
                        <div className="pl-4 font-bold">Author Name</div>
                       
                    </div>
                    <div className="text-m ml-10 text-slate-700">Qualities of the Author</div>
                </div>
            </div>

        </div>
    )
}