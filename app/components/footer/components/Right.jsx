'use client';
import Menue from './Menue';
import items from './menuitems';
function Right() {
  return (
    <div className="grid grid-cols-2 p-5 md:grid-cols-4">
      <Menue items={items} />
    </div>
  );
}

export default Right;
