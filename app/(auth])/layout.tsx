import { Logo } from "./_components/logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full items-center justify-center space-y-6 flex flex-col">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
