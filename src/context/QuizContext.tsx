/* eslint-disable no-restricted-properties */
import { createContext, ReactNode, useState } from 'react';
import db from '../../db.json';

export interface Question {
    id: string | null;
    alternatives: Array<string>;
    answer: number;
    description: string;
    title: string;
    image: string;
}

export interface Theme {
    borderRadius: string;
    color: {
        contrastText: string;
        mainBg: string;
        primary: string;
        secondary: string;
        success: string;
        wrong: string;
    }
}

export interface QuizesContextData {
    id: string | null;
    bg: string;
    description: string;
    icon: string;
    theme: Theme;
    title: string;
    questions: Array<Question>;
}

interface Database {
  db: QuizesContextData;
  name: string;
  setUserName: (userName) => void;
}

interface QuizesProviderProps {
    children: ReactNode;
}

export const QuizContext = createContext({} as Database);

export const QuizesProvider = ({ children }: QuizesProviderProps) => {
  const [name, setName] = useState("")
  
  const setUserName = (userName) => {
    setName(userName)
  }

  return (
    <QuizContext.Provider value={{
        db,
        name,
        setUserName
    }}
    >
      {children}
    </QuizContext.Provider>
  );
};
