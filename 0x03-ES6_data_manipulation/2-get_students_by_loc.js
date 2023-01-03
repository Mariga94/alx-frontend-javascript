export default function getStudentsByLocation(arr, str) {
  if (Array.isArray(arr) && typeof (str) === 'string') {
    return arr.filter((obj) => obj.location === str);
  }
  return undefined;
}
