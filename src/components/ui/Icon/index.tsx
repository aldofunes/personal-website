import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faLaptopCode,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane,
  faProjectDiagram,
  faRobot,
  faFlask,
  faVideo
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

/* add any additional icon to the library */
library.add(fab, faLaptopCode, faRobot, faFlask, faProjectDiagram, faMapMarkerAlt, faPhone, faPaperPlane, faVideo);

export type IconProps = FontAwesomeIconProps['icon'];

const Icon: React.FC<FontAwesomeIconProps> = ({ ...props }) => <FontAwesomeIcon {...props} />;

export default Icon;
