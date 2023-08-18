'use client';

import { useCallback, useState } from 'react';
import IconCross from './IconCross';
import IconMenu from './IconMenu';
import NavUl from './NavUl';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen(value => !value);
  }, []);

  return (
    <nav>
      {isOpen ? (
        <IconCross setIsOpen={toggleOpen} />
      ) : (
        <IconMenu setIsOpen={toggleOpen} />
      )}
      <NavUl isOpen={isOpen} />
    </nav>
  );
}

export default Navigation;
