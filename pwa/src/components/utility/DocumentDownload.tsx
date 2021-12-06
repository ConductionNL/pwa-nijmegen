export function documentDownload(
  base64: string,
  filename: string,
  extension: string
) {
  const element = document.createElement("a");
  element.setAttribute("href", base64);
  element.setAttribute("download", filename + extension);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
