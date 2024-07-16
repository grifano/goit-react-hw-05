import { Rings } from "react-loader-spinner";

export default function Loader() {
  const spinnerStyle = {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(8px)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "9999",
  };
  return (
    <Rings
      visible={true}
      height="100"
      width="100"
      color="#FA8A5B"
      ariaLabel="rings-loading"
      wrapperStyle={spinnerStyle}
    />
  );
}
