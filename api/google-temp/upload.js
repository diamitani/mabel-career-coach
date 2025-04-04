import { google } from "googleapis";

export default async function handler(req, res) {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/google/callback`
  );

  oauth2Client.setCredentials(req.body.tokens); // Use tokens from callback

  const drive = google.drive({ version: "v3", auth: oauth2Client });

  const fileMetadata = {
    name: req.body.fileName,
  };
  const media = {
    mimeType: "application/pdf",  // Adjust for your file type
    body: req.body.fileContent,
  };

  try {
    const response = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id",
    });

    res.status(200).send(`File uploaded: ${response.data.id}`);
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).send("Failed to upload file");
  }
}
