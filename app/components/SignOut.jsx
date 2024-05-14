import { doSignOut } from "../actions";

export default function SignOut() {
  return (
    <form action={doSignOut}>
      <button type="submit" className="bg-slate-500 px-3 py-1 rounded-md">Sign Out</button>
    </form>
  );
}
