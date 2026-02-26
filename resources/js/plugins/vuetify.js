// resources/js/plugins/vuetify.js
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { mdi } from "vuetify/iconsets/mdi";
import { VDateInput } from "vuetify/labs/VDateInput";

import DateFnsAdapter from "@date-io/date-fns";
import enUS from "date-fns/locale/en-US";
import es from "date-fns/locale/es";

function getCssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

const vuetify = createVuetify({
    components: {
        ...components,
        VDateInput,
    },
    directives,
    icons: {
        defaultSet: "mdi",
        sets: { mdi },
    },
    date: {
        adapter: DateFnsAdapter,
        locale: { es: es, en: enUS },
    },
    theme: {
        defaultTheme: "myTheme",
        themes: {
        myTheme: {
            dark: false,
            colors: {
            customPrimary: getCssVar("--color-app-primary"),
            customPrimaryDark: getCssVar("--color-app-primary-dark"),
            customSecondary: getCssVar("--color-app-secondary"),
            customTertiary: getCssVar("--color-app-tertiary"),
            customSurface: getCssVar("--color-app-surface"),
            customMuted: getCssVar("--color-app-muted"),
            customDark: getCssVar("--color-app-dark"),
            },
        },
        myDarkTheme: {
            dark: true,
            colors: {
            customPrimary: getCssVar("--color-app-primary"),
            customSecondary: getCssVar("--color-app-secondary"),
            customSurface: getCssVar("--color-app-dark"),
            },
        },
        },
    },
});

export default vuetify;
