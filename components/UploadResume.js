export default function UploadResume({ onUpload }) {
  const handleFile = (e) => {
    const file = e.target.files[0];
    onUpload(file);
  };

  return (
    <div className="my-4">
      <input type="file" onChange={handleFile} accept=".pdf,.doc,.docx" />
    </div>
  );
}

