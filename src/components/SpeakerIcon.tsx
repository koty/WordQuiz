import React from 'react';
import { useSpeech } from '../hooks/useSpeech';

interface SpeakerIconProps {
  word: string;
  className?: string;
}

const SpeakerIcon: React.FC<SpeakerIconProps> = ({ word, className = '' }) => {
  const { speak, isSupported } = useSpeech();

  const handleSpeakWord = (): void => {
    if (word && isSupported) {
      speak(word);
    }
  };

  if (!isSupported) {
    return null;
  }
  return (
    <button
      onClick={handleSpeakWord}
      className={`speaker-button ${className}`}
      title="Listen to pronunciation"
      type="button"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 5L6 9H2V15H6L11 19V5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.07 4.93C20.9447 6.80467 21.9979 9.34835 21.9979 12C21.9979 14.6516 20.9447 17.1953 19.07 19.07"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 12C17.0039 13.3308 16.4774 14.6024 15.54 15.54"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default SpeakerIcon;