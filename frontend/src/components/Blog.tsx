type BlogProps = {
    AuthorName: string,
    title: string,
    content:string,
    PublishedDate: string
}
export default function BlogData({AuthorName,title,content,PublishedDate}:BlogProps){
    return (
        <div className=" bg-gray-100 border border-slate-200 pb-4 w-full ">
            <div className="flex">
                <div className="flex justify-center flex-col">
                    <Avatar AuthorName={AuthorName} size='small'/>
                </div>
                <div className="pl-2">
                    {AuthorName} 
                </div>
                <div className="flex justify-center flex-col pl-2"><Circle/></div>
                
                <div className="pl-2 text-slate-500 font-thin">
                    {PublishedDate}
                </div>
               
            </div>
         

        <div className="font-bold">{title}</div>
        <div className="font-thin">{content.slice(0,300)+ "..."}</div>
         <div className="font-thin text-xs pt-1">{`${Math.ceil(content.length/100)} minute(s) read`}</div>

        </div>
    )
}

export function Avatar({AuthorName ,size}:{AuthorName: string,size:"small" | "big"}){
    return (
        
<div className={`relative inline-flex items-center justify-center ${size=='small'? "w-4 h-4 ": "w-6 h-6"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
  <span className="text-[10px] leading-none font-medium text-gray-600 dark:text-gray-300">
    {AuthorName[0].toUpperCase()}
  </span>
</div>


    )
}

function Circle (){
    return (
        <div className="w-1 h-1 rounded-full bg-gray-400">

        </div>
    )
}