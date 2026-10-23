import React, { useMemo } from 'react';
import katex from 'katex';
import { marked } from 'marked';

export function MathView({ math, block = false, className = '' }) {
  const html = useMemo(() => {
    if (!math) return '';
    try {
      return katex.renderToString(math.trim(), {
        displayMode: block,
        output: 'html',
        throwOnError: false,
        strict: false,
      });
    } catch (e) {
      console.error("KaTeX error:", e);
      return math;
    }
  }, [math, block]);

  if (block) {
    return (
      <div
        className={`my-3.5 overflow-x-auto py-1.5 text-slate-900 dark:text-slate-100 font-math text-base sm:text-lg ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={`inline-block px-0.5 text-slate-900 dark:text-slate-100 font-math text-[1.08em] ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function FormattedMath({ text, className = '' }) {
  const renderedHtml = useMemo(() => {
    if (!text) return '';

    const mathMap = new Map();
    let counter = 0;

    let processed = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
      const key = `XYZKATEXBLOCK${counter++}XYZ`;
      let rendered = '';
      try {
        rendered = katex.renderToString(math.trim(), {
          displayMode: true,
          output: 'html',
          throwOnError: false,
          strict: false,
        });
      } catch (e) {
        rendered = math;
      }
      mathMap.set(key, `<div class="my-3.5 overflow-x-auto py-1.5 text-center font-math text-base sm:text-lg">${rendered}</div>`);
      return `\n\n${key}\n\n`;
    });

    processed = processed.replace(/\$([^\$\n]+?)\$/g, (_, math) => {
      const key = `XYZKATEXINLINE${counter++}XYZ`;
      let rendered = '';
      try {
        rendered = katex.renderToString(math.trim(), {
          displayMode: false,
          output: 'html',
          throwOnError: false,
          strict: false,
        });
      } catch (e) {
        rendered = math;
      }
      mathMap.set(key, `<span class="inline-block px-0.5 font-math text-[1.08em]">${rendered}</span>`);
      return key;
    });

    let html = '';
    try {
      html = marked.parse(processed, {
        gfm: true,
        breaks: true,
      });
    } catch (e) {
      console.error("Markdown parse error:", e);
      html = processed;
    }

    html = html.replace(/<p>\s*(XYZKATEXBLOCK\d+XYZ)\s*<\/p>/g, '$1');

    mathMap.forEach((renderedHtml, key) => {
      html = html.replace(new RegExp(key, 'g'), renderedHtml);
    });

    return html;
  }, [text]);

  return (
    <div
      className={`markdown-math-content text-slate-800 dark:text-slate-200 leading-relaxed ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
}

export default MathView;
