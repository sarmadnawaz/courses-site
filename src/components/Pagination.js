import { ExMdChevronRIcon, ExMdChevronLIcon } from "../assests/Icons";
function Pagination() {
  return (
    <div className="pagination-container">
      <ul className="pagination-list">
        <li className="btn">
          <ExMdChevronLIcon className="icon" />
        </li>
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li className="btn">
          <ExMdChevronRIcon className="icon" />
        </li>
      </ul>
    </div>
  );
}

export { Pagination };
