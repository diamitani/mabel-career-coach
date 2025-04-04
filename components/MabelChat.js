// components/MabelChat.js
'use client'; // Mark as client component to use useState

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CareerAssessmentForm from "@/components/forms/CareerAssessmentForm"; // Your Career Assessment form
import IGNITEForm from "@/components/forms/IGNITEForm"; // Your IGNITE form

export default function MabelChat() {
  const [formType, setFormType] = useState(null); // Tracks the form being displayed
  const [formData, setFormData] = useState({}); // Tracks form submission data

  // Handle form submission
  const handleFormSubmit = (data) => {
    setFormData(data);
    setFormType(null); // Clear form after submission
  };

  // Handle form selection
  const handleFormSelection = (form) => {
    setFormType(form);
  };

  return (
    <div>
      {/* Button to trigger form selection */}
      <div>
        <Button onClick={() => handleFormSelection('career')}>Career Assessment</Button>
        <Button onClick={() => handleFormSelection('ignite')}>IGNITE Form</Button>
      </div>

      {/* Render the correct form based on user selection */}
      {formType === 'career' && <CareerAssessmentForm onSubmit={handleFormSubmit} />}
      {formType === 'ignite' && <IGNITEForm onSubmit={handleFormSubmit} />}

      {/* Show submitted form data */}
      {formData && (
        <Card>
          <CardContent>
            <h3>Submitted Data</h3>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
