import React, { useState, useEffect, createContext } from "react";

const NFTRentContext = createContext({});

export const NFTRentProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [cardId, setCardId] = useState(1);
  const [selectedBtn, setSelectedBtn] = useState("");

  const toggleModal = () => setModal(!modal);

  return (
    <NFTRentContext.Provider
      value={{
        toggleModal,
        modal,
        setModal,
        cardId,
        setCardId,
        selectedBtn,
        setSelectedBtn,
      }}
    >
      {children}
    </NFTRentContext.Provider>
  );
};

export default NFTRentContext;
