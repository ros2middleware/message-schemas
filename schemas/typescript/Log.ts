// Generated from Log by @foxglove/message-schemas

import { LogLevel } from "./LogLevel";
import { Time } from "./Time";

/** A log message */
export type Log = {
  /** Timestamp of log message */
  timestamp: Time;

  /** Log level */
  level: LogLevel;

  /** Log message */
  message: string;

  /** Process or node name */
  name: string;

  /** Filename */
  file: string;

  /** Line number in the file */
  line: number;
};
