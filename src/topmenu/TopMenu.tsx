import { create, tsx } from "@dojo/framework/core/vdom";
import * as css from "./TopMenu.m.css";
import * as sharedcss from "../shared.m.css";

const factory = create();

export default factory(function TopMenu() {
	return (
		<div classes={[css.root]}>
			<a href="#home" classes={[css.title]}>
				<div classes={[css.logocontainer]}>
					<div
						classes={[sharedcss.aspectratio]}
						style="--aspect-ratio:1"
					>
						<img
							classes={[sharedcss.mediafill]}
							src="/assets/img/chromelogo.svg"
						/>
					</div>
				</div>
				<div classes={[css.titletext]}>
					<div classes={[css.titlemain]}>dev summit</div>
					<time classes={[css.titleyear]}>2019</time>
				</div>
			</a>

			<div classes={[css.extralinks]}>
				<a classes={[css.extralink]} href="#livestream">
					Livestream
				</a>
				<a classes={[css.extralink]} href="#sessions">
					Sessions
				</a>
				<a classes={[css.extralink]} href="#guidelines">
					<span classes={[css.community]}>Community</span> Guidelines
				</a>
				<a classes={[css.extralink]} href="#faq">
					FAQs
				</a>
			</div>
			<a
				classes={[sharedcss.register, css.register]}
				href="https://events.withgoogle.com/chrome-dev-summit-2019/registrations/new/"
			>
				Request an invite
			</a>
		</div>
	);
});
