import LoginForm from "@/components/admin/LoginForm";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-premium-light">
      <div className="bg-white p-10 border-2 border-gray-200 w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}