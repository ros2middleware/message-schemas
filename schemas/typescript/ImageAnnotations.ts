// Generated from ImageAnnotations by @foxglove/message-schemas

import { CircleAnnotation } from "./CircleAnnotation";
import { PointsAnnotation } from "./PointsAnnotation";

/** Array of annotations for a 2D image */
export type ImageAnnotations = {
  /** Circle annotations */
  circles: CircleAnnotation[];

  /** Points annotations */
  points: PointsAnnotation[];
};
