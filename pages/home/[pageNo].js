import { useRouter } from "next/router";
const pageNo = () => {
  const router = useRouter();
  const pageNumbber = router.query.pageNo;
  return (
    <>
      <h1>Hello World!</h1>
      <h2>This is my Home{pageNumbber} content</h2>
    </>
  );
};

export default pageNo;
