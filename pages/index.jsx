import Head from "next/head";
import Card from "@/components/Card";

export default () => {

const PageComponent =  () => {
  return (
    <h2>
      this is a page component
    </h2>
  );
}

const EmptyComponent =  () => {
  return (
    <>
      THIS IS AN EMPTY COMPONENT
    </>
  );
}


  return (
    <>
      <h1> Hello World! </h1>
      <Card/>
      <PageComponent/>
      <EmptyComponent/>
    </>
  );
}


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