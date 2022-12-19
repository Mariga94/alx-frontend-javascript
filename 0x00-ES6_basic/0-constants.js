const taskFirst = () => {
  const task = 'I prefer const where I can.';
  return task;
}

function getLast() {
  return ' is okay';
}

let taskNext = () => {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}

export { taskFirst, taskNext, getLast }
