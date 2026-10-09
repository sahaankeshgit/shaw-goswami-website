"use server";

export interface ContactState {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
    company?: string;
    role?: string;
    phone?: string;
    helpType?: string;
    message?: string;
  };
}

export async function submitContactForm(
  prevState: any,
  formData: FormData
): Promise<ContactState> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const role = formData.get("role") as string;
  const phone = formData.get("phone") as string;
  const helpType = formData.get("helpType") as string;
  const message = formData.get("message") as string;

  const errors: ContactState["errors"] = {};

  if (!name || name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please provide a valid email address.";
  }
  if (!company || company.trim().length === 0) {
    errors.company = "Company name is required.";
  }
  if (!role || role.trim().length === 0) {
    errors.role = "Job title/role is required.";
  }
  if (!helpType || helpType === "") {
    errors.helpType = "Please select how we can help.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the errors in the form.",
      errors,
    };
  }

  // Log to server console (or in Phase 2: POST directly to HubSpot API)
  console.log("=== NEW INBOUND LEAD SUBMISSION ===");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Company: ${company}`);
  console.log(`Role: ${role}`);
  console.log(`Phone: ${phone || "N/A"}`);
  console.log(`Consultation Interest: ${helpType}`);
  console.log(`Message: ${message || "No text provided"}`);
  console.log("====================================");

  return {
    success: true,
    message: "Thank you for your enquiry. The Shaw & Goswami AI team will review your priorities and get back to you.",
  };
}
