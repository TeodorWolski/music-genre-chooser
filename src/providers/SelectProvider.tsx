import { useEffect, useState, createContext } from 'react';
import { Genre } from 'types/types';
import apiRequest from 'utils/apiRequest';

export interface ContextProps {
  selectedItems: Genre[] | [];
  addGenre: (genre: string, id: number) => void;
  deleteGenre?: (id: number) => void;
}

export const SelectContext = createContext<ContextProps>({
  selectedItems: [],
  addGenre: () => {
    console.log('addGenre');
  },
  deleteGenre: () => {
    console.log('deleteGenre');
  },
});

const SelectProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedItems, setSeletedItems] = useState<any>([]);
  const addGenre = (genre: string, id: number) => {
    setSeletedItems([...selectedItems, { genre, id }]);
  };

  return (
    <SelectContext.Provider
      value={{
        addGenre,
        selectedItems,
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};

export default SelectProvider;
