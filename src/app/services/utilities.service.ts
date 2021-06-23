import { EventEmitter, Injectable } from '@angular/core'
import { LoadingController } from '@ionic/angular'
import { ToastController } from '@ionic/angular'


@Injectable({
	providedIn: 'root'
})
export class UtilitiesService {

	private _loader: any = null
	public labelEvent: EventEmitter<boolean> = new EventEmitter<boolean>()
	
	constructor(
		private _loading: LoadingController,
		private _toast: ToastController
	) { }

	//*****************************************************
	//*******************     LODAER     ******************
	//*****************************************************

		/** Show loading indicator */
		async presentLoading(): Promise<void> {
			if(this._loader === null) {
				this._loader = await this._loading.create({})

				return await this._loader.present()							
			}
		}

		/** Dismiss loading indicator */
		async dismissLoading(): Promise<void> {
			if(this._loader !== null) {
				return await this._loading.getTop()
					.then(
						ldg => {
							this._loader = null

							if (ldg) {
								ldg.dismiss()
							}
				        }
				    )
			}
		}

	//*****************************************************
	//*******************     LODAER     ******************
	//*****************************************************

		/** Show loading indicator 
		* Params:
		* type: string => "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"
		* message: string
		*/
		async Toast(type: string, message: string): Promise<void> {
			const toast = await this._toast.create(
				{
					color: type,
					message: message,
					duration: 1000,
					position: 'top'
				}
			)

			toast.present()					
		}

	public labelSelect(): void {
		this.labelEvent.emit(true)
	}
}
