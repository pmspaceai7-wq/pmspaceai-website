import { permanentRedirect } from "next/navigation";

// This component will automatically redirect users.
export default function TransformRedirectPage() {
  permanentRedirect("/platform/inefficiency");

  return null;
}
