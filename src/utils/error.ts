class TemplateParamsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TemplateParamsError';
  }
}

class TemplateInvalidError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TemplateInvalidError';
  }
}

class BackendError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BackendError';
  }
}

class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'APIError';
  }
}

class RequiredFieldError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RequiredFieldError';
  }
}

class MaxSuggestionAmountError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MaxSuggestionAmountError';
  }
}

export {
  TemplateParamsError,
  TemplateInvalidError,
  BackendError,
  ApiError,
  RequiredFieldError,
  MaxSuggestionAmountError
};
