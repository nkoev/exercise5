sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("home.kpmg.exercise5.controller.UserDetail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf home.kpmg.exercise5.view.UserDetail
		 */
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("UserDetail")
				.attachPatternMatched(this._onObjectMatched, this);
		},

		_onObjectMatched: function (oEvent) {
			var aDetailId, selectedItemPath, detailForm;
			aDetailId = oEvent.getParameter("arguments").detailId;

			selectedItemPath = "/userdataSet('" + aDetailId + "')";
			detailForm = this.getView().byId("detailForm");
			detailForm.bindElement({
				path: selectedItemPath
			});
		},
		onNavToMaster: function (oEvent) {
			this.getOwnerComponent().getRouter().navTo("RouteMain");
		},

		onUserCreate: function () {
			var path = "/userdataSet";
			var boundItem = this.getView().getModel().getProperty(this.getView().byId("detailForm").getElementBinding().getPath());
			var msg = this.getView().getModel("i18n").getResourceBundle().getText("employeeCreated", boundItem.UserId);
			this.getView().getModel().create(path, boundItem, {
				success: function () {
					MessageBox.success(msg);
				},
				error: function (oError) {
					MessageBox.error(oError.responseText);
				}
			});
		},

		onUserUpdate: function () {
			var path = this.getView().byId("detailForm").getElementBinding().getPath();
			var boundItem = this.getView().getModel().getProperty(path);
			// var lastname = boundItem.Lastname; // nok: getProperty()  getValue() data() oEvent.getSource().data("IdEmployee")
			var msg = this.getView().getModel("i18n").getResourceBundle().getText("employeeUpdated", boundItem.UserId);
			this.getView().getModel().update(path, boundItem, {
				success: function () {
					MessageBox.success(msg); // update does not return anything
				},
				error: function (oError) {
					MessageBox.error(oError.responseText);
				}
			});
		},

		onUserDelete: function () {
			var path = this.getView().byId("detailForm").getElementBinding().getPath();
			var boundItem = this.getView().getModel().getProperty(path);
			var msg = this.getView().getModel("i18n").getResourceBundle().getText("employeeDeleted", boundItem.UserId);
			this.getView().getModel().remove(path, {
				success: function () {
					MessageBox.success(msg);
				},
				error: function (oError) {
					MessageBox.error(oError.responseText);
				}
			});
		}

	});

});