import { useCallback } from 'react';

interface UseSoundReturn {
  playCorrectSound: () => void;
  playIncorrectSound: () => void;
  isSupported: boolean;
}

export const useSound = (): UseSoundReturn => {
  // AudioContext がサポートされているかチェック
  const isSupported = typeof window !== 'undefined' && 
    (window.AudioContext || (window as any).webkitAudioContext);

  const createBeep = useCallback((frequency: number, duration: number, volume: number = 0.1) => {
    if (!isSupported) return;

    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const audioContext = new AudioContext();

      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);

      // リソースをクリーンアップ
      setTimeout(() => {
        try {
          audioContext.close();
        } catch (e) {
          // エラーは無視
        }
      }, duration * 1000 + 100);
    } catch (error) {
      console.warn('Audio playback failed:', error);
    }
  }, [isSupported]);

  const playCorrectSound = useCallback(() => {
    // 正解音: 高い音から低い音への2音階
    createBeep(523, 0.2); // C5
    setTimeout(() => createBeep(659, 0.3), 150); // E5
  }, [createBeep]);

  const playIncorrectSound = useCallback(() => {
    // 不正解音: 低い音の長めのブザー音
    createBeep(200, 0.5);
  }, [createBeep]);

  return {
    playCorrectSound,
    playIncorrectSound,
    isSupported: !!isSupported
  };
};