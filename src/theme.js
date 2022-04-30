import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: [
          'Roboto Mono',
          '"Helvetica Neue"'
        ].join(','),
      },
    palette:{
        primary:{
            lightest:'#E0E0E0',
            light:'#525252',
            main: '#333333',
            dark: '#141414',

        },
        secondary:{
            light:'#F8CB8B',
            main:'#F4AC45',
            dark:'#F29718',

        },
        tertiary:{
            main:'#55868C',

        },
        skills1:{
            main:'#6AC870',
            dark:'#8FD694'
            
        },
        skills2:{
            main:'#EF3E36',
        },
        skills3:{
            main:'#FE5F55',
        },
        skills4:{
            main:'#A6D9F7',
        },
        skills5:{
            main:'#8FD694',
        },
        skills6:{
            main:'#642CA9'
        }
    }
})

export default theme