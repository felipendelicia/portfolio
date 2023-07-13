import { Dispatch, ReactElement } from "react";

export type ITheme = "dark" | "light";
export type ILenguaje = "en" | "es";

export interface IProyectProps {
  name: string;
  description: string;
  url: string | undefined;
  source?: string;
  imgURL: string;
  stack: { icon: ReactElement; name: string }[];
  date?: string;
}

export interface IProjectSidebarProps extends IProyectProps {
  showSidebar: boolean;
  setShowSidebar: (bool: boolean) => void;
}

export interface ILanguageContext {
  language: ILenguaje;
  setLanguage: Dispatch<SetStateAction<ILenguaje>>;
}

export interface IProjectsProps {
  projects: {
    name: string;
    description: { en: string; es: string };
    url?: string;
    source?: string;
    imgURL: string;
    date?: { en: string; es: string };
    stack: { icon: ReactElement; name: string }[];
  }[];
}
