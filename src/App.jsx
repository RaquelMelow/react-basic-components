import Box from "./components/ui/box/Box";
import BtnIcon from "./components/ui/btn-icon/BtnIcon";

function App() {
  return (
    <>
      <Box color="green" size={150}>
        <p>hey</p>
      </Box>
      <Box color="red" size={50} />
      <Box></Box>
      <BtnIcon icon="user" text="@username"/>
    </>
  );
}

export default App;
