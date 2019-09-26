import { create, tsx } from "@dojo/framework/core/vdom";

import * as css from "./ConfDetails.m.css";
import * as sharedcss from "../../shared.m.css";

const factory = create();

export default factory(function ConfDetails() {
	return (
		<div classes={[css.root]}>
			<div classes={[css.dinocrossing]} aria-hidden="true">
				<svg viewBox="0 0 2 5" classes={[css.sign]}>
					<clipPath id="sign-clip-path">
						<use
							href="#sign-path"
							transform="translate(1, 1) scale(0.9) translate(-1, -1)"
						/>
					</clipPath>
					<path
						id="sign-path"
						classes={[css.signpath]}
						d="M 1,5 V2 L0,1 L1,0 L2,1 L1,2"
					/>

					<path
						clip-path="url(#sign-clip-path)"
						classes={[css.crossingpath]}
						d="M0,1.36 H2 M0,1.6 H2"
					/>
					<use
						classes={[css.signdinooutline]}
						width="0.9"
						height="0.9"
						x="0.56"
						y="0.57"
						href="#dino"
					/>
					<use
						classes={[css.signdino]}
						width="0.9"
						height="0.9"
						x="0.56"
						y="0.57"
						href="#dino"
					/>
				</svg>
				<div classes={[css.dinos]}>
					<svg
						id="dino"
						classes={[css.babydino]}
						viewBox="0 0 495 534"
					>
						<path d="M216 0H25m166 64h-26V38h26zM25 0v25H0v115h127v25H51v26h101v50H89v64h25v-38h26v76h25v38h26v25h25v102h-25v26h50v-77h26v-25h25v25h26v26h25v25h-25v26h50V432h26v-26h25v-25h26v-25h25v-26h25V191h-25v50h-25v26h-26v25h-51v-25h-25v-26h-38v-25h-38v-25h-26V25h-25V0" />
					</svg>{" "}
					<svg classes={[css.babydino]} viewBox="0 0 495 534">
						<use href="#dino" />
					</svg>{" "}
					<svg classes={[css.babydino]} viewBox="0 0 495 534">
						<use href="#dino" />
					</svg>{" "}
					<svg classes={[css.babydino]} viewBox="0 0 495 534">
						<use href="#dino" />
					</svg>{" "}
					<svg classes={[css.babydino]} viewBox="0 0 495 534">
						<use href="#dino" />
					</svg>{" "}
					<svg classes={[css.babydino]} viewBox="0 0 495 534">
						<use href="#dino" />
					</svg>{" "}
					<svg classes={[css.babydino]} viewBox="0 0 495 534">
						<use href="#dino" />
					</svg>{" "}
					<svg classes={[css.babydino]} viewBox="0 0 495 534">
						<use href="#dino" />
					</svg>{" "}
					<svg classes={[css.babydino]} viewBox="0 0 495 534">
						<use href="#dino" />
					</svg>{" "}
					<svg classes={[css.babydino]} viewBox="0 0 495 534">
						<use href="#dino" />
					</svg>{" "}
					<svg classes={[css.babydino]} viewBox="0 0 495 534">
						<use href="#dino" />
					</svg>{" "}
					<svg classes={[css.babydino]} viewBox="0 0 495 534">
						<use href="#dino" />
					</svg>{" "}
					<svg classes={[css.babydino]} viewBox="0 0 495 534">
						<use href="#dino" />
					</svg>{" "}
					<svg classes={[css.babydino]} viewBox="0 0 495 534">
						<use href="#dino" />
					</svg>{" "}
					<svg classes={[css.babydino]} viewBox="0 0 495 534">
						<use href="#dino" />
					</svg>
				</div>
			</div>
			<div classes={[css.confdetail]}>
				<p>
					<span classes={[css.date]}>
						<span classes={[css.month]}>November</span>
						<time datetime="2019-11-11T17:00:00.000Z">11</time>-
						<time datetime="2019-11-13T01:00:00.000Z">12</time>
					</span>
					<a
						href="https://goo.gl/maps/TBiTuFitnqe1wxPW7"
						rel="noopener noreferrer"
						target="_blank"
						classes={[css.locationmain]}
					>
						Yerba Buena Center for the Arts
					</a>
					<span classes={[css.locationsub]}>San Francisco, CA</span>
				</p>
				<div classes={[css.about]}>
					<p>
						Join us at our annual developer conference for two days
						of conversations, demos and office hours with the Chrome
						team, as we work with the community to build the future
						of the Web.
					</p>
				</div>
				<div classes={[css.actions]}>
					<a
						href="https://events.withgoogle.com/chrome-dev-summit-2019/registrations/new/"
						rel="noopener noreferrer"
						target="_blank"
						classes={[sharedcss.register]}
					>
						Request an invite
					</a>
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSdqEfT0jfgRNIGqibWxBe8X1Dt0a2FcHdituhRhG1tNGL1sBQ/viewform"
						rel="noopener noreferrer"
						target="_blank"
						classes={[css.getupdates]}
					>
						Get Updates
					</a>
				</div>
			</div>
		</div>
	);
});
