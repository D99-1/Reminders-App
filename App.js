import { Provider as SettingsProvider } from "./etc/SettingsContext";
import { Provider as ReminderProvider } from "./etc/ReminderDataContext";

import React from "react";
import Main from "./Screens/main";

export default function App() {
  return (
    <SettingsProvider>
      <ReminderProvider>
          <Main />
      </ReminderProvider>
    </SettingsProvider>
  );
}


