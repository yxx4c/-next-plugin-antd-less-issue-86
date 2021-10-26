import { Button } from "antd";
import Link from "next/link";

const IndexPage = () => (
  <div
    style={{
      display: "flex",
      width: "100vw",
      height: "100vh",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#000000",
    }}
  >
    <Link href="/">Link Color</Link>
    <Button type="primary">Primary Color</Button>
  </div>
);

export default IndexPage;
