import { SignIn } from '@clerk/nextjs';

const LoginPage = () => {
  return (
    <div className="flex h-full justify-center items-center">
      <SignIn />
    </div>
  );
};
export default LoginPage;
