# Google Sheets Integration Setup Guide

This guide will walk you through setting up Google Sheets to receive form submissions from your website and automatically send email notifications.

## 🎯 Overview

Your website now has:
- ✅ Inquiry form (home page)
- ✅ Consultation modal (popup)
- ✅ Floating WhatsApp widget
- ✅ API route to handle submissions
- ✅ Ready to connect to Google Sheets

## 📋 Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Janco Inquiries" (or any name you prefer)
3. In the first row (header row), add these column names:

```
Timestamp | Source | Name | Email | Phone | Message
```

**Column descriptions:**
- **Timestamp**: When the form was submitted
- **Source**: Where the submission came from (inquiry-form-mobile, inquiry-form-desktop, consultation-modal, whatsapp-widget)
- **Name**: User's name
- **Email**: User's email
- **Phone**: User's phone number
- **Message**: User's message

## 📝 Step 2: Add Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any default code
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    // Parse incoming JSON data
    var data = {};
    
    // Check if e exists and has postData (when called from web)
    if (e && e.postData && e.postData.type === 'application/json') {
      data = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      data = e.parameter;
    } else {
      // If called directly (Run button), return error
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error', message: 'This function must be called via HTTP POST, not Run button' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Get the active sheet (adjust sheet name if needed)
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    
    // Prepare the row data matching your columns
    // Columns: Timestamp | Source | Name | Email | Phone | Message
    var row = [
      data.timestamp || new Date().toISOString(),
      data.source || '',
      data.name || '',
      data.email || '',
      data.phone || '',
      data.message || ''
    ];
    
    // Append the row to the sheet
    sheet.appendRow(row);

    // Send email notification
    var adminEmail = 'your-email@example.com'; // ⚠️ CHANGE THIS to your email
    
    // Customize email based on submission source
    var subject = 'New Inquiry from ' + (data.name || 'Website Visitor');
    
    var body = 'You have received a new inquiry from your website:\n\n' +
               '━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
               'Source: ' + (data.source || 'N/A') + '\n' +
               'Timestamp: ' + (data.timestamp || new Date()) + '\n' +
               '━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
               'CONTACT DETAILS:\n' +
               'Name: ' + (data.name || 'N/A') + '\n' +
               'Email: ' + (data.email || 'N/A') + '\n' +
               'Phone: ' + (data.phone || 'N/A') + '\n\n' +
               'MESSAGE:\n' + (data.message || 'N/A') + '\n\n' +
               '━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
               'Please respond to the customer promptly!\n';

    MailApp.sendEmail(adminEmail, subject, body);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Data saved and email sent' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    // Log the error for debugging
    Logger.log('Error: ' + err.message);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```
      
  } catch (err) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. **Important:** Change `'your-email@example.com'` to your actual email address
5. **Optional:** If your sheet is not named "Sheet1", change it in the code:
   ```javascript
   var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('YOUR_SHEET_NAME');
   ```

## 🚀 Step 3: Deploy Apps Script as Web App

1. In the Apps Script editor, click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Configure the deployment:
   - **Description**: "Form submission handler" (or any description)
   - **Execute as**: Select **Me** (your Google account)
   - **Who has access**: Select **Anyone** (this allows your website to send data)
4. Click **Deploy**
5. **Authorize the script:**
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" if you see a warning
   - Click "Go to [Your Project Name] (unsafe)" (it's safe, it's your script)
   - Click "Allow"
6. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXX/exec
   ```
   ⚠️ **Save this URL - you'll need it in the next step!**

## 🔧 Step 4: Configure Your Website

1. In your project root, create a file named `.env.local` (if it doesn't exist)
2. Add this line with your Web App URL:
   ```
   SHEET_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec"
   ```
3. Replace `YOUR_ACTUAL_SCRIPT_ID` with the URL you copied in Step 3

## 📱 Step 5: Configure WhatsApp Widget (Optional)

The WhatsApp widget is already added to your site! To customize it:

1. Open `src/components/ui/WhatsAppWidget.tsx`
2. Update the default phone number and message:
   ```typescript
   phoneNumber = "94712345678" // Your WhatsApp number with country code
   message = "Hello! I'm interested in your construction services."
   ```

Or configure via props in `src/app/layout.tsx`:
```typescript
<WhatsAppWidget 
  phoneNumber="94712345678"
  message="Custom message here"
/>
```

## 🧪 Step 6: Test Everything

### Test Locally:

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000

3. Test each form:
   - **Inquiry Form**: Fill out and submit
   - **Consultation Modal**: Click any "Book Consultation" button, fill and submit
   - **WhatsApp Widget**: Click the floating WhatsApp icon (bottom right)

4. Check results:
   - ✅ Google Sheet should have new rows
   - ✅ You should receive emails for form submissions
   - ✅ WhatsApp should open with pre-filled message

### Common Issues:

**❌ "Failed to submit" error:**
- Check that `SHEET_WEBHOOK_URL` is set in `.env.local`
- Verify the URL is correct
- Make sure you deployed the Apps Script as "Anyone" can access

**❌ No email received:**
- Check spam folder
- Verify the email address in Apps Script is correct
- Check Apps Script execution logs: **Apps Script Editor** → **Executions**

**❌ WhatsApp doesn't open:**
- Verify the phone number format (no spaces, dashes, or special characters)
- Should be: country code + number (e.g., "94712345678")

## 🎨 Advanced Customization

### Send Emails to Different Addresses

Edit the Apps Script to route emails based on type:

```javascript
var adminEmail = 'inquiries@jancohomes.com';
if (data.type === 'consultation') {
  adminEmail = 'consultations@jancohomes.com';
}
```

### Add Auto-Reply Email

Add this to your Apps Script (after sending the admin email):

```javascript
// Send auto-reply to customer
if (data.email) {
  var replySubject = 'Thank you for contacting Janco Homes';
  var replyBody = 'Dear ' + (data.name || 'Customer') + ',\n\n' +
                  'Thank you for your inquiry. We have received your message and will get back to you within 24 hours.\n\n' +
                  'Best regards,\nJanco Homes Team';
  MailApp.sendEmail(data.email, replySubject, replyBody);
}
```

### Add Spam Protection

The API already includes basic validation. For additional protection:

1. Add Google reCAPTCHA (see reCAPTCHA documentation)
2. Implement rate limiting on the API route
3. Add honeypot fields to forms

## 📊 View Your Data

Access your submissions anytime at:
- Your Google Sheet: https://sheets.google.com
- Or create a Google Data Studio dashboard for analytics

## 🔒 Security Notes

- The Apps Script runs as your Google account
- It can only send emails from your Gmail account
- The webhook URL is public but only accepts POST requests
- Form data is validated on your server before sending to Google

## 🚀 Deploy to Production

When deploying to Vercel/Netlify:

1. Add the environment variable in your hosting dashboard:
   - Variable name: `SHEET_WEBHOOK_URL`
   - Value: Your Apps Script Web App URL

2. Redeploy your site

3. Test on production URL

---

## ✅ Checklist

- [ ] Google Sheet created with headers
- [ ] Apps Script code added and email address updated
- [ ] Apps Script deployed as Web App
- [ ] Web App URL copied
- [ ] `.env.local` created with `SHEET_WEBHOOK_URL`
- [ ] WhatsApp number configured
- [ ] Local testing completed
- [ ] Production environment variable set
- [ ] Production testing completed

---

**Need Help?** Check the Apps Script execution logs or browser console for detailed error messages.
