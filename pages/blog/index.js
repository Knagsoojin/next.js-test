import {useRouter} from "next/router";
// import Page from "./[id]";

export default function Blog() {
  const router = useRouter();
  return (
    <div>
      <div>Blog입니다.</div>
      <button
        onClick={() => {
          router.back();
        }}
      >
        뒤로 이동
      </button>
      <button
        onClick={() => {
          router.push({
            pathname: "/blog/[id]",
            query: {id: 1},
          });
        }}
      >
        {`[id]로 이동`}으로 이동
      </button>
    </div>
  );
}
