import { useCallback } from 'react';

interface UseSpeechReturn {
  speak: (text: string) => void;
  isSupported: boolean;
}

export const useSpeech = (): UseSpeechReturn => {
  const isSupported = 'speechSynthesis' in window;

  const speak = useCallback((text: string) => {
    if (!isSupported) {
      console.warn('Speech synthesis is not supported in this browser');
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  }, [isSupported]);

  return { speak, isSupported };
};