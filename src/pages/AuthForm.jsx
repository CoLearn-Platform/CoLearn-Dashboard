import LoginForm from "../ui/LoginForm";

function AuthForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default AuthForm;
