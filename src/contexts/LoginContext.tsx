import { createContext, useState } from "react"

type LoginContextType = {
  currentLogin: boolean;
  setCurrentLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginContext = createContext<LoginContextType>({
  currentLogin: false,
  setCurrentLogin: () => {}
})

export const LoginProvider = ({ children } : { children: JSX.Element }) => {
  const [currentLogin, setCurrentLogin] = useState<boolean>(false)
  const value = { currentLogin, setCurrentLogin }

  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
}