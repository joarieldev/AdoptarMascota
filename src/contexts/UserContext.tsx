import { createContext, useState } from "react"
import { User } from '../services/pets';

type UserContextType = {
  currentUser: User;
  setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
};

export const UserContext = createContext<UserContextType>({
  currentUser: {user: '', password: ''},
  setCurrentUser: () => {}
})

export const UserProvider = ({ children } : { children: JSX.Element }) => {
  const [currentUser, setCurrentUser] = useState<User>({user:'',password:''})
  const value = { currentUser, setCurrentUser }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}