import * as React from 'react';
import { BeyondSVG } from './icons/beyond';
import { ReactSVG } from './icons/react';
import { ModuleContext } from './context';

export /*bundle*/
function View({ store }): JSX.Element {
	const contextValue = { store };
	return (
		<ModuleContext.Provider value={contextValue}>
			<div className='page__container'>
				<div className='content'>
					<h1>Let's get started using BeyondJS with React</h1>

					<div className='promotion'>
						<div className='logos'>
							<BeyondSVG />
							<ReactSVG />
						</div>

						<h2>BeyondJS + React</h2>
					</div>

					<p>
						Let's start managing our project from the{' '}
						<a href='https://workspace.beyondjs.com/' target='_blank' rel='noopener'>
							workspace
						</a>
					</p>

					<p className='secondary need-help'>
						Need help getting started? Let's review with the official{' '}
						<a href='https://beyondjs.com/' target='_blank' rel='noopener'>
							BeyondJS documentation
						</a>
					</p>
				</div>
			</div>
		</ModuleContext.Provider>
	);
}
