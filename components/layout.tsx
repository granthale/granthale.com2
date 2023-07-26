export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col border-2 border-green-500 h-screen">
          <div className="border-2 border-red-500">Top Navigation</div>
          <div className="border-2 border-blue-500 flex flex-1">
            <div className="border-2 border-orange-300">Side Navigation</div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
