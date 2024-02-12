import Dummy from "@/components/Dummy";
import Link from "next/link";

const OtherPage = () => {
  const PageComponent = () => {
    return <h2>this is a page component from other-page</h2>;
  };

  return (
    <>
      <h1> other-page </h1>
      <PageComponent />
      <div className="generic">
        <Dummy />
      </div>
      <div className="generic">
        <Link href="/">Home page</Link>
      </div>
    </>
  );
};

export default OtherPage;
