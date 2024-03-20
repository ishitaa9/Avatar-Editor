import React, { useState } from 'react';
import styles from './AvatarEditor.module.css';
import Emojis from './Emoji';
import Colors from './Color';
import Monogram from './Monogram';

const AvatarEditor: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('emojis');
  const [selectedEmoji, setSelectedEmoji] = useState<string>('😊');
  const [backgroundColor, setBackgroundColor] = useState<string>('');
  const [backgroundGradient, setBackgroundGradient] = useState<string>('');

  const handleBackgroundColorChange = (color: string): void => {
    setBackgroundColor(color);
    setBackgroundGradient('');
  };

  const handleBackgroundColorSelect = (color: string): void => {
    if (color.startsWith('linear-gradient')) {
      setBackgroundGradient(color);
      setBackgroundColor('');
    } else {
      setBackgroundColor(color);
      setBackgroundGradient('');
    }
  };

  const handleEmojiSelect = (emoji: string): void => {
    setSelectedEmoji(emoji);
  };

  const handleTextChange = (text: string): void => {
    setSelectedEmoji(text);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.tabs}>
          <button
            className={selectedTab === 'emojis' ? styles.activeTab : ''}
            onClick={() => setSelectedTab('emojis')}
          >
            Emoji
          </button>
          <button
            className={selectedTab === 'colors' ? styles.activeTab : ''}
            onClick={() => setSelectedTab('colors')}
          >
            Colors
          </button>
          <button
            className={selectedTab === 'monogram' ? styles.activeTab : ''}
            onClick={() => setSelectedTab('monogram')}
          >
            Monogram
          </button>
          <button
            className={selectedTab === 'photos' ? styles.activeTab : ''}
            onClick={() => setSelectedTab('photos')}
          >Photos</button>
        </div>
        <div
          className={styles.selectedAvatarPreview}
          style={{
            backgroundColor: backgroundGradient ? 'transparent' : backgroundColor,
            backgroundImage: backgroundGradient
          }}
        >
          {selectedEmoji}
        </div>
      </div>
      <div className={styles.mainArea}>
        {selectedTab === 'emojis' && <Emojis onEmojiSelect={handleEmojiSelect} />}
        {selectedTab === 'colors' && <Colors onColorSelect={handleBackgroundColorChange} />}
        {selectedTab === 'monogram' && (
          <Monogram onColorSelect={handleBackgroundColorSelect} onTextChange={handleTextChange} />
        )}
        <div className={styles.footerContainer}>
          <button className={styles.footer}>Abbrechen</button>
          <button className={styles.footer}>Save</button>
        </div>
      </div>
    </div>
  );
};


export default AvatarEditor;
