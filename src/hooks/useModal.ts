import { useState } from 'react';

const useModal = () => {
  const [isOpen, setModalState] = useState<boolean>(false);

  const handleOpenModal = () => setModalState(true);
  const handleCloseModal = () => setModalState(false);

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
