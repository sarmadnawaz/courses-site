import { SearchBar } from "./SearchBar";
function AuthenticatedHeader() {
  return (
    <div className="authenticated-header">
      <a className="header-logo-container">
        <h1 className="header-logo">Seeklo</h1>
      </a>
      <SearchBar />
      <div className="header-link-container">
        <a href="#" className="btn btn--outline">
          Sign Out
        </a>
      </div>
    </div>
  );
}

export { AuthenticatedHeader };
