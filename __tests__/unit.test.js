// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('valid phone number with area code', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number without area code', () => {
  expect(isPhoneNumber('456-7890')).toBe(true);
});

test('invalid phone number missing dash', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('invalid phone number with letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('valid email address', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('valid email with underscore', () => {
  expect(isEmail('test_user@example.com')).toBe(true);
});

test('invalid email missing at symbol', () => {
  expect(isEmail('testexample.com')).toBe(false);
});

test('invalid email missing domain extension', () => {
  expect(isEmail('test@example')).toBe(false);
});

test('valid strong password with letters and numbers', () => {
  expect(isStrongPassword('Pass123')).toBe(true);
});

test('valid strong password with underscore', () => {
  expect(isStrongPassword('A_bcd123')).toBe(true);
});

test('invalid password starts with number', () => {
  expect(isStrongPassword('1Password')).toBe(false);
});

test('invalid password too short', () => {
  expect(isStrongPassword('Ab1')).toBe(false);
});

test('valid date with one digit month and day', () => {
  expect(isDate('1/2/2024')).toBe(true);
});

test('valid date with two digit month and day', () => {
  expect(isDate('12/25/2024')).toBe(true);
});

test('invalid date with dashes', () => {
  expect(isDate('12-25-2024')).toBe(false);
});

test('invalid date with two digit year', () => {
  expect(isDate('12/25/24')).toBe(false);
});

test('valid 3 digit hex color', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('valid 6 digit hex color without hash', () => {
  expect(isHexColor('a1b2c3')).toBe(true);
});

test('invalid hex color with bad character', () => {
  expect(isHexColor('#ggg')).toBe(false);
});

test('invalid hex color wrong length', () => {
  expect(isHexColor('#ffff')).toBe(false);
});