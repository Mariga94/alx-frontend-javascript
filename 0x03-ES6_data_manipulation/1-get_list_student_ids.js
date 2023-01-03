export default function getListStudentsIds(arg) {
  if (Array.isArray(arg)) {
    return arg.map((obj) => obj.id);
  }
  return [];
}
