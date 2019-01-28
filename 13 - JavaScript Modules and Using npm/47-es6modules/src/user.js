import slug from 'slug';
import { url } from './config';
import md5 from 'md5';

// Default Export
export default function User(name, email, website) {
  return { name, email, website };
}

// Named exports
export function createURL(name) {
  return `${url}/users/${slug(name)}`;
}

// Named exports
export function gravatar(email) {
  const hash = md5(email.toLowerCase());
  const photoURL = `https://www.gravatar.com/avatar/${hash}`;
  return photoURL;
}
