"use client";

import { Dispatch, SetStateAction } from "react";
import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";

type ContactFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export default function ContactFormCopilotBridge({
  formData,
  setFormData,
}: {
  formData: ContactFormData;
  setFormData: Dispatch<SetStateAction<ContactFormData>>;
}) {
  useCopilotReadable(
    {
      description: "The contact form fields and their current values",
      value: formData,
    },
    [formData]
  );

  useCopilotAction({
    name: "fillContactForm",
    description: "Fill out the contact form",
    parameters: [
      {
        name: "name",
        type: "string",
        required: true,
        description: "The full name of the person",
      },
      {
        name: "email",
        type: "string",
        required: true,
        description: "The email address of the person",
      },
      {
        name: "phoneNumber",
        type: "string",
        required: true,
        description:
          "The required phone number including country code (e.g., +15551234567)",
      },
      {
        name: "message",
        type: "string",
        required: true,
        description: "The message content",
      },
    ],
    handler: async (action) => {
      setFormData({
        name: action.name,
        email: action.email,
        phoneNumber: action.phoneNumber,
        message: action.message,
      });
    },
  });

  return null;
}
