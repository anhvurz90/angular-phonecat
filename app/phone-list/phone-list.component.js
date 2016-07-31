'use strict';

//Register 'phoneList' component, along with its associated controller & template
angular.module("phoneList")
	.component("phoneList", {
		templateUrl: 'phone-list/phone-list.template.html',
		controller: function PhoneListController() {
			this.phones = [
				{
					name: "Nexus S",
					snippet: "Fast just got faster with Nexus S."
				}, {
					name: "Motorola XOOM with Wi-Fi",
					snippet: "The Next, Next Generation tablet."
				}, {
					name: "MOTOROLA",
					snippet: "The Next, Next Genration tablet."
				}
			];
		}
	});