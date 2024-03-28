import Link from "next/link";

const Home = () => {
  return (
    <main>
      <Link href="/dashboard"></Link>
      <Link href="/authorization/login">login</Link>
      <Link href="/authorization/registretion">registration</Link>
      <Link href="/authorization/recovery">recovery</Link>

    </main>
  );
}
export default Home;