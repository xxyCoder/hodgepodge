import crypto from 'crypto-js'

export function cryptoPassword(password: string) {
    const hash = crypto.SHA256(password);
    return hash.toString(crypto.enc.Hex);
}