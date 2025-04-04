// components/MabelChat.js
'use client'; // Add this at the top to make this a Client Component

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CareerAssessmentForm from "@/components/forms/CareerAssessmentForm";
import IGNITEForm from "@/components/forms/IGNITEForm";

const MabelChat = () => {
  const [formType, setFormType] = useState(null); 
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleFormSubmit = async (data) => {
    setIsSubmitting(true); // Start the loading state
    setFormData(data);

    try {
      const response = await openai.chat({
        model: "gpt-4",
        messages: [{ role: "user", content: `Analyze this data: ${JSON.stringify(data)}` }],
      });

      setIsSubmitting(false);
      console.log(response);
    } catch (error) {
      console.error("OpenAI Error:", error);
      setIsSubmitting(false);
    }
  };

  const handleFormSelection = (form) => {
    setFormType(form);
  };

  return (
    <div>
      <div>
        <Button onClick={() => handleFormSelection('career')}>Career Assessment</Button>
        <Button onClick={() => handleFormSelection('ignite')}>IGNITE Form</Button>
      </div>

      {formType === 'career' && <CareerAssessmentForm onSubmit={handleFormSubmit} />}
      {formType === 'ignite' && <IGNITEForm onSubmit={handleFormSubmit} />}

      {isSubmitting && <p>Submitting your data...</p>}

      {formData && (
        <div>
          <h3>Submitted Data</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MabelChat;

