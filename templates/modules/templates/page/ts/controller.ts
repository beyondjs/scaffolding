import { PageReactWidgetController } from '@beyond-js/react-18-widgets/page';
import type { IWidgetStore } from '@beyond-js/widgets/controller';
import { StoreManager } from './store';
import { View } from './views';

export /*bundle*/
class Controller extends PageReactWidgetController {
	#store: StoreManager;
	createStore() {
		this.#store = new StoreManager();
		return <IWidgetStore>this.#store;
	}
	get Widget() {
		return View;
	}

	/**
	 * this method is executed when the widget is showd
	 */
	show() {}

	/**
	 * this method is executed when the widget is hidden
	 */
	hide() {}
}
