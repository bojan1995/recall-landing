import { useState, useEffect } from "react";

export function useTypewriter(lines: string[], trigger: boolean) {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    setDisplayed([]);
    setDone(false);
    let lineIdx = 0;
    let charIdx = 0;
    const interval = setInterval(() => {
      const line = lines[lineIdx];
      if (!line) return;
      charIdx++;
      setDisplayed((prev) => {
        const next = [...prev];
        next[lineIdx] = line.slice(0, charIdx);
        return next;
      });
      if (charIdx >= line.length) {
        lineIdx++;
        charIdx = 0;
        if (lineIdx >= lines.length) {
          clearInterval(interval);
          setDone(true);
        }
      }
    }, 18);
    return () => clearInterval(interval);
  }, [trigger, lines]);

  return { displayed, done };
}
