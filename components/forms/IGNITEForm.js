export default function IGNITEForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4 mt-4">
      <h2 className="text-lg font-bold">IGNITE Coaching Questionnaire</h2>

      <label>Full Name</label>
      <input name="fullName" className="w-full border p-2" required />

      <label>Preferred Name</label>
      <input name="preferredName" className="w-full border p-2" required />

      <label>Pronouns</label>
      <input name="pronouns" className="w-full border p-2" />

      <label>Career Story (3 sentences)</label>
      <textarea name="careerStory" className="w-full border p-2" required />

      <label>Current Job Title & Employer</label>
      <input name="jobTitle" className="w-full border p-2" required />

      <label>Current Responsibilities</label>
      <textarea name="responsibilities" className="w-full border p-2" required />

      <label>Career Highlights</label>
      <textarea name="highlights" className="w-full border p-2" required />

      <label>What Fuels You Outside of Work?</label>
      <input name="outsideFuel" className="w-full border p-2" required />

      <label>Describe Your Professional Flame</label>
      <textarea name="flame" className="w-full border p-2" />

      <label>What Sparks Joy (Besides Coffee)?</label>
      <input name="joy" className="w-full border p-2" required />

      <label>Short-Term Career Goal (6–12 months)</label>
      <textarea name="shortTermGoal" className="w-full border p-2" />

      <label>Long-Term Career Aspirations</label>
      <textarea name="longTermGoal" className="w-full border p-2" />

      <label>Career Coaching Interests</label>
      <textarea name="interests" className="w-full border p-2" />

      <label>Stress Level (1–10)</label>
      <input type="number" name="stressLevel" min="1" max="10" className="w-full border p-2" />

      <label>Burning Questions or Concerns?</label>
      <textarea name="questions" className="w-full border p-2" />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit IGNITE</button>
    </form>
  );
}

