import { google } from 'googleapis';

export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) return res.status(400).send('Missing authorization code');

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/google/oauth/callback`
  );

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // ⚠️ In production, store tokens securely in DB or Supabase
    console.log('OAuth tokens:', tokens);

    res.status(200).send('✅ Google Drive access authorized. You can now upload.');
  } catch (error) {
    console.error('OAuth error:', error);
    res.status(500).send('Failed to complete OAuth callback');
  }
}
