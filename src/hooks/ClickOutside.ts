import { useEffect, useRef } from 'react';

export function useOnClickOutside(callback: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const listener = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document?.addEventListener('mousedown', listener);
    document?.addEventListener('touchstart', listener);
    return () => {
      document?.removeEventListener('mousedown', listener);
      document?.removeEventListener('touchstart', listener);
    };
  }, [callback]);

  return ref;
}
