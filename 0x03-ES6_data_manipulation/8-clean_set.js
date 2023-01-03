export default function cleanSet(set, startString) {
  const arr = [];
  for (const item of set) {
    if (item.includes(startString) && startString !== '') {
      arr.push(item.split(startString));
    }
  }
  return arr.join('-').replace(/,/g, '');
}
