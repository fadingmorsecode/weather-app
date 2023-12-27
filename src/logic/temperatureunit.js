export default function getCurrentUnit() {
  const checkbox = document.querySelector('input[type="checkbox"]');
  let unit;
  if (!checkbox.checked) {
    unit = "f";
  } else {
    unit = "c";
  }
  return unit;
}
