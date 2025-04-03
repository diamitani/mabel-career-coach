export function Card({ children }) {
  return <div className="bg-white shadow p-4 rounded-xl">{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}