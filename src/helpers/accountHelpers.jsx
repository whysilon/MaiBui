import MD5 from "crypto-js/md5";
/**
 * Generate random user avatar based on email using Gravatar
 * @param {*} email
 * @returns
 */
export function generateGravatar(email) {
  // Generate the email hash
  const emailHash = MD5(email.trim().toLowerCase());

  // Generate the Gravatar URL
  const gravatarURL = `https://www.gravatar.com/avatar/${emailHash}?s=200&d=identicon`;

  return gravatarURL;
}
