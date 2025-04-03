export default function CareerAssessmentForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4 mt-4">
      <h2 className="text-lg font-bold">Career & Well-Being Assessment</h2>

      <label>Career Satisfaction (1–5):</label>
      <input name="satisfaction" type="number" min="1" max="5" className="w-full border p-2" required />

      <label>Do you feel valued and recognized?</label>
      <select name="valued" className="w-full border p-2" required>
        <option>Always</option>
        <option>Sometimes</option>
        <option>Rarely</option>
        <option>Never</option>
      </select>

      <label>Do you see growth opportunities?</label>
      <select name="growth" className="w-full border p-2" required>
        <option>Yes</option>
        <option>No</option>
        <option>Unsure</option>
      </select>

      <label>Biggest Career Challenge:</label>
      <select name="challenge" className="w-full border p-2" required>
        <option>Lack of career progression</option>
        <option>Job insecurity</option>
        <option>Workplace culture</option>
        <option>Lack of skill development</option>
        <option>Work-life balance</option>
      </select>

      <label>Upskilling in the past year?</label>
      <select name="upskilling" className="w-full border p-2" required>
        <option>Yes</option>
        <option>No</option>
      </select>

      <label>Area to Improve:</label>
      <select name="improvement" className="w-full border p-2" required>
        <option>Leadership & Management</option>
        <option>Communication & Public Speaking</option>
        <option>Technical Skills</option>
        <option>Negotiation & Salary Growth</option>
        <option>Job Search & Resume Building</option>
      </select>

      <label>Work-related stress frequency:</label>
      <select name="stress" className="w-full border p-2" required>
        <option>Daily</option>
        <option>Weekly</option>
        <option>Occasionally</option>
        <option>Rarely</option>
      </select>

      <label>Support for mental health at work:</label>
      <select name="mental_support" className="w-full border p-2" required>
        <option>Yes</option>
        <option>Somewhat</option>
        <option>No</option>
      </select>

      <label>Biggest well-being struggle:</label>
      <select name="wellbeing" className="w-full border p-2" required>
        <option>Burnout & Work-life balance</option>
        <option>Confidence & Self-worth</option>
        <option>Navigating workplace relationships</option>
        <option>Handling career uncertainty</option>
        <option>Other</option>
      </select>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit Assessment</button>
    </form>
  );
}

