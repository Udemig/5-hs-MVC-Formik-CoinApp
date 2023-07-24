import { createContext, useEffect, useState } from 'react';
import { v4 } from 'uuid';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // kullanıcı proje girdiği anda
  // local'den tokeni alınır
  useEffect(() => {
    const signedUser = localStorage.getItem('token');

    setUser(signedUser);
  }, []);

  const signUser = (newUser) => {
    // kullanııya id ekleme
    newUser.id = v4();

    // kullanıcını oturumunu açma
    localStorage.setItem('token', newUser.id);

    // state güncelleme
    setUser(newUser.id);
  };

  return (
    <UserContext.Provider value={{ user, signUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
