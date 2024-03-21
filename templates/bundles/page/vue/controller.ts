import { PageVueWidgetController } from '@beyond-js/vue-widgets/page';
import Widget from './view/index.vue';

export /*bundle*/
class Controller extends PageVueWidgetController {
	get Widget() {
		return Widget;
	}
}
