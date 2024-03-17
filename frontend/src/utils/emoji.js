export const getRandomEmoji = () => {
    const funEmojis = [
      '😀', '😂', '😊', '😍', '🤔', '😎', '🥳', '😜', '😇', '🤩',
      '🐶', '🐱', '🐭', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁',
      '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐤', '🐣', '🦆',
      '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🪱', '🐌',
      '🐞', '🦋', '🐛', '🐜', '🦟', '🦗', '🕷️', '🦂', '🦠', '🐢',
      '🦕', '🦖', '🦦', '🦥', '🐊', '🐍', '🐢', '🦎', '🦖', '🐙',
      '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋'
    ];
  
    const randomIndex = Math.floor(Math.random() * funEmojis.length);
    const randomEmoji = funEmojis[randomIndex];
  
    return randomEmoji;
};
