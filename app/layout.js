import { headers } from "next/headers";
import { LocalizedStringProvider } from "react-aria-components/i18n";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LocalizedStringProvider locale="en" />
        {children}
      </body>
    </html>
  );
}
