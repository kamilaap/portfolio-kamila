import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Volume1 } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isHovered, setIsHovered] = useState(false);
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio();
    // Replace this URL with your actual music file URL
    audio.src = "/assets/audio.mp3";
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.5; // 50% volume by default
    
    // Set up event listeners
    audio.addEventListener('canplaythrough', () => {
      setIsLoaded(true);
    });

    // Store reference
    audioRef.current = audio;

    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  // Adjust volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Function to toggle play/pause
  const togglePlay = () => {
    if (!isLoaded || !audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Handle browser autoplay restrictions
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.error("Playback prevented by browser:", error);
            setIsPlaying(false);
          });
        return;
      }
    }
    
    setIsPlaying(!isPlaying);
  };

  // Volume control handler
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
  };

  return (
    <div className="relative flex items-center">
      <button 
        onClick={togglePlay} 
        onMouseEnter={() => {
          setIsHovered(true);
          setShowVolumeControl(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setTimeout(() => setShowVolumeControl(false), 2000);
        }}
        className={`p-2 rounded-full transition-all duration-300 flex items-center ${
          isHovered ? 'bg-gray-200 dark:bg-gray-700 scale-110' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
        title={isPlaying ? "Mute Background Music" : "Play Background Music"}
        aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
        disabled={!isLoaded}
      >
        {isPlaying ? (
          volume > 50 ? (
            <Volume2 size={20} className={`transition-colors duration-300 ${isHovered ? 'text-blue-600 dark:text-blue-400' : 'text-blue-500 dark:text-blue-400'}`} />
          ) : (
            <Volume1 size={20} className={`transition-colors duration-300 ${isHovered ? 'text-blue-600 dark:text-blue-400' : 'text-blue-500 dark:text-blue-400'}`} />
          )
        ) : (
          <VolumeX size={20} className={`transition-colors duration-300 ${
            isLoaded 
              ? (isHovered ? 'text-gray-800 dark:text-gray-200' : 'text-gray-600 dark:text-gray-400') 
              : 'text-gray-400 dark:text-gray-600'
          }`} />
        )}
        <span className="sr-only">{isPlaying ? "Mute Background Music" : "Play Background Music"}</span>
      </button>
      
      {showVolumeControl && isPlaying && (
        <div 
          className="absolute left-10 bg-white dark:bg-gray-800 p-2 rounded-md shadow-lg"
          onMouseEnter={() => setShowVolumeControl(true)}
          onMouseLeave={() => setShowVolumeControl(false)}
        >
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
            aria-label="Volume Control"
          />
        </div>
      )}
    </div>
  );
}