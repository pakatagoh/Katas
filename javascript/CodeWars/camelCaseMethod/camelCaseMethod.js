String.prototype.camelCase = function() {
  return this.trim()
    .split(' ')
    .map(el => {
      return el.slice(0, 1).toUpperCase() + el.slice(1);
    })
    .join('');
};

export default String;
