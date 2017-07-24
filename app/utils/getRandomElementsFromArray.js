'use strict';

export default (elements, array) => {
  var length = array.length;
  var result = new Array(elements);
  var taken = new Array(length);

  if (elements > length) {
    throw new RangeError('getRandomElementsFromArray: More elements requested than available!');
  }

  while (elements--) {
    var random = Math.floor(Math.random() * length);
    result[elements] = array[random in taken ? taken[random] : random];
    taken[random] = --length;
  }

  return result;
}