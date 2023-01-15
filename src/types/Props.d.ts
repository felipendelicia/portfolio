import { ReactElement } from "react";

export interface IProyectProps {
    name: string;
    description: string;
    url: string|undefined;
    source: string;
    imgURL: string;
    stack:{icon:ReactElement, name:string}[],

}