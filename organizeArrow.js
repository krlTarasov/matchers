export default function organizeArrow(array) {
  return array.sort((a, b) => b.health - a.health);
}
