import {
  CheckIcon,
  ChevronDownIcon,
  ClockIcon,
  FilmIcon,
  BookOpenIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

//! SMAL ICONS
export const SmChevronDownIcon = ({ style = {}, className = "", ...props }) => (
  <ChevronDownIcon
    style={{ width: "18px", height: "18px", ...style }}
    {...props}
  />
);

export const MdCheckIcon = ({ style = {}, className = "", ...props }) => (
  <CheckIcon style={{ width: "24px", height: "24px", ...style }} {...props} />
);

export const MdClockIcon = ({ style = {}, className = "", ...props }) => (
  <ClockIcon style={{ width: "24px", height: "24px", ...style }} {...props} />
);

export const MdFilmIcon = ({ style = {}, className = "", ...props }) => (
  <FilmIcon style={{ width: "24px", height: "24px", ...style }} {...props} />
);

export const MdBookOpenIcon = ({ style = {}, className = "", ...props }) => (
  <BookOpenIcon
    style={{ width: "24px", height: "24px", ...style }}
    {...props}
  />
);

export const ExMdPlusIcon = ({ style = {}, className = "", ...props }) => (
  <PlusIcon style={{ width: "32px", height: "32px", ...style }} {...props} />
);

export const ExMdCrossIcon = ({ style = {}, className = "", ...props }) => (
  <XMarkIcon style={{ width: "32px", height: "32px", ...style }} {...props} />
);
