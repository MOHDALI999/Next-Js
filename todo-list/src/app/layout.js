import "./globals.css";

export const metadata = {
  icons : "./check-list.png",
  title: "Todo List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
