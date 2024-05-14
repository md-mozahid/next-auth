export default function RegisterForm() {
  return (
    <form className="login-form">
      <div>
        <label for="fname">First Name</label>
        <input type="text" name="fname" id="fname" />
      </div>

      <div>
        <label for="lname">Last Name</label>
        <input type="text" name="lname" id="lname" />
      </div>
      <div>
        <label for="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button
        type="submit"
        className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4">
        Create Account
      </button>
    </form>
  )
}
