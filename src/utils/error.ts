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

class APIAccessError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ExternalAPIAccessError';
  }
}

class RequiredFieldError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ExternalAPIAccessError';
  }
}

export {
  TemplateParamsError,
  TemplateInvalidError,
  APIAccessError,
  RequiredFieldError
};
