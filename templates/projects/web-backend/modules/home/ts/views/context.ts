import React from 'react';
import type { StoreManager } from '../store';

export interface IModuleContext {
	store: StoreManager;
	texts?: Record<string, any>;
	fetching?: boolean;
}
export const ModuleContext = React.createContext({} as IModuleContext);
export const useModuleContext = () => React.useContext(ModuleContext);
