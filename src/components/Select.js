function Select({ label, option = [], ...props }) {
  return (
    <div className="select-container">
      <label className="label">{label}</label>
      <select className="select" {...props}>
        {option.map(({ value, title }) => (
          <option value={value}>{title}</option>
        ))}
      </select>
    </div>
  );
}

export { Select };
