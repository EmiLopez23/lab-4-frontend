import { Button } from "@/components/ui/button";
import { useLoginMutation } from "@/hooks";

export default function Login() {
  const mutation = useLoginMutation({ onError: () => {} });

  const handleLogin = () => {
    mutation.mutate({ username: "test", password: "test" });
  };

  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <h1>Login</h1>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
}
