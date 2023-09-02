import { ErrorMap, ErrorMessage } from "./error";

export { ErrorMessage };

export class Exception extends Error {
  message: string;

  constructor(error: ErrorMap) {
    super();
    this.message = JSON.stringify(error);
  }
}

export const handleError = async (error: Error | any) => {
  let exception: Exception;

  if (error instanceof Exception || error instanceof Error) {
  } else {
    exception = new Exception(ErrorMessage.UNKNOWN_ERROR);
  }

  console.log(error);

  throw exception;
};
