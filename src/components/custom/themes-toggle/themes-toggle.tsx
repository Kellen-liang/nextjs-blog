"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const renderNode = theme === 'dark' 
    ? <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"  onClick={() => setTheme("light")}/>
    : <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" onClick={() => setTheme("dark")}/>;
  return <a className="hover:cursor-pointer">{renderNode}</a>;
}

