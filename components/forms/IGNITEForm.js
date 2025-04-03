export default function IGNITEForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-xl font-bold mb-2">IGNITE Coaching Questionnaire</h2>
      <label>Full Name</label>
      <input name="fullName" className="block border" />
      <label>Preferred Name</label>
      <input name="preferredName" className="block border" />
      <label>Career Story</label>
      <textarea name="careerStory" className="block border" />
      <button type="submit" className="mt-2 bg-blue-600 text-white px-4 py-2">Submit</button>
    </form>
  );
}

