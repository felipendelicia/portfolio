import React from 'react'
import { ILanguageContext } from '../types/Props'

const languageContext = React.createContext<ILanguageContext>({language:'es', setLanguage:()=>null})

export default languageContext