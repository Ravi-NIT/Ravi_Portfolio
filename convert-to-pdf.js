import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertToPDF() {
  try {
    console.log('Starting PDF conversion...');
    
    // Launch browser
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Read the HTML file
    const htmlPath = path.join(__dirname, 'public', 'Saurav_Kumar_Resume.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Set content
    await page.setContent(htmlContent, {
      waitUntil: 'networkidle0'
    });
    
    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
      }
    });
    
    // Save PDF
    const pdfPath = path.join(__dirname, 'public', 'Saurav_Kumar_Resume.pdf');
    fs.writeFileSync(pdfPath, pdfBuffer);
    
    console.log('PDF created successfully at:', pdfPath);
    
    await browser.close();
  } catch (error) {
    console.error('Error converting to PDF:', error);
  }
}

convertToPDF(); 