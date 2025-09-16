type  InputProps = {
    label:string,
    placeholder: string,
    className?: string,
    value?: string,
    onChange: (e:any)=> void
}

export default function Input({label,placeholder,className,value , onChange}: InputProps){
    return (
        <>
        <div className={` font-bold ${className} `}>{label}</div>
         
        <input className=" border-1 border-grey-100 pl-2 mt-1 w-full" placeholder={placeholder} value={value} onChange={onChange} type="text"/>
        </>
    )
}
