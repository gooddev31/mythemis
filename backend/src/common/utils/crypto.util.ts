import crypto from 'node:crypto';

export class CryptoUtil {
  public static async generateUUID() {
    return crypto.randomUUID();
  }
}
