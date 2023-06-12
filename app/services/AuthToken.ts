import jwtDecode from "jwt-decode";

export type DecodedToken = {
  readonly exp: number;
  readonly iat: number;
  readonly iss: string;
  readonly sub: string;

  readonly email: string;
  readonly name: string;
  readonly typ: RolesDTO[];
};

export class AuthToken {
  readonly decodedToken: DecodedToken;

  constructor(readonly token?: string) {
    this.decodedToken = {} as DecodedToken;

    try {
      if (token) this.decodedToken = jwtDecode(token);
    } catch (err) {
      console.error("JWT decode get error", err);
    }
  }

  get expiresAt(): Date {
    return new Date(this.decodedToken.exp * 1000);
  }

  get isExpired(): boolean {
    return this.expiresAt && new Date() < this.expiresAt;
  }

  get isAuthenticated(): boolean {
    return this.isExpired && !!this.token;
  }

  get authorizationString(): string {
    return `Bearer ${this.token}`;
  }
}

export interface LoginForm {
  userId: string;
  userPassword: string;
}
export interface RolesDTO {
  RoleName: string;
  ClientId: string;
}
export interface UserProfiles {
  UserId: string;
  Username: string;
  FullName: string;
  Email: string;
  Roles: RolesDTO[];
}
export interface InvitationCode {
  code: string;
}
