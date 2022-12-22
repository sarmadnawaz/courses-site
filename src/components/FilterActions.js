import { FilterSelect } from "./FilterSelect";
function FilterActions() {
  return (
    <div className="filter-container">
      <h2 className="sub-heading">Filter</h2>
      <div className="filter-actions">
        <FilterSelect
          label="Category"
          options={[
            {
              value: "react",
              title: "React",
            },
            {
              value: "angular",
              title: "Angular",
            },
            {
              value: "vue",
              title: "VueJS",
            },
          ]}
        />
        <FilterSelect label="Topic" />
        <FilterSelect label="Language" />
        <FilterSelect label="Source" />
      </div>
    </div>
  );
}

export { FilterActions };
