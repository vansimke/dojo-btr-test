import { create, tsx } from "@dojo/framework/core/vdom";
import TopMenu from "./topmenu/TopMenu";
import Footer from "./footer/Footer";
import * as css from "./App.m.css";

import Home from "./home/Home";

const factory = create();

const App = factory(function App() {
	return (
		<div classes={[css.root]}>
			<TopMenu />
			<Home />
			<Footer />>
		</div>
	);
});

export default App;
