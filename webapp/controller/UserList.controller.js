sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("home.kpmg.exercise5.controller.UserList", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf home.kpmg.exercise5.view.UserList
		 */
		onInit: function () {

		},

		onNavToDetail: function (oEvent) {
			var oItem = oEvent.getSource().getSelectedItem();
			var oCtx = oItem.getBindingContext();
			var oId = oCtx.getProperty("UserId"); //oCtx.getPath() - prepare detailId for URL /detail/{detailId}

			this.getOwnerComponent().getRouter().navTo("detail", {
				detailId: oId
			});
		}

	});

});