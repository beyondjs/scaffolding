import { PageReactWidgetController } from '@beyond-js/react-18-widgets/page';
import { StoreManager } from './store';
import { Widget } from './views';

export /*bundle*/
class Controller extends PageReactWidgetController {
	#store: StoreManager;
	createStore() {
		this.#store = new StoreManager();
		return this.#store;
	}
	get Widget() {
		return Widget;
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
