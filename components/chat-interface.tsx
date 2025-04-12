"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Send, Globe, Smile, Image } from "lucide-react"

export function ChatInterface() {
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="flex w-full flex-col items-center px-4 md:px-8 lg:px-16">
      <div className="mb-16 mt-32 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          What do you want to know?
        </h1>
      </div>

      <div className="w-full max-w-3xl">
        <div className="relative rounded-lg border border-gray-700 bg-gray-900/50 p-2">
          <div className="flex items-center gap-2 px-2 py-1">
            <Badge variant="outline" className="bg-blue-900/50 text-blue-400 border-blue-800 px-2 py-1 text-xs font-medium">
              pro
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1 bg-transparent text-gray-400 border-gray-700 px-2 py-1 text-xs font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" strokeWidth="2" />
                <path d="M7 17V13.5V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 17V13.5V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 17V13.5V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Deep Research
            </Badge>
          </div>
          
          <div className="mt-2 flex items-end">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Hello"
              className="border-0 bg-transparent text-white focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <div className="flex items-center gap-1 px-2">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Globe className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Image className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Smile className="h-5 w-5" />
              </Button>
              <Button size="icon" className="ml-1 rounded-full bg-blue-500 hover:bg-blue-600">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute right-4 top-2 flex items-center gap-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" />
            </svg>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
} 