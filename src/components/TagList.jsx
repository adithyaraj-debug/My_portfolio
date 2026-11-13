export default function TagList({ items, label = "Technologies" }) {
  const tags = (items || []).map((item) => String(item || "").trim()).filter(Boolean);
  if (!tags.length) return null;

  return (
    <div className="tag-block">
      <p className="tag-label">{label}</p>
      <ul className="tag-list">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}
