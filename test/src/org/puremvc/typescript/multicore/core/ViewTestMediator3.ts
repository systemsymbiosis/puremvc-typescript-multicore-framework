///<reference path='../../../../../../../bin/puremvc-typescript-multicore-1.0.d.ts'/>

///<reference path='ViewTest.ts'/>

module test
{
	"use strict";

	/**
	 * A Mediator class used by ViewTest.
	 */
	export class ViewTestMediator3
		extends puremvc.Mediator
		implements puremvc.IMediator
	{
		/**
		 * Constructs a <code>Mediator</code> subclass instance.
		 *
		 * @param view
		 * 		The view component handled by this <code>Mediator</code>.
		 */
		constructor( view:any )
		{
			super( ViewTestMediator3.NAME, view );
		}

		/**
		 * Standard getter to return the view handled by the <code>Mediator</code>.
		 *
		 * @return
		 * 		The view handled by the <code>Mediator</code>.
		 */
		getViewTest():any
		{
			return this.viewComponent;
		}

		/**
		 * @override
		 *
		 * @return
		 * 		The list of notifications names in which is interested the <code>Mediator</code>.
		 */
		listNotificationInterests():string[]
		{
			// Be sure that the mediator has some Observers created in order to test removeMediator.
			return [ ViewTest.NOTE3 ];
		}

		/**
		 * @override
		 *
		 * @param notification
		 * 		The notification instance to be handled.
		 */
		handleNotification( notification:puremvc.INotification )
		{
			this.getViewTest().lastNotification = notification.getName();
		}

		/**
		 * The Mediator name.
		 *
		 * @constant
		 */
		public static NAME:string = 'ViewTestMediator3';
	}
}