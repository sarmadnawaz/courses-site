function Select({ label, options = [], ...props }) {
  return (
    <div className="select-container">
      <label className="label">{label}</label>
      <select className="select" {...props}>
        {options.map(({ value, title }) => (
          <option value={value}>{title}</option>
        ))}
      </select>
    </div>
  );
}

export { Select };
