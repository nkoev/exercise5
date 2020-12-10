sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("home.kpmg.exercise5.controller.UserDetail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf home.kpmg.exercise5.view.UserDetail
		 */
		onInit: function () {

		},

		_onObjectMatched: function (oEvent) {
			this.getView()
				.bindElement({
					path: "/" + window.decodeURIComponent(oEvent.getParameter(
							"arguments")
						.eventPath)

				});
		}

	});

});