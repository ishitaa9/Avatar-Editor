import React, { useState } from 'react';
import styles from './AvatarEditor.module.css';

interface ColorsProps {
  onColorSelect: (color: string) => void;
}

const Colors: React.FC<ColorsProps> = ({ onColorSelect }) => {
  const colors = [ '#ffff00', '#ff00ff', '#00ffff', '#669999', '#9999ff', '#999966', '#00cc99', '#ff9900', '#ff99cc', '#ccffff', '#ff6666', '#336699'];

  const handleColorSelect = (color: string) => {
    onColorSelect(color); // Call the onColorSelect callback with the selected color
  };

  return (
    <div className={styles.container}>
      <h2>Colors</h2>
      <div className={styles.colors}>
        {colors.map((color, index) => (
          <div
            key={index}
            className={styles.colorOption}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Colors;
