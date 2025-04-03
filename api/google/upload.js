import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { formType, data } = req.body;

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/drive.file'],
  });

  const drive = google.drive({ version: 'v3', auth });

  try {
    const fileMetadata = {
      name: `${formType}-submission-${Date.now()}.json`,
      mimeType: 'application/json',
    };

    const media = {
      mimeType: 'application/json',
      body: JSON.stringify(data, null, 2),
    };

    const file = await drive.files.create({
      resource: fileMetadata,
      media,
      fields: 'id',
    });

    res.status(200).json({ success: true, fileId: file.data.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to upload to Google Drive' });
  }
}
