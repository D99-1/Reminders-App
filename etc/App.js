import { Provider as SettingsProvider } from "./SettingsContext";
import { Provider as ReminderProvider } from "./ReminderDataContext";

import React from "react";
import Main from "../Screens/main";

export default function App() {
  return (
    <SettingsProvider>
      <ReminderProvider>
          <Main />
      </ReminderProvider>
    </SettingsProvider>
  );
}


