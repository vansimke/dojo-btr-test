import { create, tsx } from "@dojo/framework/core/vdom";

import * as sharedcss from "../../shared.m.css";
import * as sectioncss from "./sections.m.css";
import * as mediacss from "./media.m.css";

const factory = create();

export default factory(function Sessions() {
	return (
		<section classes={[sectioncss.root, mediacss.root]}>
			<div classes={[mediacss.main]}>
				<h1 id="sessions" classes={[sectioncss.heading]}>
					Sessions
				</h1>
				<p>
					Chrome Dev Summit features a varied lineup of talks given by
					the Chrome team and community. The summit is a single-track
					event so everyone gets the opportunity to attend every
					session, fueling meaningful discussions among all attendees.
				</p>
				<p>
					Over the two days, the team will deep-dive into the latest
					updates we're making to the browser, the platform and to our
					tools to improve developer productivity as they build
					pinnacle web experiences for their users.
				</p>
				<p>
					We’ll be sharing more details, as we get closer to the
					event.
				</p>
			</div>
			<div classes={[mediacss.media]}>
				<div
					classes={[sharedcss.aspectratio]}
					style="--aspect-ratio: calc(16/9)"
				>
					<img
						classes={[sharedcss.mediafill]}
						src="https:/developer.chrome.com/devsummit/_includes/sessions-promo/assets/audience-small-4b30f0ff.jpg"
						srcset="https:/developer.chrome.com/devsummit/_includes/sessions-promo/assets/audience-small-4b30f0ff.jpg 900w, https:/developer.chrome.com/devsummit/_includes/sessions-promo/assets/audience-large-1ba119b5.jpg 1800w"
						sizes="(min-width: 1280px) 40vw, 100vw"
					/>
				</div>
			</div>
		</section>
	);
});
