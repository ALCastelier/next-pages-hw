import Dummy from "@/components/Dummy";
import Link from "next/link";

export default () => {
  const PageComponent = () => {
    return <h2>this is a page component from home page</h2>;
  };

  return (
    <>
      <h1> Hello World! this is the Home page</h1>
      <PageComponent />
      <div className="generic">
        <Dummy />
      </div>
      <div className="generic">
        <Link href="/other-page">other page</Link>
      </div>
    </>
  );
};

/*

const Index = () => {
  return (
    <>
      <h1> Hello World! </h1>
      <Card/>
    </>
  );
}

export default Index;


const EmptyComponent =  () => {
  return (
    <>
      THIS IS AN EMPTY COMPONENT
    </>
  );
}



*/
