interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export default function ProductCard({
  title,
  description,
  href,
}: ProductCardProps) {
  return (
    <a
      href={href}
      className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition hover:border-blue-400"
    >
      <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
}
