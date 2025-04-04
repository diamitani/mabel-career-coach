import React, { useState } from "react";
import { Button } from "../ui/button";

const CareerAssessmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    careerGoals: "",
    satisfaction: "",
    biggestChallenge: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Career Assessment</h2>

      <div>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label>Your Career Goals</label>
        <textarea
          name="careerGoals"
          value={formData.careerGoals}
          onChange={handleChange}
          placeholder="Describe your career goals"
        />
      </div>

      <div>
        <label>How satisfied are you with your current job/career?</label>
        <select
          name="satisfaction"
          value={formData.satisfaction}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="1">1 - Not satisfied at all</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 - Highly satisfied</option>
        </select>
      </div>

      <div>
        <label>Your biggest challenge in your career?</label>
        <select
          name="biggestChallenge"
          value={formData.biggestChallenge}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="lack_of_progress">Lack of career progression</option>
          <option value="job_insecurity">Job insecurity</option>
          <option value="workplace_culture">Workplace culture</option>
          <option value="lack_of_skill">Lack of skill development</option>
          <option value="work_life_balance">Work-life balance</option>
        </select>
      </div>

      <div>
        <Button label="Submit" onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default CareerAssessmentForm;

