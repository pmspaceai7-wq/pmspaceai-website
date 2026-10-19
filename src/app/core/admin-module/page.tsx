import { permanentRedirect } from "next/navigation";

export default function AdminModuleRedirect() {
  permanentRedirect("/core/admin");
}
