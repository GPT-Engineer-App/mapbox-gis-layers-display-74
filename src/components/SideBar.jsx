import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true); // Default state set to true

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn("bg-gray-700 text-white p-4 transition-all duration-300", { "w-64": isOpen, "w-16": !isOpen })}>
      <Button onClick={toggleSidebar} className="mb-4">
        {isOpen ? 'Close' : 'Open'}
      </Button>
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