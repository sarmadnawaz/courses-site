import { SearchBar } from "./SearchBar";
function DashBoardHeader() {
  return (
    <div className="dashboard-header">
      <div className="logo">
        <h1>Seeklo</h1>
      </div>
      <SearchBar />
      <div className="signout-btn-container">
        <a href="#" className="btn btn--outline-white">
          Sign Out
        </a>
      </div>
    </div>
  );
}

export { DashBoardHeader };
