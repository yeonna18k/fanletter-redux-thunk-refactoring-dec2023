import { createContext, useState } from "react";
import fakeData from "fakeData.json";

export const LetterContext = createContext(null);

function LetterContextProvider({ children }) {
  const [letters, setLetters] = useState(fakeData);
  return (
    <LetterContext.Provider value={{ letters, setLetters }}>
      {/*노란색괄호가 객체 담당*/}
      {children} {/*App컴포넌트*/}
    </LetterContext.Provider>
  );
}

export default LetterContextProvider;
