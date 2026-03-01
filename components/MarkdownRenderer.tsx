"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import type { ComponentPropsWithoutRef } from "react";

interface MarkdownRendererProps {
  content: string;
}

function MarkdownLink({
  href,
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  const isExternal =
    href && (href.startsWith("http://") || href.startsWith("https://"));

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}

/**
 * Preprocess markdown content to ensure proper spacing:
 * - Single newlines become double newlines (real paragraphs)
 * - Preserves code blocks, lists, blockquotes, headings, tables
 * - Preserves intentional double+ newlines
 */
function preprocessContent(raw: string): string {
  // Normalize line endings
  let content = raw.replace(/\r\n/g, "\n");

  // Split into lines and rebuild with smart spacing
  const lines = content.split("\n");
  const result: string[] = [];
  let inCodeBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Track code block boundaries
    if (trimmed.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      result.push(line);
      continue;
    }

    // Inside code blocks, preserve as-is
    if (inCodeBlock) {
      result.push(line);
      continue;
    }

    // Always keep the current line
    result.push(line);

    // If this is an empty line, skip (already provides paragraph break)
    if (trimmed === "") continue;

    // Look at next line
    const nextLine = i + 1 < lines.length ? lines[i + 1] : null;
    if (nextLine === null) continue;

    const nextTrimmed = nextLine.trim();

    // If next line is empty, code fence, or doesn't exist — skip
    if (nextTrimmed === "" || nextTrimmed.startsWith("```")) continue;

    // Don't add extra break between list items
    const isList = /^[-*+]\s|^\d+\.\s/.test(trimmed);
    const nextIsList = /^[-*+]\s|^\d+\.\s/.test(nextTrimmed);
    if (isList && nextIsList) continue;

    // Don't add extra break before/after headings (they have their own margin)
    const isHeading = trimmed.startsWith("#");
    const nextIsHeading = nextTrimmed.startsWith("#");
    if (isHeading || nextIsHeading) {
      result.push("");
      continue;
    }

    // Don't add extra break inside blockquotes
    const isBlockquote = trimmed.startsWith(">");
    const nextIsBlockquote = nextTrimmed.startsWith(">");
    if (isBlockquote && nextIsBlockquote) continue;

    // Don't add extra break inside tables
    const isTable = trimmed.startsWith("|");
    const nextIsTable = nextTrimmed.startsWith("|");
    if (isTable && nextIsTable) continue;

    // For all other consecutive non-empty lines: insert blank line to create paragraph break
    result.push("");
  }

  return result.join("\n");
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const processedContent = preprocessContent(content);

  return (
    <div
      className="blog-prose prose prose-invert prose-lg max-w-none
        prose-headings:font-display prose-headings:font-bold prose-headings:text-white
        prose-h1:text-3xl prose-h1:sm:text-4xl prose-h1:mt-14 prose-h1:mb-6
        prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-12 prose-h2:mb-5
        prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:mt-10 prose-h3:mb-4
        prose-h4:text-lg prose-h4:mt-8 prose-h4:mb-3
        prose-p:text-zinc-300 prose-p:leading-[1.85] prose-p:mb-5
        prose-a:text-blue-400 prose-a:underline prose-a:underline-offset-4 prose-a:decoration-blue-500/40 hover:prose-a:text-blue-300 hover:prose-a:decoration-blue-400
        prose-strong:text-white prose-strong:font-semibold
        prose-em:text-zinc-200
        prose-code:text-zinc-300 prose-code:bg-zinc-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:my-6
        prose-blockquote:border-l-blue-500/30 prose-blockquote:bg-zinc-900/50 prose-blockquote:rounded-r-xl prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:my-6 prose-blockquote:text-zinc-400 prose-blockquote:not-italic
        prose-img:rounded-xl prose-img:border prose-img:border-white/10 prose-img:my-6
        prose-li:text-zinc-300 prose-li:marker:text-zinc-500 prose-li:my-1.5
        prose-ul:text-zinc-300 prose-ul:my-5 prose-ul:pl-6
        prose-ol:text-zinc-300 prose-ol:my-5 prose-ol:pl-6
        prose-hr:border-white/10 prose-hr:my-10
        prose-table:border-collapse prose-table:my-6
        prose-th:bg-zinc-800/50 prose-th:border prose-th:border-white/10 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:text-white prose-th:font-semibold
        prose-td:border prose-td:border-white/10 prose-td:px-4 prose-td:py-2 prose-td:text-zinc-300"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          a: MarkdownLink,
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
}
