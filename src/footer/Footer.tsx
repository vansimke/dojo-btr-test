import { create, tsx } from "@dojo/framework/core/vdom";

import * as css from "./Footer.m.css";

const factory = create();

const Footer = factory(function Footer() {
	return (
		<div classes={[css.root]}>
			<div classes={[css.divider]} />
			<ul classes={[css.social]}>
				<li classes={[css.socialitem]}>
					<a
						classes={[css.socialitemlink]}
						href="https://twitter.com/chromiumdev"
						rel="noopener noreferer"
						target="_blank"
					>
						<span classes={[css.iconmask, css.icontwitter]}>
							Twitter
						</span>
					</a>
				</li>
				<li classes={[css.socialitem]}>
					<a
						classes={[css.socialitemlink]}
						href="https://www.youtube.com/user/ChromeDevelopers"
						rel="noopener noreferer"
						target="_blank"
					>
						<span classes={[css.iconmask, css.iconyoutube]}>
							YouTube
						</span>
					</a>
				</li>
				<li classes={[css.socialitem]}>
					<a
						classes={[css.socialitemlink]}
						href="https://developer.chrome.com/devsummit/mailto:chrome-dev-summit@google.com"
						rel="noopener noreferer"
						target="_blank"
					>
						<span classes={[css.iconmask, css.iconemail]}>
							Email
						</span>
					</a>
				</li>
			</ul>
			<div classes={[css.logo]} />
			<ul classes={[css.legal]}>
				<li classes={[css.legalitem]}>
					<a
						classes={[css.legalitemlink]}
						href="https://github.com/GoogleChrome/devsummit"
						rel="noopener noreferrer"
						target="_blank"
					>
						<span
							classes={[
								css.iconmask,
								css.icongithub,
								css.legalitemlinkspan
							]}
						/>{" "}
						Source Code
					</a>
				</li>
				<li classes={[css.legalitem]}>
					<a
						classes={[css.legalitemlink]}
						href="https://policies.google.com/"
						rel="noopener noreferrer"
						target="_blank"
					>
						Privacy &amp; Terms
					</a>
				</li>
				<li classes={[css.legalitem]}>© Google 2019</li>
			</ul>
		</div>
	);
});

export default Footer;
