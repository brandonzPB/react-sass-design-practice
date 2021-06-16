// used to "verify" credentials
export class API {
  constructor(inputs) {
    this.email = inputs.email;
    this.name = inputs.name;
    this.password = inputs.password;
    this.userType = inputs.userType;
  }
}
