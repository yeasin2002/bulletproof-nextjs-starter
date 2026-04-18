import type { BaseEntity } from '@/types'

export interface User extends BaseEntity {
  email: string
  firstName: string
  lastName: string
  username?: string
  avatar?: string
  bio?: string
  website?: string
  location?: string
  emailVerified: boolean
  isActive: boolean
  lastLoginAt?: Date
  preferences: UserPreferences
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system'
  language: string
  timezone: string
  notifications: NotificationPreferences
  privacy: PrivacyPreferences
}

export interface NotificationPreferences {
  email: boolean
  push: boolean
  marketing: boolean
  security: boolean
  updates: boolean
}

export interface PrivacyPreferences {
  profileVisibility: 'public' | 'private' | 'friends'
  showEmail: boolean
  showLocation: boolean
  allowIndexing: boolean
}

export interface UserProfile {
  id: string
  userId: string
  displayName: string
  bio?: string
  avatar?: string
  coverImage?: string
  website?: string
  location?: string
  socialLinks: SocialLinks
  stats: UserStats
  createdAt: Date
  updatedAt: Date
}

export interface SocialLinks {
  twitter?: string
  github?: string
  linkedin?: string
  website?: string
  instagram?: string
  youtube?: string
}

export interface UserStats {
  postsCount: number
  followersCount: number
  followingCount: number
  likesCount: number
  viewsCount: number
}

export interface UserSession {
  id: string
  userId: string
  token: string
  refreshToken?: string
  expiresAt: Date
  ipAddress?: string
  userAgent?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface UserActivity {
  id: string
  userId: string
  action: string
  resource: string
  resourceId?: string
  metadata?: Record<string, unknown>
  ipAddress?: string
  userAgent?: string
  createdAt: Date
}

// User role and permission types
export type UserRole = 'admin' | 'moderator' | 'user' | 'guest'

export interface UserPermission {
  id: string
  name: string
  description: string
  resource: string
  action: string
}

export interface UserRolePermission {
  roleId: string
  permissionId: string
  granted: boolean
}

// User creation and update types
export interface CreateUserInput {
  email: string
  firstName: string
  lastName: string
  username?: string
  password: string
}

export interface UpdateUserInput {
  firstName?: string
  lastName?: string
  username?: string
  bio?: string
  website?: string
  location?: string
  avatar?: string
}

export interface UpdateUserPreferencesInput {
  theme?: 'light' | 'dark' | 'system'
  language?: string
  timezone?: string
  notifications?: Partial<NotificationPreferences>
  privacy?: Partial<PrivacyPreferences>
}
