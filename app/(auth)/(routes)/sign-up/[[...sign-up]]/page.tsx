import { SignUp } from '@clerk/nextjs';

const RegisterPage = () => {
  return (
    <div className="flex h-full justify-center items-center">
      <SignUp />
    </div>
  );
};
export default RegisterPage;
