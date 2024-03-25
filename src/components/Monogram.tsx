import React, { useState } from 'react';
import styles from './AvatarEditor.module.css';

interface MonogramProps {
  onColorSelect: (color: string) => void;
  onTextChange: (text: string) => void;
}

const Monogram: React.FC<MonogramProps> = ({ onColorSelect, onTextChange }) => {
  const [selectedColor, setSelectedColor] = useState<string | undefined>(''); // Use undefined as the initial state
  const [inputValue, setInputValue] = useState<string>('');

  const solidColors = ['#99ff99', '#ccccff', '#cc66ff', '#00cc99', '#00ffff', '#33ccff', '#ff99cc', '#ffcc00', '#ffff00'];
  const gradientColors = ['linear-gradient(to bottom, #33ccff 18%, #99ff99 59%)', 'linear-gradient(to bottom right, #00cc99 18%, #cc66ff 59%)', 'linear-gradient(to bottom right, #33ccff 18%, #ccccff 59%)', 'linear-gradient(to bottom, #99ff99 0%, #ffcc00 100%)','linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)', 'linear-gradient(to left, #ffcc00 0%, #ffff00 100%)'];

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    onColorSelect(color);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\s/g, '').toUpperCase().substr(0, 3);
    setInputValue(value);
    onTextChange(value);
  };

  return (
    <div className={styles.container}>
      <h2>Monogram</h2>
      <div className={styles.colorPicker}>
        <label htmlFor="color">Select Color:</label>
        <div className={styles.monogramColors}>
          {solidColors.map((color, index) => (
            <div
              key={index}
              className={styles.colorOption}
              style={{ backgroundColor: color }}
              onClick={() => handleColorSelect(color)}
            >
              <span className={styles.centeredText}>{inputValue}</span>
            </div>
          ))}
          {gradientColors.map((gradient, index) => (
            <div
              key={index + solidColors.length}
              className={styles.colorOption}
              style={{ backgroundImage: gradient }}
              onClick={() => handleColorSelect(gradient)}
            >
              <span className={styles.centeredText}>{inputValue}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.monogramInput}>
        <label htmlFor="monogramInput">Enter Monogram (3 letters max):</label>
        <input
          type="text"
          id="monogramInput"
          maxLength={3}
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Monogram;
