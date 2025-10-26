// Page removed — redirecting to /alumni
import { redirect } from 'next/navigation';

export default function Page() {
  // Redirect server-side to the alumni root so any existing links land correctly.
  redirect('/alumni');
}