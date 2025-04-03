export default function CareerAssessment({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-xl font-bold mb-2">Career Assessment</h2>
      <label>Satisfaction (1–5)</label>
      <input name="satisfaction" type="number" min="1" max="5" className="block border" />
      <label>Feel Valued?</label>
      <select name="valued" className="block border">
        <option>Always</option>
        <option>Sometimes</option>
        <option>Rarely</option>
        <option>Never</option>
      </select>
      <button type="submit" className="mt-2 bg-blue-600 text-white px-4 py-2">Submit</button>
    </form>
  );
}

