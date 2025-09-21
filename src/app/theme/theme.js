'use client';

import { createTheme, responsiveFontSizes, CssBaseline } from '@mui/material';
import { GlobalStyles } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import "@/app/theme/global.css"


// Основные цвета брендов
const COLORS = {
    real: {
        main: '#FFC300',
    },
    kairat: {
        main: '#FFCB05',
    },
    button: {
        background: '#F97316',
        hover: "#EA580C",
        text: '#F8FAFC',
    }
};

// Создание темы
let theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,      // обычно 0
            sm: 600,    // изменили с 600 на 480
            md: 900,    // изменили с 900 на 768
            lg: 1200,   // изменили с 1200 на 1024
            lge: 1280,
            xl: 1500,   // оставили 1440
            xxl: 1920,  // добавили новый кастомный breakpoint
        },
    },
    palette: {
        mode: 'light',
        primary: {
            main: COLORS.real.main,
        },
        secondary: {
            main: COLORS.kairat.main,
        },
        background: {
            default: '#1E293B',
            default2: '#1E293B',
            paper: '#FFF7E9',
        },
        text: {
            primary: '#F8FAFC',
            secondary: '#94A3B8',
        },
    },
    typography: {
        fontFamily: 'Roboto , sans-serif',
        h1: {
            fontFamily: 'Swis',
            fontSize: '8rem',
            fontWeight: 900,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontFamily: 'Swis',
            fontSize: '5rem',
            fontWeight: 900,
            letterSpacing: '-0.02em',
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    padding: '10px 20px',
                    fontSize: '1rem',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

// Провайдер темы с CssBaseline и глобальными стилями
export function ThemeRegistry({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}