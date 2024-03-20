import React, { useState } from 'react';
import styles from './AvatarEditor.module.css';

interface EmojisProps {
  onEmojiSelect: (emoji: string) => void;
}

const Emojis: React.FC<EmojisProps> = ({ onEmojiSelect }) => {
  const [selectedEmoji, setSelectedEmoji] = useState<string>('😊');
  const emojis = ['😊', '😂', '😍', '🥰', '😎', '😜', '😇'];

  const handleEmojiSelect = (emoji: string) => {
    setSelectedEmoji(emoji);
    onEmojiSelect(emoji);
  };

  return (
    <div className={styles.container}>
      <h2>Emojis</h2>
      <div className={styles.emojisGrid}>
        {emojis.map((emoji, index) => (
          <span
            key={index}
            className={`${styles.emoji} ${selectedEmoji === emoji ? styles.selected : ''}`}
            onClick={() => handleEmojiSelect(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Emojis;
