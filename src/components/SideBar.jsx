import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true); // Default state set to true

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-gray-700 text-white p-4 ${isOpen ? 'w-64' : 'w-16'} transition-all duration-300`}>
      <button onClick={toggleSidebar} className="mb-4">
        {isOpen ? 'Close' : 'Open'}
      </button>
      {isOpen && (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>GIS Layers</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Layer 1</DropdownMenuItem>
              <DropdownMenuItem>Layer 2</DropdownMenuItem>
              <DropdownMenuItem>Layer 3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};

export default SideBar;