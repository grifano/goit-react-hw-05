import { Grid } from "react-loader-spinner";

export default function loader() {
  return (
    <Grid
      visible={true}
      height="40"
      width="40"
      color="#FA8A5B"
      ariaLabel="grid-loading"
      radius="12.5"
    />
  );
}
