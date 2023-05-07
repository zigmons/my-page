import { createContext } from 'react';

const UserContext = createContext({
  user: {
    id: "",
    email: '',
    name: '',
  },
  setUser: () => {},
});

export default UserContext;
