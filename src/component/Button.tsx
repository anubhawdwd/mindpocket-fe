import React, { type ReactElement } from 'react'

type Variants = "primary" | "secondary" | "danger" 
type Sizes = "sm"|"md"|"lg"

interface ButtonProp {
    variant: Variants,
    size: Sizes,
    text: string,
    disable?: boolean,
    iconBefore?: ReactElement,
    iconAfter?: ReactElement
}

const btnVariantClasses: Record<Variants, string > = {
    'primary': "bg-purple-600 text-white",
    'secondary': "bg-purple-300 text-purple-800",
    'danger': "bg-red-500 text-slate-800",
}

const btnSizeClasses: Record<Sizes, string > = {
    'sm': "py-1 px-4 ",
    'md': "py-2 px-4 ",
    'lg': "py-2 px-4 ",
}

const Button: React.FC<ButtonProp> =({
    variant, 
    size,
    text,
    disable,
    iconBefore,
    iconAfter
}) =>{

  return (
    <>
        <button disabled={disable} className={` flex items-center gap-2 rounded m-1 ${btnVariantClasses[variant]} ${btnSizeClasses[size]}`} onClick={()=> console.log("clicked")} >{iconBefore} {text} {iconAfter}</button>
    </>
  )
}

export default Button