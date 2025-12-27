"use client"

import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/LanguageContext"

interface LanguageToggleProps {
  className?: string
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage()
  const isEnglish = language === 'en'

  return (
    <div
      className={cn(
        "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300",
        isEnglish 
          ? "bg-zinc-950 border border-zinc-800" 
          : "bg-white border border-zinc-200",
        className
      )}
      onClick={() => setLanguage(isEnglish ? 'id' : 'en')}
      role="button"
      tabIndex={0}
    >
      <div className="flex justify-between items-center w-full">
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            isEnglish 
              ? "transform translate-x-0 bg-zinc-800" 
              : "transform translate-x-8 bg-gray-200"
          )}
        >
          <span className={cn("text-[10px] font-bold", isEnglish ? "text-white" : "text-gray-700")}>
            {isEnglish ? "EN" : "ID"}
          </span>
        </div>
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            isEnglish 
              ? "bg-transparent" 
              : "transform -translate-x-8"
          )}
        >
          <span className={cn("text-[10px] font-bold", isEnglish ? "text-gray-500" : "text-black")}>
            {isEnglish ? "ID" : "EN"}
          </span>
        </div>
      </div>
    </div>
  )
}
