# System Architecture - Form Submissions Flow

## 📊 How It Works

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER INTERACTIONS                         │
└─────────────────────────────────────────────────────────────────┘
                                  │
                    ┌─────────────┼─────────────┐
                    │             │             │
                    ▼             ▼             ▼
         ┌──────────────┐  ┌──────────┐  ┌───────────┐
         │ Inquiry Form │  │ Consult  │  │ WhatsApp  │
         │   (Mobile/   │  │  Modal   │  │  Widget   │
         │   Desktop)   │  │          │  │           │
         └──────┬───────┘  └────┬─────┘  └─────┬─────┘
                │               │              │
                └───────────────┼──────────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │  /api/submit-inquiry  │
                    │   (Next.js API Route) │
                    └───────────┬───────────┘
                                │
                    ┌───────────┴───────────┐
                    │                       │
                    ▼                       ▼
            ┌──────────────┐      ┌─────────────────┐
            │  Validation  │      │  Logging (if    │
            │   - Name     │      │   no webhook)   │
            │   - Email    │      └─────────────────┘
            │   - Phone    │
            │   - Message  │
            └──────┬───────┘
                   │
                   ▼
         ┌──────────────────────┐
         │ SHEET_WEBHOOK_URL    │
         │  (Environment Var)   │
         └──────────┬───────────┘
                    │
                    ▼
    ┌──────────────────────────────────────┐
    │     Google Apps Script Web App       │
    │          (doPost function)           │
    └──────────────┬───────────────────────┘
                   │
         ┌─────────┴─────────┐
         │                   │
         ▼                   ▼
┌─────────────────┐  ┌───────────────┐
│  Google Sheets  │  │  Gmail API    │
│  (Append Row)   │  │  (Send Email) │
│                 │  │               │
│  Timestamp      │  │  To: Admin    │
│  Source         │  │  Subject: New │
│  Type           │  │  Inquiry      │
│  Name           │  │  Body: Form   │
│  Email          │  │  Details      │
│  Phone          │  │               │
│  Message        │  └───────────────┘
│  Page URL       │
│  IP             │
│  User Agent     │
└─────────────────┘
```

## 🔄 Data Flow Details

### 1. User Submits Form
- User fills form on website
- Client-side validation runs
- Form data is collected

### 2. API Route Processing
- POST request to `/api/submit-inquiry`
- Server-side validation:
  - Required fields check
  - Email format validation
  - Phone format validation
- Data enrichment:
  - Add timestamp
  - Add source/type
  - Add IP address
  - Add user agent

### 3. Google Apps Script
- Receives JSON payload
- Appends row to Google Sheet
- Sends email notification via MailApp
- Returns success/error response

### 4. User Feedback
- Success: Green message + form reset
- Error: Red message + retry option
- Consultation modal: Auto-close on success

## 📝 Data Schema

### What Gets Sent to Google Sheets:

```typescript
{
  timestamp: "2025-11-24T10:30:00.000Z",
  source: "inquiry-form-mobile" | "inquiry-form-desktop" | "consultation-modal" | "whatsapp-widget",
  type: "inquiry" | "consultation" | "whatsapp-click",
  name: "John Doe",
  email: "john@example.com",
  phone: "+94712345678",
  message: "I'm interested in...",
  pageUrl: "https://jancohomes.com/",
  ip: "123.45.67.89",
  userAgent: "Mozilla/5.0..."
}
```

## 🔒 Security Features

1. **Server-Side Validation** - All inputs validated on server
2. **Type Safety** - TypeScript ensures correct data types
3. **Error Handling** - Graceful error messages, no sensitive data exposed
4. **Environment Variables** - Webhook URL kept secret
5. **HTTPS Only** - Production uses encrypted connections

## ⚡ Performance

- **Client-Side**: Instant validation feedback
- **API Route**: ~100-300ms processing
- **Google Apps Script**: ~500-1000ms (includes email)
- **Total**: ~1-2 seconds from submit to confirmation

## 🎯 Features

✅ **Multiple Entry Points** - Forms, modals, and WhatsApp
✅ **Unified Backend** - Single API endpoint for all submissions
✅ **Automatic Emails** - Instant notifications
✅ **Data Persistence** - All submissions logged in Google Sheets
✅ **User Feedback** - Real-time success/error messages
✅ **Analytics Ready** - Tracks source, type, and page URL
✅ **Mobile Optimized** - Works on all devices
✅ **Free Solution** - No paid services required

## 🛠️ Maintenance

### Monitor Submissions
- Check Google Sheet regularly
- Set up email filters for notifications
- Review submission patterns

### Update Email Templates
- Edit Apps Script `doPost` function
- Customize subject and body
- Add conditional routing

### Scale Up (if needed)
- Apps Script handles 1000s of submissions/day
- Gmail quota: 100 emails/day (can upgrade to workspace)
- Google Sheets max: 5 million cells

---

**Simple, reliable, and free!** 🚀
