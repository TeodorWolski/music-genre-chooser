import { useState, createContext } from 'react';
import { ContextProps } from 'types/types';
import axios from 'axios';

interface item {
  genre: string;
  id: number;
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
    axios.post(`/genres/${id}/select`);
  };

  const deleteGenre = (id: number) => {
    const newList = selectedItems.filter((item: item) => item.id !== id);
    setSeletedItems(newList);
  };

  return (
    <SelectContext.Provider
      value={{
        addGenre,
        selectedItems,
        deleteGenre,
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};

export default SelectProvider;
