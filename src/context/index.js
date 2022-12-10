import React from 'react';
import { CounterStore, ThemeStore } from '../store';

export const StoresContext = React.createContext({
  counterStore: new CounterStore(),
  themeStore: new ThemeStore()
})
 