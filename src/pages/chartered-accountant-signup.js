import Signup from "@/pages/signup";

const charteredAccountantSignup = (path) => {
  return (
    <>
      <Signup path={path.path} isCA={true} />
    </>
  );
};

export default charteredAccountantSignup;
