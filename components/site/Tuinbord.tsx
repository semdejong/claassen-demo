export function Tuinbord({
  children,
  onGreen = false,
}: {
  children: React.ReactNode;
  onGreen?: boolean;
}) {
  return (
    <p className={onGreen ? "tuinbord tuinbord-on-green" : "tuinbord"}>
      <span className="tuinbord-notch" aria-hidden />
      {children}
    </p>
  );
}

export function LimeRule() {
  return <span className="mt-4 block h-1 w-16 bg-accent" aria-hidden />;
}
