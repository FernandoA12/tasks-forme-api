import { Identifier } from "domain/security/Identifier";
import { randomUUID } from "crypto";

export class CryptoIdentifier implements Identifier {
  createId(): string {
    return randomUUID().toString();
  }
}
