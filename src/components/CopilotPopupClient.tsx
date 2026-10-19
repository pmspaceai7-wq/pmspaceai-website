"use client";

import dynamic from "next/dynamic";

const CopilotPopup = dynamic(
  () => import("@copilotkit/react-ui").then((mod) => mod.CopilotPopup),
  { ssr: false }
);

export default function CopilotPopupClient() {
  return (
    <CopilotPopup
      instructions={
        "You are assisting the user to the best of your ability. Provide the best possible answers based on the information available, focusing on AI Project Management, Data-Driven Insights, and Innovative Solutions.. Your only role is to collect the user's Name, Email, and Message in order to fill and submit the contact form.If users ask about anything other than filling the form, politely decline and inform them that this chat is only for submitting the contact form."
      }
      labels={{
        title: "Space AI Assistant",
        initial:
          "I am the Space AI Assistant. How can I assist you with AI Project Management, Data-Driven Insights, or Innovative Solutions?",
      }}
      imageUploadsEnabled={false}
    />
  );
}
