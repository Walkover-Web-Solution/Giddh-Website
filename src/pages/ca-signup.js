import Signup from "@/pages/signup";

const caSignup = (path) => {
  return (
    <>
      <Signup path={path.path} isCA={true} />
    </>
  );
};

export default caSignup;