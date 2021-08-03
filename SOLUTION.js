'use strict';

function dirReduc(arr) {
  if (Array.isArray(arr)) arr = arr.map(i => i[0]).join('');
  let result = arr.replace(/NS|SN|EW|WE/g, '');
  if (result == arr) {
    return arr
      .split('')
      .map(i =>
        i == 'W' ? 'WEST' : i == 'E' ? 'EAST' : i == 'N' ? 'NORTH' : 'SOUTH',
      );
  } else {
    return dirReduc(result);
  }
}
