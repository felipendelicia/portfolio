import { ReactElement } from "react";

export type ITheme = "dark" | "light";

export interface IProyectProps {
    name: string;
    description: string;
    url: string|undefined;
    source: string;
    imgURL: string;
    stack:{icon:ReactElement, name:string}[],

}

export interface IProjectSidebarProps extends IProyectProps {
    showSidebar: boolean;
    setShowSidebar: (bool:boolean)=>void
}