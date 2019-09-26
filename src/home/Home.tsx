import { create, tsx } from "@dojo/framework/core/vdom";

import ConfDetails from "./sections/ConfDetails";
import Livestream from "./sections/Livestream";
import Sessions from "./sections/Sessions";
import Previously from "./sections/Previously";
import FAQ from "./sections/FAQ";

import * as css from "./Home.m.css";

const factory = create();

export default factory(function Home({ middleware: { theme } }) {
	return (
		<div classes={[css.root]}>
			<ConfDetails />
			<Livestream />
			<Sessions />
			<Previously />
			<FAQ />
		</div>
	);
});
