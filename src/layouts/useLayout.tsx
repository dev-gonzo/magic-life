import { useState } from 'react';

export const useLayout = () => {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  return {
    open,
    handleToggleMenu,
  };
};
