"use client";

import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { cn } from "@/lib/utils";

interface CodeExample {
  language: string;
  code: string;
}

interface CodeTabsProps {
  examples: CodeExample[];
  className?: string;
}

// Custom dark theme with black shades
const customDarkTheme = {
  ...vscDarkPlus,
  'pre[class*="language-"]': {
    ...vscDarkPlus['pre[class*="language-"]'],
    background: '#0a0a0a',
    margin: 0,
    padding: '1rem',
  },
  'code[class*="language-"]': {
    ...vscDarkPlus['code[class*="language-"]'],
    background: '#0a0a0a',
    fontSize: '0.875rem',
    lineHeight: '1.5',
  },
};

// Map common language names to Prism language identifiers
const languageMap: Record<string, string> = {
  javascript: "javascript",
  js: "javascript",
  typescript: "typescript",
  ts: "typescript",
  python: "python",
  py: "python",
  java: "java",
  cpp: "cpp",
  "c++": "cpp",
  c: "c",
  csharp: "csharp",
  "c#": "csharp",
  go: "go",
  rust: "rust",
  php: "php",
  ruby: "ruby",
  swift: "swift",
  kotlin: "kotlin",
  html: "markup",
  xml: "markup",
  css: "css",
  scss: "scss",
  json: "json",
  yaml: "yaml",
  yml: "yaml",
  bash: "bash",
  shell: "bash",
  sh: "bash",
  sql: "sql",
  markdown: "markdown",
  md: "markdown",
};

export function CodeTabs({ examples, className }: CodeTabsProps) {
  const [activeTab, setActiveTab] = React.useState(0);
  const [copied, setCopied] = React.useState(false);

  if (!examples || examples.length === 0) {
    return null;
  }

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentExample?.code || '');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const currentExample = examples[activeTab];
  const languageKey = languageMap[currentExample?.language?.toLowerCase()] || "text";


  return (
    <div className={cn("my-6 rounded-2xl bg-slate-100 bg-zinc-800/50 pt-3 pb-1 pl-2 pr-2", className)}>
      {/* Language tabs and Copy button */}
      <div className="flex justify-between items-center mb-1">
        <div className="flex gap-2 overflow-x-auto">
          {examples.map((example, index) => (
            <button
              key={`${example.language}-${index}`}
              onClick={() => handleTabClick(index)}
              type="button"
              className={cn(
                "pl-2 pt-0 pb-1 text-xs font-medium transition-colors whitespace-nowrap",
                "",
                activeTab === index
                  ? "underline font-semibold text-primary underline-offset-[0.34rem] decoration-[0.10rem]"
                  : ""
              )}
            >
              {example.language}
            </button>
          ))}
        </div>
        
        <button
          onClick={handleCopy}
          type="button"
          className="px-3 py-1 text-xs font-medium rounded-md transition-colors text-white flex items-center gap-1.5"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </>
          )}
        </button>
      </div>

      {/* Code container */}
      <div className="rounded-2xl overflow-hidden">
        <SyntaxHighlighter
          key={`code-${activeTab}-${currentExample?.language}`}
          language={languageKey}
          style={customDarkTheme}
          customStyle={{
            margin: 0,
            borderRadius: 0,
            background: '#0a0a0a',
          }}
          showLineNumbers={false}
          wrapLines={true}
          wrapLongLines={true}
        >
          {currentExample?.code || ''}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CodeTabs;
