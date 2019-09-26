import { create, tsx } from "@dojo/framework/core/vdom";

import * as sharedcss from "../../shared.m.css";
import * as sectioncss from "./sections.m.css";
import * as mediacss from "./media.m.css";

const factory = create();

export default factory(function Livestream() {
	return (
		<section classes={[sectioncss.rootalt, mediacss.root]} id="livestream">
			<div classes={[mediacss.main]}>
				<h1 id="livestream" classes={[sectioncss.heading]}>
					Livestream
				</h1>
				<p>
					We want Chrome Dev Summit to be exciting for everyone. If
					you can’t join us in person, become our livestream attendee
					to not only view all the sessions but also get access to our
					exclusive livestream-only content.
				</p>
				<p>
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSdqEfT0jfgRNIGqibWxBe8X1Dt0a2FcHdituhRhG1tNGL1sBQ/viewform"
						rel="noopener noreferrer"
						target="_blank"
					>
						Sign up here
					</a>{" "}
					to stay up to date about the livestream and other event
					announcements.
				</p>
			</div>
			<div classes={[mediacss.media]}>
				<div
					classes={[sharedcss.aspectratio]}
					style="--aspect-ratio: calc(16/9)"
				>
					<iframe
						classes={[sharedcss.mediafill]}
						src="https://www.youtube.com/embed/nImH_dq1NpM"
						frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen=""
					/>
				</div>
			</div>
		</section>
	);
});
