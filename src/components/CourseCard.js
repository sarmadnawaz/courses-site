import {
  MdClockIcon,
  MdFilmIcon,
  MdBookOpenIcon,
  ExMdPlusIcon,
  ExMdCrossIcon,
} from "../assests/Icons";
function CourseCard({ courseData }) {
  const {
    title,
    duration,
    sourceName: source,
    lectures = 364,
    coverImage: img,
  } = courseData;
  return (
    <div className={`course-card-container`}>
      <div className="img-wrapper">
        <img src={img} />
        <div className="course-timing">
          <MdClockIcon />
          <p>{duration}</p>
        </div>
        <div className="add-btn">
          <ExMdPlusIcon className="icon" />
        </div>
      </div>
      <h2 className="sub-heading">{title}</h2>
      <div className="course-info">
        <div>
          <MdFilmIcon />
          <p>{lectures} Lectures</p>
        </div>
        <div>
          <MdBookOpenIcon />
          <p>{source}</p>
        </div>
      </div>
    </div>
  );
}

export { CourseCard };
