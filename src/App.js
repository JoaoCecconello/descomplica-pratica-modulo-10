import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#70161E",
    },
    secondary: {
      main: "#7EA16B",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <ListarTarefa />
      </div>
    </ThemeProvider>
  );
}

export default App;
