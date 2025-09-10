// Google Apps Script code to handle form submissions and save data to Google Sheets

function doGet(e) {
  return ContentService
    .createTextOutput('Google Apps Script is working! Use POST requests to submit form data.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    // Parse the incoming JSON data from the Vue form
    const data = JSON.parse(e.postData.contents);

    // Get the active spreadsheet (replace with your actual Sheet ID if needed)
    const sheetId = 'YOUR_GOOGLE_SHEET_ID_HERE'; // Replace with your Google Sheet ID
    const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();

    // Get the current timestamp
    const timestamp = new Date();

    // Prepare the row data to append to the sheet
    const rowData = [
      timestamp,      // Timestamp
      data.name,      // Name
      data.email,     // Email
      data.message    // Message
    ];

    // Append the data to the sheet
    sheet.appendRow(rowData);

    // Return a success response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return an error response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to set up the sheet headers (run this once manually in the script editor)
function setupSheet() {
  const sheetId = 'YOUR_GOOGLE_SHEET_ID_HERE'; // Replace with your Google Sheet ID
  const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();

  // Set headers in row 1
  sheet.getRange(1, 1).setValue('Timestamp');
  sheet.getRange(1, 2).setValue('Name');
  sheet.getRange(1, 3).setValue('Email');
  sheet.getRange(1, 4).setValue('Message');

  // Format the header row
  const headerRange = sheet.getRange(1, 1, 1, 4);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#f0f0f0');
}
