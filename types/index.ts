import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title:string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit";
    textStyle?:string;
    rightIcon?:string;
    isDisabled?:boolean;
}

export interface SearchManufacturerProps {
    selected:string;
    setSelected :(value : string) => void;
}

export interface CarProps{
   city_mpg:number;
   class:string;
   cylinders:number;
   displacement:number;
   drive:string;
   fuel_type:string;
   highway_mpg:number;
   make:string;
   model:string;
   transmission:string;
   year:number;
   combination_mpg:number;
   id:number;
}

export interface FilterProps {
    manufacturer:string,
    year:number ,
    fuel:string,
    limit:number,
    model:string, 
}

export interface OptionProps{
    title:string;
    value:string;
}

export interface CustomFilterProps{
    title:string;
    options:OptionProps[];
    setFilter:(value:string) => void;
}

export interface ShowMOreProps {
    pageNumber : number;
    isNext:boolean;
    setLimit:(newLimit:number) => void;
}