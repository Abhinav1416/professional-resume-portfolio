import "./globals.css";

export const metadata = {
  title: "Gudipudi Sasanka Abhinav",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}