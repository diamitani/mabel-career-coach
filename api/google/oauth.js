import { google } from 'googleapis';

export default async function handler(req, res) {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, NEXT_PUBLIC_REDIRECT_URI } = process.env;
  const oauth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    NEXT_PUBLIC_REDIRECT_URI
  );
  const scopes = ['https://www.googleapis.com/auth/drive.file'];
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  });
  res.redirect(authUrl);
}

