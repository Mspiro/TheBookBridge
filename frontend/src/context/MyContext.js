import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {

  const storedAuthor = JSON.parse(localStorage.getItem("author"));
  const storedReader = JSON.parse(localStorage.getItem("reader"));

  
  console.log(storedAuthor,"local data")
  const [authorLogin, setAuthorLogin] = useState({
    authorId: storedAuthor?.authorId || null,
    authorToken: storedAuthor?.authorToken || null,
    authorEmail: storedAuthor?.authorEmail || null,
    profileImg: storedAuthor?.profileImg || null,
  });
  const [readerLogin, setReaderLogin] = useState({
    readerId: storedReader?.readerId || null,
    readerToken: storedReader?.readerToken || null,
    readerEmail: storedReader?.readerEmail || null,
    profileImg: storedReader?.profileImg || null,
  });

  console.log(authorLogin, "Author login from context");
  console.log(readerLogin, "reader login from context");

  return (
    <MyContext.Provider
      value={{ authorLogin, setAuthorLogin, readerLogin, setReaderLogin }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
