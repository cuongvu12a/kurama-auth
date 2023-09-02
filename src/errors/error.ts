export enum ErrorCode {
  UNKNOWN_ERROR = 0,
}

export type ErrorMap = {
  code: ErrorCode;
  message: string;
  [key: string]: any;
};

export const ErrorMessage = {
  UNKNOWN_ERROR: {
    code: ErrorCode.UNKNOWN_ERROR,
    message: "UNKNOWN_ERROR",
  },
};
