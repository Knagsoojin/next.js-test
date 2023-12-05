import {useRouter} from "next/router";

export default function Page() {
  const {query} = useRouter();
  return <div>id: {query.id}</div>;
}
