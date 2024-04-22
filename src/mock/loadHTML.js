import fs from 'fs/promises';
import path from 'path';

export default async function loadHtml(filepath) {
  const htmlPath = path.join(__dirname, filepath); // Adjust the path as necessary
  const htmlContent = await fs.readFile(htmlPath, 'utf8');
  document.body.innerHTML = htmlContent;
}
