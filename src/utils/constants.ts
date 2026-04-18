// Application constants

export const APP_CONFIG = {
  name: 'Next.js Boilerplate',
  description: 'A comprehensive Next.js boilerplate with modern tooling',
  version: '1.0.0',
  author: 'Your Name',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  email: 'hello@example.com',
} as const


export const API_ROUTES = {
  AUTH: {
    SIGN_IN: '/api/auth/sign-in',
    SIGN_UP: '/api/auth/sign-up',
    SIGN_OUT: '/api/auth/sign-out',
    REFRESH: '/api/auth/refresh',
    FORGOT_PASSWORD: '/api/auth/forgot-password',
    RESET_PASSWORD: '/api/auth/reset-password',
    VERIFY_EMAIL: '/api/auth/verify-email',
  },
  USER: {
    PROFILE: '/api/user/profile',
    UPDATE: '/api/user/update',
    DELETE: '/api/user/delete',
    CHANGE_PASSWORD: '/api/user/change-password',
  },
  UPLOAD: {
    IMAGE: '/api/upload/image',
    FILE: '/api/upload/file',
  },
} as const

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const


export const SUPPORTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'] as const



export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com/yourusername',
  GITHUB: 'https://github.com/yourusername',
  LINKEDIN: 'https://linkedin.com/in/yourusername',
  DISCORD: 'https://discord.gg/yourinvite',
} as const

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
} as const

export const LOCALES = {
  EN: 'en',
  ES: 'es',
  FR: 'fr',
  DE: 'de',
} as const

export const DEFAULT_LOCALE = LOCALES.EN

export const COOKIE_NAMES = {
  THEME: 'theme',
  LOCALE: 'locale',
  CONSENT: 'cookie-consent',
} as const


export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  FORBIDDEN: 'Access denied.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION: 'Please check your input and try again.',
  SERVER: 'Server error. Please try again later.',
} as const

export const SUCCESS_MESSAGES = {
  PROFILE_UPDATED: 'Profile updated successfully!',
  PASSWORD_CHANGED: 'Password changed successfully!',
  EMAIL_SENT: 'Email sent successfully!',
  FILE_UPLOADED: 'File uploaded successfully!',
  SETTINGS_SAVED: 'Settings saved successfully!',
} as const
