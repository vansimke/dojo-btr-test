import { create, tsx } from "@dojo/framework/core/vdom";

import * as css from "./FAQ.m.css";
import * as sectioncss from "./sections.m.css";

const factory = create();

export default factory(function FAQ() {
	return (
		<section classes={[css.root, sectioncss.root]} id="faq">
			<div classes={[sectioncss.headingsplit]}>
				<h1 classes={[sectioncss.heading]}>FAQ</h1>
				<a
					href="https://developer.chrome.com/devsummit/faqs/"
					classes={[sectioncss.headinglink]}
				>
					All 20 frequently asked questions
				</a>
			</div>
			<div classes={[css.faqcontainer]}>
				<div classes={[css.faqs]}>
					<section classes={[css.faq]}>
						<h1 classes={[css.faqheading]}>
							What is Chrome Dev Summit 2019?
						</h1>
						<section classes={[css.faqcontent]}>
							<p>
								Chrome Dev Summit is an annual conference where
								developers can learn about the latest tools and
								updates coming to the Google Chrome browser.{" "}
								<a href="https://developer.chrome.com/devsummit/faqs/#general">
									Read more
								</a>
								.
							</p>
						</section>
					</section>
					<section classes={[css.faq]}>
						<h1 classes={[css.faqheading]}>
							How can I register for Chrome Dev Summit 2019 and
							how much does it cost?
						</h1>
						<section classes={[css.faqcontent]}>
							<p>
								Tickets to Chrome Dev Summit are offered at no
								charge, but you must submit an application to
								register and admissions are invite-only.{" "}
								<a href="https://developer.chrome.com/devsummit/faqs/#registration">
									Read more
								</a>
								.
							</p>
						</section>
					</section>
					<section classes={[css.faq]}>
						<h1 classes={[css.faqheading]}>Where is my ticket?</h1>
						<section classes={[css.faqcontent]}>
							<p>
								If we accept your application, you will receive
								a confirmation email with a ticket.{" "}
								<a href="https://developer.chrome.com/devsummit/faqs/#confirmation">
									Read more
								</a>
								.
							</p>
						</section>
					</section>
					<section classes={[css.faq]}>
						<h1 classes={[css.faqheading]}>
							Do you have any tips to help me navigate through
							Chrome Dev Summit?
						</h1>
						<section classes={[css.faqcontent]}>
							<p>
								Our registration process quickly gets attendees
								and speakers in to the event and straight to the
								Chrome content.{" "}
								<a href="https://developer.chrome.com/devsummit/faqs/#attendance-details">
									Read more
								</a>
								.
							</p>
						</section>
					</section>
					<section classes={[css.faq]}>
						<h1 classes={[css.faqheading]}>
							Can you accommodate people who require special
							assistance?
						</h1>
						<section classes={[css.faqcontent]}>
							<p>
								Google strives to make events open and
								accessible to everyone, regardless of disability
								or special needs.{" "}
								<a href="https://developer.chrome.com/devsummit/faqs/#accessibility-accommodations-for-attendees">
									Read more
								</a>
								.
							</p>
						</section>
					</section>
				</div>
			</div>
		</section>
	);
});
