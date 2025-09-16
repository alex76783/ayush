import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono"
import { verify } from "hono/jwt";


export const BlogRouter = new Hono<{
    Bindings:{
        JWT_SECRET : string
        DATABASE_URL: string
    }
    Variables:{
      userId: string
    }
}>()

//  Middleware , here after verification we set userId in c .

BlogRouter.use("/*", async (c,next)=>{
    const authHeader = c.req.header("Authorization") || "";
    const user = await verify(authHeader,c.env.JWT_SECRET) as {id:string}  // verify returns unknown
    if(user){
      c.set("userId",user.id)
      await next()
    }
    else{
      return(
        c.text("Invaid authorization")
      )
    }
})

// To publish a Blog 

BlogRouter.post("/publish",async(c)=>{
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    console.log("hello")

    const body =  await c.req.json()
    const userId = c.get("userId")

    const blog = await prisma.post .create({
        data:{
            title:body.title,
            content:body.content,
            authorId: userId         
        }
    })

    
  return c.json({
    blog,

  })
})


BlogRouter.put("/api/v1/user/blog",(c)=>{
  return c.text("hello")
})

// To get all Blogs belonging to certain id

BlogRouter.get("/:id",async(c)=>{
     const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const id = c.req.param("id")
    const blog = await prisma.post.findUnique({
        where:{
            id
        }
    })


  return c.json({
    blog
  })
})

// To get the Blogs on the front page ( but we just bring all the blogs )



BlogRouter.get('/bulk', async (c) => {
  
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const blogs = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      author: {
        select: { name: true }
      }
    }
  })
  

return c.json({ blogs })
   
})

