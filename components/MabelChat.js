import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MabelChat() {
  const [userType, setUserType] = useState(null);
  const [step, setStep] = useState("start");
  const [messages, setMessages] = useState([
    {
      role: "system",
      text: "Hi, I’m Mabel — your career and wellness coach. Are you a Job Seeker, Employer, or Coaching Client?",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const assistantId = process.env.NEXT_PUBLIC_ASSISTANT_ID;

  const sendMessageToAssistant = async (message) => {
    setLoading(true);
    try {
      const res = await fetch("/api/assistant/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, assistantId }),
      });
      const data = await res.json();
      if (data?.reply) {
        setMessages((prev) => [...prev, { role: "system", text: data.reply }]);
      }
    } catch (err) {
      setMessages((prev) => [...prev, { role: "system", text: "Sorry, something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = async (type) => {
    setUserType(type);
    setMessages((prev) => [
      ...prev,
      { role: "user", text: type },
    ]);
    await sendMessageToAssistant(type);
    setStep("options");
  };

  const roleOptions = {
    "Job Seeker": [
      "Upload Resume",
      "Run Career Assessment",
      "Start IGNITE Questionnaire",
      "Launch Job Tracker",
      "Book Consult",
      "Newsletter Opt-In",
    ],
    "Employer": [
      "DEI Strategy Tips",
      "Schedule Employer Consult",
      "Explore Growth Academy",
    ],
    "Coaching Client": [
      "Start IGNITE",
      "Try Career Strong Module",
      "Book Coaching Session",
    ],
  };

  const handleOptionClick = async (option) => {
    setMessages((prev) => [...prev, { role: "user", text: option }]);
    await sendMessageToAssistant(option);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <Card>
        <CardContent>
          {messages.map((msg, i) => (
            <div key={i} className={`my-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
              <span className={`inline-block px-3 py-2 rounded-xl ${msg.role === "user" ? "bg-blue-100" : "bg-gray-100"}`}>{msg.text}</span>
            </div>
          ))}
          {step === "start" && (
            <div className="flex flex-wrap gap-2 mt-4">
              {["Job Seeker", "Employer", "Coaching Client"].map((type) => (
                <Button key={type} onClick={() => handleSelect(type)}>{type}</Button>
              ))}
            </div>
          )}
          {step === "options" && userType && (
            <div className="flex flex-wrap gap-2 mt-4">
              {roleOptions[userType]?.map((option) => (
                <Button key={option} onClick={() => handleOptionClick(option)}>{option}</Button>
              ))}
            </div>
          )}
          {loading && <p className="mt-2 text-sm text-gray-500">Thinking...</p>}
        </CardContent>
      </Card>
    </div>
  );
}
