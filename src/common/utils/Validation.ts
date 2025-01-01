export default class Validations {
  static validateData<T extends object>(data: T) {
    Object.keys(data).forEach((key) => {
      if (data[key as keyof T] === undefined || data[key as keyof T] === '') {
        throw new Error(`${key} is required`);
      }
    });
  }

  static validateEmail(email: string) {
    const p =
      /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
    return p.test(email);
  }

  static validatePassword(password: string) {
    const p = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    return p.test(password);
  }

  static validateUrl(url: string) {
    const p = /^(http|https):\/\/[^ "]+$/;
    return p.test(url);
  }

  static validateObject<RequiredKeys extends object>(data: RequiredKeys) {
    if (typeof data !== 'object') {
      throw new Error('Invalid object');
    }
    Object.keys(data).forEach((key) => {
      if (
        data[key as keyof RequiredKeys] === undefined ||
        data[key as keyof RequiredKeys] === '' ||
        data[key as keyof RequiredKeys] === null
      ) {
        throw new Error(`${key} is required`);
      }
    });
  }
}
