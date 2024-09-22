import { createTheme, alpha } from "@mui/material/styles";

const defaultTheme = createTheme();

const customShadows = [...defaultTheme.shadows];

export const primary = {
    50: "#FFF0F5",
    100: "#EED3D9",
    200: "#DDA6B1",
    300: "#CB7689",
    400: "#BA4A60",
    500: "#AA1D39",
    600: "#87172D",
    700: "#641123",
    800: "#450C18",
    900: "#23060C",
};

export const dark = {
    50: "#ebedef",
    100: "#d6d9dd",
    200: "#adb3bb",
    300: "#848d99",
    400: "#5b6777",
    500: "#324155",
    600: "#283444",
    700: "#1e2733",
    800: "#141a22",
    900: "#0a0d11",
};

export const gray = {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EA",
    300: "#D2D5DB",
    400: "#9EA2AE",
    500: "#6D717F",
    600: "#4D5461",
    700: "#394050",
    800: "#212936",
    900: "#131927",
};

export const green = {
    50: "#ECF8EF",
    100: "#C5E9CD",
    200: "#A9DEB4",
    300: "#81CF92",
    400: "#69C57D",
    500: "#43B75D",
    600: "#3DA755",
    700: "#308242",
    800: "#256533",
    900: "#1C4D27",
};

export const red = {
    50: "#FDECEC",
    100: "#FAC5C3",
    200: "#F7A9A7",
    300: "#F4827E",
    400: "#F16965",
    500: "#EE443F",
    600: "#D93E39",
    700: "#A9302D",
    800: "#832523",
    900: "#641D1A",
};

export const yellow = {
    50: "#FFF7E6",
    100: "#FFE5B0",
    200: "#FFD88A",
    300: "#FFC654",
    400: "#FFBB33",
    500: "#FFAA00",
    600: "#E89B00",
    700: "#B57900",
    800: "#8C5E00",
    900: "#6B4700",
};

export const blue = {
    50: "#E6F4FF",
    100: "#B0DEFF",
    200: "#8ACEFF",
    300: "#54B8FF",
    400: "#33AAFF",
    500: "#0095FF",
    600: "#0088E8",
    700: "#006AB5",
    800: "#00528C",
    900: "#003F6B",
};

export const black = {
    50: "#e0e0e0",
    100: "#c0c0c0",
    200: "#a0a0a0",
    300: "#808080",
    400: "#606060",
    500: "#404040",
    600: "#303030",
    700: "#202020",
    800: "#101010",
    900: "#000000",
};

export const white = {
    50: "#ffffff",
    100: "#f8f8f8",
    200: "#f0f0f0",
    300: "#e8e8e8",
    400: "#d0d0d0",
    500: "#b8b8b8",
    600: "#a0a0a0",
    700: "#888888",
    800: "#707070",
    900: "#585858",
};

export const getDesignTokens = (mode) => {
    customShadows[1] =
        "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px";

    return {
        palette: {
            mode,
            primary: {
                light: primary[200],
                main: primary[500],
                dark: primary[700],
                contrastText: primary[50],
            },
            info: {
                light: primary[100],
                main: primary[300],
                dark: primary[600],
                contrastText: gray[50],
            },
            warning: {
                light: yellow[300],
                main: yellow[400],
                dark: yellow[800],
            },
            error: {
                light: red[300],
                main: red[400],
                dark: red[800],
            },
            success: {
                light: green[300],
                main: green[400],
                dark: green[800],
            },
            grey: {
                ...gray,
            },
            divider: alpha(gray[300], 0.4),
            background: {
                default: "hsl(0, 0%, 99%)",
                paper: "hsl(220, 35%, 97%)",
            },
            text: {
                primary: gray[800],
                secondary: gray[600],
                warning: yellow[400],
            },
            action: {
                hover: alpha(gray[200], 0.2),
                selected: `${alpha(gray[200], 0.3)}`,
            },
        },
        typography: {
            fontFamily: "'Be Vietnam Pro', sans-serif",
            h1: {
                fontSize: defaultTheme.typography.pxToRem(64),
                fontWeight: 600,
            },
            h2: {
                fontSize: defaultTheme.typography.pxToRem(40),
                fontWeight: 600,
            },
            h3: {
                fontSize: defaultTheme.typography.pxToRem(32),
            },
            h4: {
                fontSize: defaultTheme.typography.pxToRem(28),
                fontWeight: 600,
            },
            h5: {
                fontSize: defaultTheme.typography.pxToRem(24),
                fontWeight: 600,
            },
            h6: {
                fontSize: defaultTheme.typography.pxToRem(20),
                fontWeight: 600,
            },
            subtitle1: {
                fontSize: defaultTheme.typography.pxToRem(20),
                fontWeight: 400,
            },
            subtitle2: {
                fontSize: defaultTheme.typography.pxToRem(16),
                fontWeight: 600,
            },
            body1: {
                fontSize: defaultTheme.typography.pxToRem(18),
            },
            body2: {
                fontSize: defaultTheme.typography.pxToRem(16),
                fontWeight: 500,
            },
            body3: {
                fontSize: defaultTheme.typography.pxToRem(14),
            },
            body4: {
                fontSize: defaultTheme.typography.pxToRem(14),
                fontWeight: 500,
            },
            body5: {
                fontSize: defaultTheme.typography.pxToRem(12),
                fontWeight: 400,
            },
            caption1: {
                fontSize: defaultTheme.typography.pxToRem(12),
                fontWeight: 400,
            },
            caption2: {
                fontSize: defaultTheme.typography.pxToRem(12),
                fontWeight: 500,
            },
            caption3: {
                fontSize: defaultTheme.typography.pxToRem(10),
                fontWeight: 500,
            },
            label: {
                fontSize: defaultTheme.typography.pxToRem(12),
                fontWeight: 500,
            },
        },
        shape: {
            borderRadius: 8,
        },
        shadows: customShadows,
        components: {
            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        '&:hover': {
                            backgroundColor: alpha(primary[200], 0.2),
                        },
                        '&:active': {
                            backgroundColor: alpha(primary[600], 0.3),
                        },
                    },
                },
            },
        },
    };
};

export default getDesignTokens;
