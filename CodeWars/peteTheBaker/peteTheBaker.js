const cakes = (recipe, avail) => {
  let quantities = [];
  for (let prop in recipe) {
    if (
      !avail.hasOwnProperty(prop) ||
      Math.floor(avail[prop] / recipe[prop]) === 0
    ) {
      return 0;
    } else {
      quantities.push(Math.floor(avail[prop] / recipe[prop]));
    }
  }
  return Math.min(...quantities);
};

export default cakes;
