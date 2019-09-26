import { create, tsx } from "@dojo/framework/core/vdom";
import intersection from '@dojo/framework/core/middleware/intersection';

import * as css from "./Previously.m.css";
// import * as sharedcss from "../../shared.m.css";
import * as sectioncss from "./sections.m.css";

const factory = create({intersection});


export default factory(function Previously({middleware: {intersection}}) {
	return (
		<section classes={[sectioncss.rootalt]}>
			<h1 classes={[sectioncss.heading]}>Previously</h1>
			<p>
				All previous sessions are on YouTube:
				<a href="https://www.youtube.com/playlist?list=PLNYkxOF6rcIDjlCx1PcphPpmf43aKOAdF">
					2018
				</a>
				,
				<a href="https://www.youtube.com/playlist?list=PLNYkxOF6rcICUD5nBfRdAR6Fveosnqa5m">
					2017
				</a>
				,
				<a href="https://www.youtube.com/playlist?list=PLNYkxOF6rcIBTs2KPy1E6tIYaWoFcG3uj">
					2016
				</a>
				,
				<a href="https://www.youtube.com/playlist?list=PLNYkxOF6rcICcHeQY02XLvoGL34rZFWZn">
					2015
				</a>
				. You get the picture!
			</p>
			<div classes={[css.pics]} key="pics">
				<div classes={[css.initialpics]}>
					<img
						decoding="async"
						data-src="https://developer.chrome.com/devsummit/_includes/previously/assets/BE8A5681_1x-2620d0e1.jpg"
						data-srcset="
      https://developer.chrome.com/devsummit/_includes/previously/assets/BE8A5681_3x-80296377.jpg 3x,
      https://developer.chrome.com/devsummit/_includes/previously/assets/BE8A5681_2x-e2bca08d.jpg 2x
    "
						style="opacity: 1;"
					/>
					<img
						decoding="async"
						data-src="https://developer.chrome.com/devsummit/_includes/previously/assets/BE8A6532_1x-802f2c39.jpg"
						data-srcset="
      https://developer.chrome.com/devsummit/_includes/previously/assets/BE8A6532_3x-22545ca5.jpg 3x,
      https://developer.chrome.com/devsummit/_includes/previously/assets/BE8A6532_2x-2d858971.jpg 2x
    "
						style="opacity: 1;"
					/>
					<img
						decoding="async"
						data-src="https://developer.chrome.com/devsummit/_includes/previously/assets/CDSP18-057_1x-352e4326.jpg"
						data-srcset="
      https://developer.chrome.com/devsummit/_includes/previously/assets/CDSP18-057_3x-2c991329.jpg 3x,
      https://developer.chrome.com/devsummit/_includes/previously/assets/CDSP18-057_2x-b1fbb2b4.jpg 2x
    "
						style="opacity: 1;"
					/>
				</div>
				<div classes={[css.extrapics]}>
					<img
						decoding="async"
						data-src="https://developer.chrome.com/devsummit/_includes/previously/assets/CDSP18-214_1x-9aaacfa2.jpg"
						data-srcset="
      https://developer.chrome.com/devsummit/_includes/previously/assets/CDSP18-214_3x-ed39d15e.jpg 3x,
      https://developer.chrome.com/devsummit/_includes/previously/assets/CDSP18-214_2x-1ad58161.jpg 2x
    "
						style="opacity: 1;"
					/>
					<div />
					<img
						decoding="async"
						data-src="https://developer.chrome.com/devsummit/_includes/previously/assets/CDSP18-256_1x-762563f4.jpg"
						data-srcset="
      https://developer.chrome.com/devsummit/_includes/previously/assets/CDSP18-256_3x-939d3b62.jpg 3x,
      https://developer.chrome.com/devsummit/_includes/previously/assets/CDSP18-256_2x-34bc95ab.jpg 2x
    "
						style="opacity: 1;"
					/>
					<img
						decoding="async"
						data-src="https://developer.chrome.com/devsummit/_includes/previously/assets/CDSP18-109_1x-13e185d5.jpg"
						data-srcset="
      https://developer.chrome.com/devsummit/_includes/previously/assets/CDSP18-109_3x-133fa25d.jpg 3x,
      https://developer.chrome.com/devsummit/_includes/previously/assets/CDSP18-109_2x-8f42ed14.jpg 2x
    "
						style="opacity: 1;"
					/>
					<img
						decoding="async"
						data-src="https://developer.chrome.com/devsummit/_includes/previously/assets/BE8A4369_1x-a69b07f6.jpg"
						data-srcset="
      https://developer.chrome.com/devsummit/_includes/previously/assets/BE8A4369_3x-c8a9315e.jpg 3x,
      https://developer.chrome.com/devsummit/_includes/previously/assets/BE8A4369_2x-d1dfb505.jpg 2x
    "
						style="opacity: 1;"
					/>
					<div />
					<img
						decoding="async"
						data-src="https://developer.chrome.com/devsummit/_includes/previously/assets/CDSP18-076_1x-6b903ff5.jpg"
						data-srcset="
      https://developer.chrome.com/devsummit/_includes/previously/assets/CDSP18-076_3x-c1c9933a.jpg 3x,
      https://developer.chrome.com/devsummit/_includes/previously/assets/CDSP18-076_2x-bd9cf392.jpg 2x
    "
						style="opacity: 1;"
					/>
					<div />
					<img
						decoding="async"
						data-src="https://developer.chrome.com/devsummit/_includes/previously/assets/BE8A4245_1x-fef64e74.jpg"
						data-srcset="
      https://developer.chrome.com/devsummit/_includes/previously/assets/BE8A4245_3x-5c558285.jpg 3x,
      https://developer.chrome.com/devsummit/_includes/previously/assets/BE8A4245_2x-7a601103.jpg 2x
    "
						style="opacity: 1;"
					/>
				</div>
			</div>
			<script
				async=""
				src="https://developer.chrome.com/devsummit/_includes/previously/script-34771308.js"
			/>
		</section>
	);
});
