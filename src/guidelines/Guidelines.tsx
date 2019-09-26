import { create, tsx } from "@dojo/framework/core/vdom";

import * as css from "./Guidelines.m.css";

const factory = create();

export default factory(function Guidelines() {
	return <div classes={[css.root]}>Community Guidelines</div>;
});
