import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, sign, verify } from "hono/jwt";

export const UserRouter = new Hono<{
  Bindings:{
    JWT_SECRET: string
    DATABASE_URL: string
  }
}>();

UserRouter.post('/signup',async (c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const body = await c.req.json()
         const user = await prisma.user.create({
      data: {
        name:body.username,
        email:body.email,
        password:body.password
      }
    })

      const jwtToken = await sign({id:user.id},c.env.JWT_SECRET)
       return c.json({
    jwtToken
  })
    }catch(err){

      return c.text("body error")

    }
    

    //zod validation

   
   

 
})


UserRouter.post('/signin', async (c)=>{
  const prisma = new PrismaClient({
  datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

   const body = await c.req.json()

   const user = await prisma.user.findFirst({
    where:{

      email:body.email,
      password:body.password
    }
   }) 

   if(user){
      const jwtToken = await sign({id:user.id},c.env.JWT_SECRET)
        return c.json({
    jwtToken
  })
   }
   else {
    return c.text("This email does't exists")
   }

      
  

})



