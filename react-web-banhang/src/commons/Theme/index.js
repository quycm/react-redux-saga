import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    color: {
        primary: "#0288D1",
        secondary: "#B3E5FC",
        error: "#FF5722",
      },
      typography: {
          fontFamily: "Roboto",

      },
      shape: {
          borderRadius: 4,
          backgroundColor: "#FFCCBC",
          textColor: "#ffffff"
      }
});

export default theme