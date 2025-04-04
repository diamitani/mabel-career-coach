import React, { useState } from "react";
import { Button } from "../ui/button";

const IGNITEForm = () => {
  const [formData, setFormData] = useState({
    inspiration: "",
    strengths: "",
    challenges: "",
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
    alert("IGNITE Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>IGNITE Form</h2>

      <div>
        <label>What inspires you?</label>
        <input
          type="text"
          name="inspiration"
          value={formData.inspiration}
          onChange={handleChange}
          placeholder="Enter what inspires you"
        />
      </div>

      <div>
        <label>Your Strengths</label>
        <textarea
          name="strengths"
          value={formData.strengths}
          onChange={handleChange}
          placeholder="Describe your strengths"
        />
      </div>

      <div>
        <label>Your Biggest Challenge</label>
        <textarea
          name="challenges"
          value={formData.challenges}
          onChange={handleChange}
          placeholder="Describe your biggest challenge"
        />
      </div>

      <div>
        <Button label="Submit" onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default IGNITEForm;


