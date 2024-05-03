import ImmoJungleBisInternal from "@/components/ImmoJungleBisInternal";
import Link from "next/link";

const ImmoJungleBis = () => {
  return (
    <>
      <ImmoJungleBisInternal />
      <div className="generic">
        <Link href="/">Home page</Link>
        <h3></h3>
        <Link href="/immo-jungle">immo jungle</Link>
      </div>
    </>
  );
};

export default ImmoJungleBis;