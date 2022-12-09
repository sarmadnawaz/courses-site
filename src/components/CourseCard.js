import {
  MdClockIcon,
  MdFilmIcon,
  MdBookOpenIcon,
  ExMdPlusIcon,
  ExMdCrossIcon,
} from "../assests/Icons";
import { Select } from "./Select";
import { courseData } from "../assests/dev-data/courses";
import { useState } from "react";
function CourseCard() {
  const [cardStatus, setCardStatus] = useState("todo");
  const { title, duration, source, description, lectures } = courseData;
  return (
    <div className={`course-card-container ${cardStatus}-container`}>
      <div className="course-card-cover-img">
        <img src="https://cdn.coursehunter.net/categories/180x180/security-hacker.png" />
      </div>
      <div className="course-card-content">
        <h2 className="sub-heading">{title}</h2>
        <p className="course-description">{description}</p>
        <div className="course-card-info">
          <div>
            <MdClockIcon />
            <p>{duration}</p>
          </div>
          <div>
            <MdFilmIcon />
            <p>{lectures} Lectures</p>
          </div>
          <div>
            <MdBookOpenIcon />
            <p>{source}</p>
          </div>
          <div className="course-card-status">
            Status
            <Select
              onChange={(e) => setCardStatus(e.target.value)}
              options={[
                { value: "todo", title: "ToDo" },
                { value: "doing", title: "Doing" },
                { value: "done", title: "Done" },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="course-card-actions-btns">
        <li style={{ listStyle: "none" }} title="Remove course from list">
          <ExMdCrossIcon />
        </li>
        {/* <li style={{ listStyle: "none" }} title="Add course to do list">
            <ExMdPlusIcon />
          </li> */}
      </div>
    </div>
  );
}

export { CourseCard };
