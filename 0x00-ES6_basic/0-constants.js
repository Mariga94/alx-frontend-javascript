#!/usr/bin/node
const taskFirst = () => {
  const task = 'I prefer const where I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

let taskNext = () => {
  let combination = 'But sometimes let';
  combination += getLast();
  return coombination;
}

export { taskFirst, taskNext }
