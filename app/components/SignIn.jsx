import { doSignIn } from '../actions'

export default function SignIn() {
  return (
    <form action={doSignIn}>
      <button
        type="submit"
        className="bg-orange-500 rounded-md">
        Sign In
      </button>
    </form>
  )
}
