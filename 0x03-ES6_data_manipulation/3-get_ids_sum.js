export default function getStudentIdsSum(arrOfObjs) {
  return arrOfObjs.reduce((acc, curr) => acc + curr.id, 0);
}
