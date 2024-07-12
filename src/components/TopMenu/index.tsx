import React from "react";
import SearchInput from "../SearchInput";

const TopMenu: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-8 bg-gradient-to-b from-background to-slate-600">
      <h1 className="text-center text-4xl font-bold text-orange-50">
        Pokemon App
      </h1>

      <div className="flex items-center justify-center w-full max-w-md">
        <SearchInput />
      </div>
    </div>
  );
};

export default TopMenu;
