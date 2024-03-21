import React from 'react';
import { ModuleContext } from './context';

export /*bundle*/
function View({ store }): JSX.Element {
	const contextValue = { store };
	return (
		<ModuleContext.Provider value={contextValue}>
			<div>BeyondJS module</div>;
		</ModuleContext.Provider>
	);
}
