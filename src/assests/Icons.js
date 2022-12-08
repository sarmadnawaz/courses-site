import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

//! SMAL ICONS
export const SmChevronDownIcon = ({ style = {}, className = '', ...props }) => (
  <ChevronDownIcon style={{ width: "18px", height: "18px" , ...style }} {...props} />
);

export const MdCheckIcon = ({ style = {}, className = '', ...props }) => (
  <CheckIcon style={{ width: "24px", height: "24px" , ...style }} {...props} />
);