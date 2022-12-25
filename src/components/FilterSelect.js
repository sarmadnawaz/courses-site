function FilterSelect({ label, options = [], ...props }) {
  return (
    <div className="filter-select-container">
      <label className="label">{label}</label>
      <select className="filter-select" {...props}>
        {options.map(({ name, title }) => (
          <option value={name}>{title}</option>
        ))}
      </select>
    </div>
  );
}

export { FilterSelect };
