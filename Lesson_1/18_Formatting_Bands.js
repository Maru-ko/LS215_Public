let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  data = data.map(obj => ({...obj}));
  return data.map(obj => {
    obj.country = 'Canada';
    obj.name = stringCleaner(obj.name);
    return obj;
  });
}

function stringCleaner(str) {
  return str.split(' ').map(nStr => {
    let word = removeDot(nStr);//nStr.split('').filter(x => x !== '.').join('');
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
}

function removeDot(str) {
  return str.split('').filter(x => x !== '.').join('');
}

processBands(bands);