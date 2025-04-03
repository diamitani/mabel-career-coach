import { google } from 'googleapis';

export default async function handler(req, res) {
  const { tokens, content, filename } = req.body;

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials(tokens);
  const drive = google.drive({ version: 'v3', auth: oauth2Client });

  const fileMetadata = { name: filename };
  const media = { mimeType: 'application/json', body: JSON.stringify(content) };

  const response = await drive.files.create({
    resource: fileMetadata,
    media,
    fields: 'id',
  });

  res.status(200).json({ fileId: response.data.id });
}

