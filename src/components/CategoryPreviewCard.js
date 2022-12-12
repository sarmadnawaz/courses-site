function CategoryPreviewCard({ imgSrc = undefined, title = "" }) {
  return (
    <div className="category-preview-card">
      {imgSrc && (
        <div className="category-preview-card-img">
          <img src={imgSrc} alt={`${title} image`} />
        </div>
      )}
      <p className="category-preview-card-text">{title}</p>
    </div>
  );
}

export { CategoryPreviewCard };
