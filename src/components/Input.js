function Input({ label, type, ...props }) {
  return (
    <div className="input-container">
      <label className="label">{label}</label>
      <input className="input" type={type} {...props} />
    </div>
  );
}

export { Input };
