export default function CareerStrongForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4 mt-4">
      <h2 className="text-lg font-bold">Career Strong: Time Management</h2>

      <label>Task Log - What are your current weekly tasks?</label>
      <textarea name="taskLog" className="w-full border p-2" />

      <label>Reflection: What would you do differently in a stressful week?</label>
      <textarea name="reflection" className="w-full border p-2" />

      <label>Eisenhower Matrix</label>
      <textarea name="urgentImportant" placeholder="Urgent + Important" className="w-full border p-2" />
      <textarea name="importantNotUrgent" placeholder="Important, Not Urgent" className="w-full border p-2" />
      <textarea name="urgentNotImportant" placeholder="Urgent, Not Important" className="w-full border p-2" />
      <textarea name="neither" placeholder="Neither (Eliminate)" className="w-full border p-2" />

      <label>ABC Prioritization</label>
      <input name="abcTask" placeholder="Task" className="w-full border p-2" />
      <select name="abcPriority" className="w-full border p-2">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>

      <label>How do you currently prioritize tasks?</label>
      <textarea name="currentPriority" className="w-full border p-2" />

      <label>How do you handle distractions?</label>
      <textarea name="distractions" className="w-full border p-2" />

      <label>Lesson Satisfaction (1–10)</label>
      <input type="number" name="satisfaction" min="1" max="10" className="w-full border p-2" />

      <label>Readiness to Implement (1–10)</label>
      <input type="number" name="readiness" min="1" max="10" className="w-full border p-2" />

      <label>Key Takeaway</label>
      <input name="takeaway" className="w-full border p-2" />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit Module</button>
    </form>
  );
}
