import React, { useState, useEffect, createContext } from "react";

const NFTRentContext = createContext({});

export const NFTRentProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [cardId, setCardId] = useState(1);

  const toggleModal = () => setModal(!modal);

  return (
    <NFTRentContext.Provider
      value={{
        toggleModal,
        modal,
        setModal,
        cardId,
        setCardId,
      }}
    >
      {children}
    </NFTRentContext.Provider>
  );
};

export default NFTRentContext;
