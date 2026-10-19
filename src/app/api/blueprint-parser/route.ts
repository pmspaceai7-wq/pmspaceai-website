import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 120;

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Expected a multipart form body." }, { status: 400 });
  }

  const upload = form.get("file");
  if (!(upload instanceof File)) {
    return NextResponse.json(
      { error: "Provide a PDF in the 'file' field." },
      { status: 400 },
    );
  }
  
  try {
    const res = await fetch("https://spaceai-llmpc.ngrok.app/floorbackend/process", {
      method: "POST",
      body: form,
    });
    
    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json({ error: `Backend API error: ${errorText}` }, { status: res.status });
    }
    
    const extraction = await res.json();
    return NextResponse.json(extraction);
  } catch (error) {
    console.error("[Blueprint Parser API] Error forwarding request:", error);
    return NextResponse.json(
      { error: "Could not process uploaded PDF using backend API." },
      { status: 500 }
    );
  }
}
