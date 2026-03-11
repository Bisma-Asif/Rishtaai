import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: Partial<User>) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data
    const mockUser: User = {
      id: '1',
      name: 'Sarah Ahmed',
      age: 28,
      gender: 'Female',
      religion: 'Islam',
      city: 'Dubai',
      education: 'Masters in Business Administration',
      profession: 'Marketing Manager',
      interests: ['Reading', 'Travel', 'Cooking', 'Photography'],
      familyBackground: 'Close-knit family with strong values',
      bio: 'Looking for a life partner who shares similar values and interests.',
      photos: [],
      verified: true,
      profileCompletion: 85,
      partnerPreferences: {
        ageRange: [28, 35],
        cities: ['Dubai', 'Abu Dhabi'],
        education: ['Bachelors', 'Masters', 'PhD'],
        religions: ['Islam'],
        interests: ['Travel', 'Reading', 'Sports']
      },
      socialMediaConnected: {
        facebook: false,
        instagram: false,
        linkedin: false
      }
    };
    
    setUser(mockUser);
  };

  const signup = async (userData: Partial<User>) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name || '',
      age: userData.age || 0,
      gender: userData.gender || 'Male',
      religion: userData.religion || '',
      city: userData.city || '',
      education: userData.education || '',
      profession: userData.profession || '',
      interests: userData.interests || [],
      familyBackground: userData.familyBackground || '',
      bio: userData.bio || '',
      photos: userData.photos || [],
      verified: false,
      profileCompletion: 40,
      partnerPreferences: {
        ageRange: [25, 35],
        cities: [],
        education: [],
        religions: [],
        interests: []
      },
      socialMediaConnected: {
        facebook: false,
        instagram: false,
        linkedin: false
      }
    };
    
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        updateUser,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
